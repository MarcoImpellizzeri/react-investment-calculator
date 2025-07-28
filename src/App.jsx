import Header from './components/Ui/Header.jsx'
import UserInput from './components/UserInput.jsx'
import { calculateInvestmentResults } from './util/investment'
import { useEffect, useState } from 'react'
import ResultTable from './components/ResultTable.jsx'

function App() {
  const [results, setResults] = useState([])

  const [form, setForm] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 1
  })

  function handleInputChange(e) {
    const { name, value } = e.target

    // clone + modifica
    const updatedForm = {
      ...form,
      [name]: +value // converti in numero se serve
    }

    setForm(updatedForm)
    calculateInvestmentResults(updatedForm)
    const calculatedResults = calculateInvestmentResults(updatedForm)
    setResults(calculatedResults)
  }

  return (
    <main>
      <Header />
      <div className="input-group">
        <div id="user-input">
          <UserInput
            label="Initial Investment"
            value={form.initialInvestment}
            name="initialInvestment"
            onChange={handleInputChange}
          />
          <UserInput
            label="Annual Investment"
            value={form.annualInvestment}
            name="annualInvestment"
            onChange={handleInputChange}
          />
          <UserInput
            label="Expected Return"
            value={form.expectedReturn}
            name="expectedReturn"
            onChange={handleInputChange}
          />
          <UserInput
            label="Duration"
            value={form.duration}
            name="duration"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <ResultTable data={results}/>
    </main>
  )
}

export default App
