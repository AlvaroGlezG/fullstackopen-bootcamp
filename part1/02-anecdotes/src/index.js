import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([1, 4, 6, 3, 2, 3])
  const [maxVoted, setMaxVoted] = useState(2)

  const anedotesSelector = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  const handleClickAnecdotes = () => {
    let anecdote = anedotesSelector()

    while(anecdote === selected){
      anecdote = anedotesSelector();
    }

    setSelected(anecdote)
  }

  const handleClickVotes = () => {
    const copyPoints = [...points]
    copyPoints[selected] = copyPoints[selected] + 1
    setPoints(copyPoints)

    setMaxVoted(copyPoints.indexOf(Math.max(...copyPoints)))
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={handleClickVotes}>vote</button>
      <button onClick={handleClickAnecdotes}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{props.anecdotes[maxVoted]}</p>
      <p>has {points[maxVoted]} votes</p>
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