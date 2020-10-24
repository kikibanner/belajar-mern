import React from "react";
import DeleteButton from './DeleteButton'

const Persons = ({ persons, dropName }) => {
    return persons.map(person =>
        <div key={person.id}>
            {person.name} {person.number}
            <DeleteButton
                person={person}
                dropName={dropName}
            />
        </div>
    )
}
export default Persons