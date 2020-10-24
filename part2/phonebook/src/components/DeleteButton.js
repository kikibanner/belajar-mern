import React from 'react'

const DeleteButton = ({ person, dropName }) => {
    return <button
                onClick={() => dropName(person)}>
                delete
            </button>
}

export default DeleteButton