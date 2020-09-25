import React from 'react'
import Course from './components/Course'

const App = ({ course }) => {
  return (
    <div>
        {course.map(c=>
            <Course key={c.id} course={c}/>)}
    </div>
  )
}

export default App