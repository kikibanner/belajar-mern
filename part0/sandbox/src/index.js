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

//=====================================
//=====================================
//=====================================

const Display = ({ counter }) => <div>{counter}</div>

const Tombol = ( {handleClick, text} ) => {
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
      <Tombol 
        handleClick={increaseByOne}
        text='tambah'
      />
      <Tombol 
        handleClick={setToZero}
        text='reset'
      />
      <Tombol 
        handleClick={decreaseByOne}
        text='kurang'
      />
    </div>
  )
}

//=====================================
//=====================================
//=====================================

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = (props) => { 
  console.log('props value is', props)
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Hi = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('Kiri'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('Kanan'))
    setRight(right + 1)
  }

  return(
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text="left" />
        <Button onClick={handleRightClick} text="right" />
        {right}
        <History allClicks={allClicks}/>
      </div>
    </div>
  )
}

//=====================================
//=====================================
//=====================================

const Mantab = (props) => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => () => {
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>sewu</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>penambahan</button>
    </div>
  )
}

//=====================================
//=====================================
//=====================================

ReactDOM.render(<App />, document.getElementById('root1'))
ReactDOM.render(<Hello />, document.getElementById('root2'))
ReactDOM.render(<Hi />, document.getElementById('root3'))
ReactDOM.render(<Mantab />, document.getElementById('root4'))





