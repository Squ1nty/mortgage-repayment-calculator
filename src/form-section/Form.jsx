import '../index.css';
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

  //Handle Reset/ Clear All button
  function handleReset(){
    setFormValidity(false);
    setMortgageAmount(0);
    setMortgageTerm(0);
    setInterestRate(0);
    setMortgageType("");
    mortgageAmountInput.current.value = "";
    mortgageTermInput.current.value = "";
    interestRateInput.current.value = "";
  }

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
      mortgageTermErrorLabelRef.current.textContent = "Mortgage Term is invalid";
      mortgageTermErrorLabelRef.current.removeAttribute("inert");
    }
    else if(Number(mortgageTerm % 1 !== 0) && hasRunOnce){
      mortgageTermInput.current.parentNode.classList.add("input--error");
      mortgageTermErrorLabelRef.current.classList.add("input_label--error");
      mortgageTermErrorLabelRef.current.textContent = "Mortgage Term must be a whole number";
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
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 px-6 py-8 lg:justify-center xl:px-10 xl:py-12'>
      <div className='flex flex-col items-start gap-2 xl:flex-row xl:items-center xl:justify-between'> {/* Heading Section */}
        <h1 className='text-2xl font-bold text-[var(--slate-900)]'>Mortgage Calculator</h1>
        <button className='text-[var(--slate-700)] underline underline-offset-2 cursor-pointer' type='reset' onClick={handleReset}>
          Clear All
        </button>
      </div>
      <div className='flex flex-col gap-2'> {/* Mortgage Amount */}
        <label className='text-[var(--slate-700)]' htmlFor='mortgageAmountInput'>Mortgage Amount</label>
        <div ref={mortgageAmountInput} className='w-full flex border border-[var(--slate-700)] rounded-md'>
          <div className='flex items-center bg-[var(--slate-100)] px-4 py-2 rounded-l-md text-[var(--slate-700)]'>
            <p className='self-center justify-self-center font-bold text-lg'>£</p>
          </div>
          <input className='w-full p-2 bg-white rounded-r-md' id='mortgageAmountInput' type='number' onChange={(e) => setMortgageAmount(e.target.value)}></input>
        </div>
        <label htmlFor='mortgageAmountInput' ref={mortgageAmountErrorLabelRef} className='hidden text-[var(--red)]' inert></label>
      </div>
      <div className='xl:flex xl:gap-4'>
        <div className='flex flex-col gap-2'> {/* Mortgage Term */}
          <label className='text-[var(--slate-700)]' htmlFor='mortgageTermInput'>Mortgage Term</label>
          <div className='w-full flex border border-[var(--slate-700)] rounded-md' ref={mortgageTermInput}>
            <input className='w-full p-2 bg-white rounded-l-md' id='mortgageTermInput' type='number' onChange={(e) => setMortgageTerm(e.target.value)}></input>
            <div className='flex bg-[var(--slate-100)] px-4 py-2 rounded-r-md text-[var(--slate-700)]'>
              <p className='self-center justify-self-center font-bold text-lg'>years</p>
            </div>
          </div>
          <label htmlFor='mortgageTermInput' ref={mortgageTermErrorLabelRef} className='hidden text-[var(--red)]' inert></label>
        </div>
        <div className='flex flex-col gap-2'> {/* Interest Rate */}
          <label className='text-[var(--slate-700)]' htmlFor='interestRateInput'>Interest Rate</label>
          <div className='w-full flex border border-[var(--slate-700)] rounded-md' ref={interestRateInput}>
            <input id='interestRateInput' className='w-full p-2 bg-white rounded-l-md' type='number' step='0.01' onChange={(e) => setInterestRate(e.target.value)}></input>
            <div className='flex bg-[var(--slate-100)] px-4 py-2 rounded-r-md text-[var(--slate-700)]'>
              <p className='self-center justify-self-center font-bold text-lg'>%</p>
            </div>
          </div>
          <label htmlFor='interestRateInput' ref={interestRateErrorLabelRef} className='hidden text-[var(--red)]' inert></label>
        </div>
      </div>
      <fieldset className='flex flex-col gap-2'> {/* Mortgage Type */}
        <legend className='mb-2 text-[var(--slate-700)]'>Mortgage Type</legend>
        <div className='flex flex-col gap-2' id='mortgageTypeInputContainer' aria-label='Mortgage type selection container'>
          <div className='flex gap-4 border border-[var(--slate-700)] rounded-md px-4 py-2 has-[:checked]:bg-[var(--lime)]/20 has-[:checked]:border-[var(--lime)]'>
            <input className='w-5 h-5 self-center appearance-none rounded-full border-2 border-[var(--slate-700)] checked:border-[var(--lime)] checked:bg-[var(--lime)] checked:ring-2 checked:ring-white checked:ring-inset cursor-pointer shrink-0' id='repaymentTypeBtn' name='type' type='radio' value='repayment' onClick={(e) => handleRadioBtn(e)}></input>
            <label className='w-full font-bold text-lg text-[var(--slate-900)]' htmlFor='repaymentTypeBtn'>Repayment</label>
          </div>
          <div className='flex gap-4 border border-[var(--slate-700)] rounded-md px-4 py-2 has-[:checked]:bg-[var(--lime)]/20 has-[:checked]:border-[var(--lime)]'>
            <input className='w-5 h-5 self-center appearance-none rounded-full border-2 border-[var(--slate-700)] checked:border-[var(--lime)] checked:bg-[var(--lime)] checked:ring-2 checked:ring-white checked:ring-inset cursor-pointer shrink-0' id='interestOnlyTypeBtn' name='type' type='radio' value='interest' onClick={(e) => handleRadioBtn(e)}></input>
            <label className='w-full font-bold text-lg text-[var(--slate-900)]' htmlFor='interestOnlyTypeBtn'>Interest Only</label>
          </div>
        </div>
        <span ref={mortgageTypeErrorLabelRef} className='hidden text-[var(--red)]' inert></span>
      </fieldset>
      <button className='flex justify-center items-center gap-3 w-full bg-[var(--lime)] hover:bg-[var(--lime)]/80 text-[var(--slate-900)] font-bold p-4 rounded-[30px] text-lg cursor-pointer xl:w-3/4 xl:px-6 xl:mt-2' type='submit'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#133041" d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"/></svg>
        Calculate Repayments
      </button>
    </form>
  );
}

export default Form