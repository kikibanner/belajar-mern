import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  if (props.total === 0) {
    return(
      <div>
        No Feedback Given
      </div>
    )
  }

  return(
    <div>
      <table>
        <tr>
          <td>good</td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{props.total}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{props.average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{props.persen} %</td>
        </tr>
      </table>
    </div>
  )
}

const Button = (props) => {
  const {onClick, text} = props
  return(
    <div>
      <button onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  //const [jumlahPelanggan, setJumlahPelanggan] = useState(0)

  const handleGood = () => {
    setTotal(total + 1)
    setGood(good + 1)
    //setPositive(positive + 1)
    //setJumlahPelanggan(jumlahPelanggan + 1)
  }

  const handleNeutral = () => {
    setTotal(total + 1)
    setNeutral(neutral + 1)
    //setJumlahPelanggan(jumlahPelanggan + 1)
  }

  const handleBad = () => {
    setTotal(total + 1)
    setBad(bad + 1)
    //setJumlahPelanggan(jumlahPelanggan + 1)
  }

  const positivePercentage = () => {
    return ((good / total) * 100).toFixed(2)
  }

  const rataRata = () => {
    return ((good - bad) / total).toFixed(2)
  }
  
  return (
    <div>
      <h2>Give Feedback</h2>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={rataRata()} persen={positivePercentage()}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)