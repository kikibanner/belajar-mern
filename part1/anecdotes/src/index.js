import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// ngereturn angka int random antara min dan max
function randomify (min, max) {
  min = Math.ceil(min)
  max = Math.ceil(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const MostVoted = ({ votes }) => {
  // jika tiap anekdot memiliki 0 vote
  if (votes.every(x => x === 0)) {
    return (
      <div>
        belum ada anecdote yang di vote
      </div>
    )
  }

  // menghitung nilai max di array votes
  const maxVoteQuantity = Math.max(...votes)
  // cari indeks dimana nilai max berasal
  const maxVoted = votes.indexOf(maxVoteQuantity)

  return(
    <p>
      {anecdotes[maxVoted]}
      <br/>
      punya {maxVoteQuantity} vote
    </p>
  )
}

const App = (props) => {
  // state hook untuk anekdot yang diseleksi terkini
  const [selected, setSelected] = useState(0)

  // state hook untuk bikin 0-filled array berdasarkan panjang anekdot
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  //event handler untuk mendapatkan anekdot baru berdasarkan fungsi randomify yang udah dibikin diatas
  const handleNext = () => {
    const value = randomify(0, anecdotes.length - 1)
    setSelected(value)
  }

  //event handler untuk update salinan array votes dengan anekdot yang barusan di vote
  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <h1>Anekdot Hari ini</h1>

      {props.anecdotes[selected]}

      <br/>

      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNext}>Next</button>

      <h1>Anekdot paling banyak di-vote</h1>

      <MostVoted votes={votes}/>
    </div>
  )
}



const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)