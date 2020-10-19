import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState("")

  const hook = () => {
    console.log('efek')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise terpenuhi')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const addName = (event) => {
    event.preventDefault()
    const personsObject = {
      name: newName,
      number: newNumber, 
      id: persons.length + 1
    }

    if (persons.find((p) => p.name === newName)) {
      alert(`${newName} sudah ada di phonebook`)
    }
    else{
      setPersons(persons.concat(personsObject))
      setNewName('')
      setNewNumber('')
      console.log(persons.find((p) => p.name === newName))
    }    
  }

  const handlePerson = (event, type) => {
    switch (type) {
      case "name":
        setNewName(event.target.value)
        break;
      case "number":
        setNewNumber(event.target.value)
        break;
      case "nameFilter":
        setNameFilter(event.target.value)
        break;
      default:
        break;
    }
  }

  const filteredPersons = persons.filter((person) => {
    return person.name.toLowerCase().includes(nameFilter.toLowerCase())
  })

  const onChangeName = (event) => handlePerson(event, "name")

  const onChangeNumber = (event) => handlePerson(event, "number")

  return(
    <div>
      <h2>The Phonebook</h2>
      <Filter 
        handleFilterChange={(event) => handlePerson(event, "nameFilter")}
        value={nameFilter}
      />

      <PersonForm 
        addName={addName}
        handlePerson={handlePerson}
        newName={newName}
        newNumber={newNumber}
        onChangeName={onChangeName}
        onChangeNumber={onChangeNumber}
      />

      <h2>Numbers</h2>
      <Persons 
        persons={filteredPersons}
      />
    </div>
  )
}

export default App