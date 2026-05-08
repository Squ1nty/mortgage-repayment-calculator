import Form from './form-section/Form'
import Display from './display-section/Display'

import { useState } from 'react'

function App() {
  let [ isFormValid, setFormValidity ] = useState(false);
  let [ mortgageAmount, setMortgageAmount ] = useState(0);
  let [ mortgageTerm, setMortgageTerm ] = useState(0);
  let [ interestRate, setInterestRate ] = useState(0);
  let [ mortgageType, setMortgageType ] = useState("");

  return (
    <div className='grid place-items-center h-svh bg-[var(--slate-100)]'>
      <div className='w-full h-svh bg-white lg:grid lg:grid-cols-2 lg:h-fit lg:justify-center xl:max-w-[1000px] xl:rounded-[25px] xl:overflow-hidden'>
        <Form setFormValidity={setFormValidity} mortgageAmount={mortgageAmount} mortgageTerm={mortgageTerm} interestRate={interestRate} mortgageType={mortgageType} setMortgageAmount={setMortgageAmount} setMortgageTerm={setMortgageTerm} setInterestRate={setInterestRate} setMortgageType={setMortgageType} />
        <Display isFormValid={isFormValid} mortgageAmount={mortgageAmount} mortgageTerm={mortgageTerm} interestRate={interestRate} mortgageType={mortgageType} />
      </div>
    </div>
  )
}

export default App
