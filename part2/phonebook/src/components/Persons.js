import React from "react";

const Person = (props) => {
    return(
      <div>
        {props.name} {props.number}
      </div>
    )
}
  
  const Persons = ({ persons }) => {
    const personList = persons.map((person => {
      return (
        <Person 
          key={person.id}
          name={person.name}
          number={person.number}
        />
      )
    }))
    return(
      <div>
        <h3>Contact List</h3>
        {personList}
      </div>
    )
}

export default Persons;