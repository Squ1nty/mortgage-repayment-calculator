function Display({ isFormValid }){
  return(
    <>
      { 
        isFormValid ? 
        // Valid state that displays results
        <div>
          <div>
            <p className="text-[var(--slate-100)]">Your results</p>
            <p className="text-[var(--slate-300)]">
              Your results are shown below based on the information you 
              provided. To adjust the results, edit the form and click 
              "calculate repayments" again.
            </p>
          </div>
          <div>
            <div>
              <p>Your monthly repayments</p>
              <p>{/* Insert var for monthly repayment here */}</p>
            </div>
            <hr></hr>
            <div>
              <p>Total you'll repay over the term</p>
              <p>{/* Insert var for total paid over term */}</p>
            </div>
          </div>
        </div> 
        : 
        // Empty/Default state for calculator's display
        <div className="grid place-items-center bg-[var(--slate-900)] text-center">
          <img src='/assets/images/illustration-empty.svg'></img>
          <div>
            <p className="text-[var(--slate-100)]">Results shown here</p>
            <p className="text-[var(--slate-300)]">
              Complete the form and click 'calculate repayments' to 
              see what your monthly repayments would be.
            </p>
          </div>
        </div>
      }
    </>
  );
}

export default Display