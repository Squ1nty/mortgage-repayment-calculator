import EmptyDisplay from "./EmptyDisplay";

function Display({ isFormValid, mortgageAmount, mortgageTerm, interestRate, mortgageType }) {

  return(
    <div className='px-4 py-8 bg-[var(--slate-900)] lg:flex lg:flex-col lg:justify-center lg:rounded-bl-[50px] xl:rounded-bl-[75px] xl:max-w-[500px] xl:px-8'>
      { 
        isFormValid ? 
        // Valid state that displays results
        <div className="flex flex-col gap-4 xl:gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-white text-2xl font-semibold">Your results</p>
            <p className="text-[var(--slate-300)]">
              Your results are shown below based on the information you 
              provided. To adjust the results, edit the form and click 
              "calculate repayments" again.
            </p>
          </div>
          <div>
            {(mortgageType === "repayment"
            ? 
              <div className="bg-[var(--slate-900)] border-t-4 border-[var(--lime)] rounded-lg">
                <div className='p-4 w-full h-full backdrop-brightness-[0.75] rounded-lg md:grid md:grid-cols-2 md:items-start lg:block'>
                  <div className='flex flex-col'>
                    <p className='text-[var(--slate-300)]'>Your monthly repayments</p>
                    <p className='text-4xl text-[var(--lime)] font-semibold py-4 xl:text-6xl xl:py-6 xl:pb-10'>£{(mortgageAmount * (interestRate / 100 / 12) / (1 - Math.pow(1 + interestRate / 100 / 12, -mortgageTerm * 12))).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  </div>
                  <hr className='border-[var(--slate-500)] border-t-[1px] md:hidden lg:block'></hr>
                  <div>
                    <p className="pt-4 text-[var(--slate-300)] md:pt-0 lg:pt-4">Total you'll repay over the term</p>
                    <p className="py-2 text-2xl font-semibold text-[var(--slate-100)] md:text-4xl md:py-4 xl:text-2xl">£{(mortgageAmount * (interestRate / 100 / 12) / (1 - Math.pow(1 + interestRate / 100 / 12, -mortgageTerm * 12)) * mortgageTerm * 12).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  </div>
                </div>
              </div>
            : 
              <>
                <div className="bg-[var(--slate-900)]">
                  <div className="p-4 backdrop-brightness-[0.75] rounded-lg">
                    <p className="pt-2 text-[var(--slate-300)]">Total interest accumulated over mortgage term</p>
                    <p className="py-2 text-2xl font-semibold text-[var(--slate-100)] md:text-4xl">£{(mortgageAmount * (interestRate / 100 / 12) * mortgageTerm * 12 - mortgageAmount).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  </div>
                </div>
              </>
              
            )}

          </div>
        </div> 
        : 
        // Empty/Default state for calculator's display
        <EmptyDisplay />
      }
    </div>
  );
}

export default Display