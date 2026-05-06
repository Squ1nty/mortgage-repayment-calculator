function EmptyDisplay() {
  return(
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
  );
}

export default EmptyDisplay;