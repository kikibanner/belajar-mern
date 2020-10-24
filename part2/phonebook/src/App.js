import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import personService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  //this state is use for the filter name
  const [filteredPersona, setFiltered] = useState()
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  //effect callback
  const hook = () => {
      personService
          .getAll()
          .then(personsData => {
              setPersons(personsData)
          })
  }

  useEffect(hook, [])

  //helper function
  const isValidData = () => {
      if (newName.trim() === '' || newNumber.length < 3) return false

      const findedPerson = persons.find(person => person.name === newName)

      if (findedPerson) {
          const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
          if (result) {
              const newPerson = {
                  id: findedPerson.id,
                  name: newName,
                  number: newNumber
              }
              handleOnUpdate(newPerson)
          }
          return false
      }
      return true
  }

  const cleanForm = () => {
      setNewName('')
      setNewNumber('')
  }

  const handleOnSubmit = (event) => {
      event.preventDefault()
      if (isValidData()) {
          const personObj = {
              name: newName,
              number: newNumber
          }
          personService
              .create(personObj)
              .then((createdPerson) => {
                  setPersons(persons.concat(createdPerson))

                  cleanForm()
              })
      }
  }

  const handleFilterChange = (event) => {
      const value = event.target.value.toLowerCase()
      const filtered = persons.filter(person =>
          person.name
              .toLowerCase()
              .trim()
              .includes(value)
      )
      setFiltered(filtered)
  }

  const handleOnDelete = (person) => {
      const result = window.confirm(`Delete ${person.name}`)
      if (result) {
          personService
              .Delete(person.id)
          setPersons(persons.filter(p => p.id !== person.id))
      }
  }

  const handleOnUpdate = (updatePersonObj) => {
      personService
          .Update(updatePersonObj)
          .then(personData => {
              let newListPersons = persons.map(person => person.name === personData.name ? personData : person)

              setPersons(newListPersons)
              setFiltered(newListPersons)

              cleanForm()
          })
  }

  return (
      <div>
          <h2>Phonebook</h2>
          <Filter onChange={handleFilterChange} />
          <h3>add a new number</h3>
          <PersonForm
              newName={newName}
              newNumber={newNumber}
              handleOnSubmit={handleOnSubmit}
              handleNameChange={handleNameChange}
              handleNumberChange={handleNumberChange}
          />
          <h3>Numbers</h3>
          <Persons
              persons={filteredPersona ? filteredPersona : persons}
              handleOnDelete={handleOnDelete}
          />
      </div>
  )
}
export default App
