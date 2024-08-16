import { useState } from 'react'



const Button = (props) => (  
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const StatisticLine = ({text, value}) => {
 return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{text === "positive" ? value+'%':value}</td>
      </tr>
    </tbody>
  )
}
const Statistics = ({good, neutral, bad, all}) => {
  if( all === 0 ){
    return (
      <div>
      <h1>Statistics</h1>
      <p>No feedback gven</p>
      </div>
    )
  }
  const avg = ((good-bad)/(all)).toFixed(1);
  const positive = ((good/all)*100).toFixed(1);
  return (
    <div>
      <h1>Statistics</h1>
      <table>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={avg} />
      <StatisticLine text="positive" value={positive} />
      </table>
      </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0);
 
  const handleGoodClick = () => {
      const updatedGood = good+1;
      setGood(updatedGood);
      setAll(updatedGood+neutral+bad);
  }
  const handleNeutralClick = () => {
      const updatedNeutral = neutral+1;
      setNeutral(updatedNeutral);
      setAll(good+updatedNeutral+bad);  
  }
  const handleBadClick = () => {
      const updatedBad = bad+1;
      setBad(updatedBad);
      setAll(good+neutral+updatedBad);
  }
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={handleGoodClick}/>
      <Button text="neutral" handleClick={handleNeutralClick}/>
      <Button text="bad" handleClick={handleBadClick}/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App