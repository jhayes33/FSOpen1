import React, {useState} from 'react'


const Statistics = ({good, neutral, bad}) =>{
    const total = good + neutral + bad
    if ( total === 0) {
        return (
            <div>
                <td>
                    <tr>
                        <p>No feedback given</p>
                    </tr>
                </td>
            </div>
        )
    }
    return(
        <div>
            <table>
                <StatisticLine text={'Good'} value={good}/>
                <StatisticLine text={'Neutral'} value={neutral}/>
                <StatisticLine text={'Bad'} value={bad}/>
                <StatisticLine text={'All'} value={total}/>
                <StatisticLine text={'Average'} value={(good - bad)/(total) }/>
                <StatisticLine text={'Positive'} value={good/ (total) * 100 + '%'}/>
            </table>
        </div>
    )
}

const StatisticLine = ({value, text}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Button =({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [selected, setSelected] = useState(0)

    const handleGoodClick = () => setGood(good+1)
    const handleNeutralClick = () => setNeutral(neutral+1)
    const handleBadClick = () => setBad(bad+1)
    const handleAnecdoteClick = () => setSelected(Math.floor(Math.random() * 7))

  return (
      <div>
          <h1>{anecdotes[selected]}</h1>
          <Button handleClick={handleAnecdoteClick} text={'Next Anecdote'}/>
          <h2>Give feedback</h2>
          <Button handleClick={handleGoodClick} text={'Good'}/>
          <Button handleClick={handleNeutralClick} text={'Neutral'}/>
          <Button handleClick={handleBadClick} text={'Bad'}/>

          <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>

  )


}
export default App;
