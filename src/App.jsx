import Header from './components/Ui/Header.jsx'
import UserInput from './components/UserInput.jsx'
import { calculateInvestmentResults } from './util/investment'
import { useState } from 'react'
import ResultTable from './components/ResultTable.jsx'

function App() {
  const [form, setForm] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  })

  function handleInputChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

    calculateInvestmentResults(form)
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
      <ResultTable />
    </main>
  )
}

export default App
