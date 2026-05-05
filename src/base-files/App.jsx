import './App.css'
import Form from '../form-section/Form'
import Display from '../display-section/Display'

import { useState } from 'react'

function App() {
  let [ isFormValid, setFormValidity ] = useState(false);

  return (
    <>
      <Form />
      <Display isFormValid={isFormValid} />
    </>
  )
}

export default App
