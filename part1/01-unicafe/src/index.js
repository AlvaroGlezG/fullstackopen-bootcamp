import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>);
}

const Statistics = (props) => {

  const { statistics } = props;
  const { good, neutral, bad } = statistics;

  return (<>
    <table>
      <tbody>
        <Statistic text="Good" value={good} />
        <Statistic text="Neutral" value={neutral} />
        <Statistic text="Bad" value={bad} />
        <Statistic text="All" value={good + neutral + bad} />
        <Statistic text="Average" value={((good * 1 + bad * -1) / (good + neutral + bad))} />
        <Statistic text="Positive" value={(good * 100) / (good + neutral + bad) + "%"} />
      </tbody>
    </table>
  </>);

}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => { setGood(good + 1) }
  const handleClickNeutral = () => { setNeutral(neutral + 1) }
  const handleClickBad = () => { setBad(bad + 1) }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClickGood} text="Good" />
      <Button handleClick={handleClickNeutral} text="Neutral" />
      <Button handleClick={handleClickBad} text="Bad" />

      <h1>statistics</h1 >
      {(good === 0) && (neutral === 0) && (bad === 0)
        ?
        <p>No feedback given</p>
        :
        <>
        <Statistics statistics={{ good, neutral, bad }} />
        </>}
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)