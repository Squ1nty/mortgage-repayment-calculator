import EmptyDisplay from "./EmptyDisplay";

function Display({ isFormValid, mortgageAmount, mortgageTerm, interestRate, mortgageType }) {

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
            {(mortgageType === "repayment"
             ? 
              <>
                <div>
                  <p>Your monthly repayments</p>
                  <p>{(mortgageAmount * (interestRate / 100 / 12) / (1 - Math.pow(1 + interestRate / 100 / 12, -mortgageTerm * 12))).toFixed(2)}</p>
                </div>
                <hr></hr>
                <div>
                  <p>Total you'll repay over the term</p>
                  <p>{(mortgageAmount * (interestRate / 100 / 12) / (1 - Math.pow(1 + interestRate / 100 / 12, -mortgageTerm * 12)) * mortgageTerm * 12).toFixed(2)}</p>
                </div>
              </>
            : 
              <>
                <div>
                  <p>Total interest accumulated over mortgage term</p>
                  <p>{(mortgageAmount * (interestRate / 100 / 12) * mortgageTerm * 12 - mortgageAmount).toFixed(2)}</p>
                </div>
              </>
            )}

          </div>
        </div> 
        : 
        // Empty/Default state for calculator's display
        <EmptyDisplay />
      }
    </>
  );
}

export default Display