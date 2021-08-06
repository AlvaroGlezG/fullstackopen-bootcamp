import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => <h1>{course.course.name}</h1>;
const Part = ({ part, exercises }) => <p> {part} {exercises} </p>;
const Content = ({ parts }) => {
  console.log(parts)

  return (
    <div>
      <Part part={parts.course.parts[0].name} exercises={parts.course.parts[0].exercises} />
      <Part part={parts.course.parts[1].name} exercises={parts.course.parts[1].exercises} />
      <Part part={parts.course.parts[2].name} exercises={parts.course.parts[2].exercises} />
    </div>
  );
};
const Total = ({ num }) => <p>Number of exercises {num.course.parts[0].exercises + num.course.parts[1].exercises + num.course.parts[2].exercises}</p>;

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  // console.log(parts)
  return (
    <div>
      <Header course={{ course }} />
      <Content parts={{ course }} />
      <Total num={{ course }} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))