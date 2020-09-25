import React, { useState } from 'react'

const Courses = ({ course }) => {
  return (
    <div>
        {course.map(c=>
            <Course key={c.id} course={c}/>)}
    </div>
  )
}

const Course = ({ course }) => {
  return (
      <div>
        <h1>{course.name}</h1>
            {course.parts.map(part => 
                <Part key={part.id} part={part} />)}
        <Total course={course} />
      </div>
  )
}

const Part = ({ part }) => {
    return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Total = ({ course }) => {
    return (
        <p style={{ fontWeight: 'bold' }}>
            Total number of exercises: {course.parts.reduce((tot, part) => tot + part.exercises, 0)}
        </p>
    )
}

/*
const Content = ({ course }) => {
  return (
    <div>
      <p>
        {course.parts.map( part =>
          <Part key={part.id} part={part}/>
        )}
      </p>
    </div>
  )
}

*/
export default Courses