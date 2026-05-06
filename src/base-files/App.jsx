import './App.css'
import Form from '../form-section/Form'
import Display from '../display-section/Display'

import { useState } from 'react'

function App() {
  let [ isFormValid, setFormValidity ] = useState(false);
  let [ mortgageAmount, setMortgageAmount ] = useState(0);
  let [ mortgageTerm, setMortgageTerm ] = useState(0);
  let [ interestRate, setInterestRate ] = useState(0);
  let [ mortgageType, setMortgageType ] = useState("");

  return (
    <>
      <Form setFormValidity={setFormValidity} mortgageAmount={mortgageAmount} mortgageTerm={mortgageTerm} interestRate={interestRate} mortgageType={mortgageType} setMortgageAmount={setMortgageAmount} setMortgageTerm={setMortgageTerm} setInterestRate={setInterestRate} setMortgageType={setMortgageType} />
      <Display isFormValid={isFormValid} mortgageAmount={mortgageAmount} mortgageTerm={mortgageTerm} interestRate={interestRate} mortgageType={mortgageType} />
    </>
  )
}

export default App
