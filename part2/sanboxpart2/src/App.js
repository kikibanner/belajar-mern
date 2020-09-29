import React, {useState} from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    'a new note...'
  )

  const addNote = (event) => {
    event.preventDefault() //method untuk memprevent submitting form scr default seng garakno page ngereload
    console.log('tombol ditekan', event.target) //event.target menyimpan target (targetnya adalah formnya itu), dan di log ke console
  }
  //part 2b
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <Note key={note.id} note={note} />)}
      </ul>
      <form onSubmit={addNote}>
          <input />
          <button type="submit">save</button>
      </form>
    </div>
  )
}
  
export default App