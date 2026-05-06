import '../base-files/index.css';
import { useState, useEffect, useRef, use } from 'react';

function Form({ setFormValidity, mortgageAmount, mortgageTerm, interestRate, mortgageType, setMortgageAmount, setMortgageTerm, setInterestRate, setMortgageType }) {
  let [hasRunOnce, setInitialRun ] = useState(false);
  const mortgageAmountInput = useRef(null);
  const mortgageAmountErrorLabelRef = useRef(null);
  const mortgageTermInput = useRef(null);
  const mortgageTermErrorLabelRef = useRef(null);
  const interestRateInput = useRef(null);
  const interestRateErrorLabelRef = useRef(null);
  const mortgageTypeErrorLabelRef = useRef(null);

  // Mortgage Amount Handling
  function handleMortgageAmount(){
    if((Number(mortgageAmount) === 0 || mortgageAmount === null || mortgageAmount.isNaN) && hasRunOnce){
      mortgageAmountInput.current.parentNode.classList.add("input--error");
      mortgageAmountErrorLabelRef.current.classList.add("input_label--error");
      mortgageAmountErrorLabelRef.current.textContent = "This field is required";
      mortgageAmountErrorLabelRef.current.removeAttribute("inert");
    }
    else if(mortgageTerm < 0 && hasRunOnce){
      mortgageAmountInput.current.parentNode.classList.add("input--error");
      mortgageAmountErrorLabelRef.current.classList.add("input_label--error");
      mortgageAmountErrorLabelRef.current.textContent = "Interest rate is invalid";
      mortgageAmountErrorLabelRef.current.removeAttribute("inert");
    }
    else{
      mortgageAmountInput.current.parentNode.classList.remove("input--error");
      mortgageAmountErrorLabelRef.current.classList.remove("input_label--error");
      mortgageAmountErrorLabelRef.current.textContent = "";
      mortgageAmountErrorLabelRef.current.setAttribute("inert", true);
    }
    setInitialRun(true);
  }
  useEffect(() => {
    handleMortgageAmount();
  }, [mortgageAmount]);       

  // Mortgage Term Handling
  function handleMortgageTerm(){
    if((Number(mortgageTerm) === 0 || mortgageTerm === null || mortgageTerm.isNaN) && hasRunOnce){
      mortgageTermInput.current.parentNode.classList.add("input--error");
      mortgageTermErrorLabelRef.current.classList.add("input_label--error");
      mortgageTermErrorLabelRef.current.textContent = "This field is required";
      mortgageTermErrorLabelRef.current.removeAttribute("inert");
    }
    else if(mortgageTerm < 0 && hasRunOnce){
      mortgageTermInput.current.parentNode.classList.add("input--error");
      mortgageTermErrorLabelRef.current.classList.add("input_label--error");
      mortgageTermErrorLabelRef.current.textContent = "Interest rate is invalid";
      mortgageTermErrorLabelRef.current.removeAttribute("inert");
    }
    else if(Number(interestRate % 1 !== 0) && hasRunOnce){
      mortgageTermInput.current.parentNode.classList.add("input--error");
      mortgageTermErrorLabelRef.current.classList.add("input_label--error");
      mortgageTermErrorLabelRef.current.textContent = "Interest rate must be a whole number";
      mortgageTermErrorLabelRef.current.removeAttribute("inert");
    }
    else{
      mortgageTermInput.current.parentNode.classList.remove("input--error");
      mortgageTermErrorLabelRef.current.classList.remove("input_label--error");
      mortgageTermErrorLabelRef.current.textContent = "";
      mortgageTermErrorLabelRef.current.setAttribute("inert", true);
    }
    setInitialRun(true);
  }
  useEffect(() => {
    handleMortgageTerm();
  }, [mortgageTerm]);

  // Interest Rate Handling
  function handleInterestRate(){
    if((Number(interestRate) === 0 || interestRate === null || interestRate.isNaN) && hasRunOnce){
      interestRateInput.current.parentNode.classList.add("input--error");
      interestRateErrorLabelRef.current.classList.add("input_label--error");
      interestRateErrorLabelRef.current.textContent = "This field is required";
      interestRateErrorLabelRef.current.removeAttribute("inert");
    }
    else if(interestRate < 0 && hasRunOnce){
      interestRateInput.current.parentNode.classList.add("input--error");
      interestRateErrorLabelRef.current.classList.add("input_label--error");
      interestRateErrorLabelRef.current.textContent = "Interest rate is invalid";
      interestRateErrorLabelRef.current.removeAttribute("inert");
    }
    else{
      interestRateInput.current.parentNode.classList.remove("input--error");
      interestRateErrorLabelRef.current.classList.remove("input_label--error");
      interestRateErrorLabelRef.current.textContent = "";
      interestRateErrorLabelRef.current.setAttribute("inert", true);
    }
    setInitialRun(true);
  }
  useEffect(() => {
    handleInterestRate();
  }, [interestRate]);

  // Mortgage Type Handling
  function handleMortgageType(){
    if(mortgageType === "" && hasRunOnce){
      mortgageTypeErrorLabelRef.current.classList.add("input_label--error");
      mortgageTypeErrorLabelRef.current.textContent = "This field is required";
      mortgageTypeErrorLabelRef.current.removeAttribute("inert");
    }
    else{
      mortgageTypeErrorLabelRef.current.classList.remove("input_label--error");
      mortgageTypeErrorLabelRef.current.textContent = "";
      mortgageTypeErrorLabelRef.current.setAttribute("inert", true);
    }
  }
  useEffect(() => {
    handleMortgageType();
  }, [mortgageType]);
  function handleRadioBtn(e){
    if(e.currentTarget.value === "repayment"){
      setMortgageType("repayment");
    }
    else if(e.currentTarget.value === "interest"){
      setMortgageType("interest");
    }
  }

  // Handling Submission
  function handleSubmit(e){
    e.preventDefault();

    if(mortgageAmount && mortgageTerm && interestRate && mortgageType){
      setFormValidity(true);
    }
    else{
      setFormValidity(false);
      handleMortgageAmount();
      handleMortgageTerm();
      handleInterestRate();
      handleMortgageType();
    }
    
  }

  return(
    <form onSubmit={handleSubmit}>
      <div> {/* Heading Section */}
        <h1>Mortgage Calculator</h1>
        <button className='p-16 cursor-pointer' type='reset'>Clear All</button>
      </div>
      <div> {/* Mortgage Amount */}
        <label htmlFor='mortgageAmountInput'>Mortgage Amount</label>
        <div className='flex gap-2 border-2'>
          <p>£</p>
          <input ref={mortgageAmountInput} id='mortgageAmountInput' className='w-full' type='number' onChange={(e) => setMortgageAmount(e.target.value)}></input>
        </div>
        <label htmlFor='mortgageAmountInput' ref={mortgageAmountErrorLabelRef} className='hidden text-[var(--red)]' inert></label>
      </div>
      <div> {/* Mortgage Term */}
        <label htmlFor='mortgageTermInput'>Mortgage Term</label>
        <div className='flex gap-2 border-2'>
          <input id='mortgageTermInput' ref={mortgageTermInput} className='w-full' type='number' onChange={(e) => setMortgageTerm(e.target.value)}></input>
          <p>years</p>
        </div>
        <label htmlFor='mortgageTermInput' ref={mortgageTermErrorLabelRef} className='hidden text-[var(--red)]' inert></label>
      </div>
      <div> {/* Interest Rate */}
        <label htmlFor='interestRateInput'>Interest Rate</label>
        <div className='flex gap-2 border-2'>
          <input id='interestRateInput' ref={interestRateInput} className='w-full' type='float' onChange={(e) => setInterestRate(e.target.value)}></input>
          <p>%</p>
        </div>
        <label htmlFor='interestRateInput' ref={interestRateErrorLabelRef} className='hidden text-[var(--red)]' inert></label>
      </div>
      <fieldset> {/* Mortgage Type */}
        <legend>Mortgage Type</legend>
        <div id='mortgageTypeInputContainer' aria-label='Mortgage type selection container' className='flex flex-col gap-2 border-2'>
          <div className='flex'>
            <input id='repaymentTypeBtn' name='type' type='radio' value='repayment' onClick={(e) => handleRadioBtn(e)}></input>
            <label htmlFor='repaymentTypeBtn'>Repayment</label>
          </div>
          <div className='flex'>
            <input id='interestOnlyTypeBtn' name='type' type='radio' value='interest' onClick={(e) => handleRadioBtn(e)}></input>
            <label htmlFor='interestOnlyTypeBtn'>Interest Only</label>
          </div>
        </div>
        <span ref={mortgageTypeErrorLabelRef} className='hidden text-[var(--red)]' inert></span>
      </fieldset>
      <button className='flex justify-center gap-2 w-full' type='submit'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#133041" d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"/></svg>
        Calculate Repayments
      </button>
    </form>
  );
}

export default Form