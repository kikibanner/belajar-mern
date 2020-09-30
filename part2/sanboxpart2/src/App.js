import React, {useState} from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault() //method untuk memprevent submitting form scr default seng garakno page ngereload
    const noteObject = { //buat opject baru, contenntnya ambil dari setNotes() di concat notes nya
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5, // 50% chance menjadi important (true or false, 1 or 0)
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(notes => notes.important)
  /* bingung kan? saya juga awalnya. Diatas adl conditional operator, contoh penggunaan:
    
  if we have ==>
  
        const result = condition ? val1 : val2
    
  the result variable will be set to the value of val1 if condition is true. 
  If condition is false, the result variable will be set to the value of val2.
  */
  
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />)}
      </ul>
      <form onSubmit={addNote}>
          <input 
            value ={newNote}
            onChange={handleNoteChange}/>
          <button type="submit">save</button>
      </form>
    </div>
  )
}
  
export default App