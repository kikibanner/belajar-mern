import React, { useState } from 'react'

const Person = ({ person }) => {
  return(
    <p>
      {person.name}
    </p>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Karto Tuying', id:0}
  ])
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const personsObject = {
      name: newName, 
      id: persons.length + 1
    }

    setPersons(persons.concat(personsObject))
    setNewName('')
  }

  const handlePerson = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return(
    <div>
      <h2>The Phonebook</h2>
      <form onSubmit={addName} onChange={handlePerson}>
        <div>
          name: 
          <input
            value={newName}
            onChange={handlePerson} />
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