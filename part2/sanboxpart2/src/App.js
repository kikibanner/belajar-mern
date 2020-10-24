import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise terpenuhi')
        setNotes(response.data)
      })
  }

  useEffect(hook, [])

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}

    noteService
      .update(id, changedNote).then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from the server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  console.log('nge-render sebanyak', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault() //method untuk memprevent submitting form scr default seng garakno page ngereload
    const noteObject = { //buat opject baru, contenntnya ambil dari setNotes() di concat notes nya
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5, // 50% chance menjadi important (true or false, 1 or 0)
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
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
          <Note 
            key={note.id} 
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
          />)}
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