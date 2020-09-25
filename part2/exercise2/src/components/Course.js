import React from 'react'

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

export default Course