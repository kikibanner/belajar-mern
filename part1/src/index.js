import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Membuat components
// nama components harus kapital
// PROPS = digunakan untuk mempass data kedalam components

const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = (props) => { 
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
    </div>
  )
}

// 10,7,14
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {10 + 7 + 14}</p>
    </div>
  )
}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course}/>
      <Content part1={parts[0].name} exercises1={parts[0].exercises} part2={parts[1].name} exercises2={parts[1].exercises} part3={parts[2].name} exercises3={parts[2].exercises}/>
      <Total />
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>

const Button = ( {handleClick, text} ) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Hello = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return(
    <div>
      <Display counter={counter} />
      <Button 
        handleClick={increaseByOne}
        text='tambah'
      />
      <Button 
        handleClick={setToZero}
        text='reset'
      />
      <Button 
        handleClick={decreaseByOne}
        text='kurang'
      />
    </div>
  )
} 

ReactDOM.render(<Hello />, document.getElementById('joss'))

ReactDOM.render(<App />, document.getElementById('root'))





