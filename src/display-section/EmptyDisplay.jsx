function EmptyDisplay() {
  return(
    <div className="grid place-items-center text-center gap-4 xl:justify-self-center">
      <img src='/assets/images/illustration-empty.svg' className='xl:h-[250px]'></img>
      <p className="text-[var(--slate-100)] text-2xl font-semibold xl:text-3xl">Results shown here</p>
      <p className="text-[var(--slate-300)]">
        Complete the form and click "calculate repayments" to 
        see what your monthly repayments would be.
      </p>
    </div>
  );
}

export default EmptyDisplay;