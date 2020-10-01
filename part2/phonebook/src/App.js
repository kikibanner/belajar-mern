import React, { useState } from 'react'

const Person = ({ person }) => {
  return(
    <p>
      {person.name} {person.number}
    </p>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { id: 0, 
      name: 'Karto Tuying',
      number: '081222000222'
    }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

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
      default:
        break;
    }
  }

  return(
    <div>
      <h2>The Phonebook</h2>
      <form onSubmit={addName} onChange={handlePerson}>
        <div>
          name: 
          <input
            value={newName}
            onChange={(event) => handlePerson(event, "name")} />
        </div>
        <div>
          number: 
          <input
            value={newNumber}
            onChange={(event) => handlePerson(event, "number")} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <Person key={person.id} person={person}/>)}
      </div>
    </div>
  )
}

export default App