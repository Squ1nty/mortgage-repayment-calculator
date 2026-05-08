function EmptyDisplay() {
  return(
    <div className="grid place-items-center text-center gap-4">
      <img src='/assets/images/illustration-empty.svg'></img>
      <p className="text-[var(--slate-100)] text-2xl font-semibold">Results shown here</p>
      <p className="text-[var(--slate-300)]">
        Complete the form and click "calculate repayments" to 
        see what your monthly repayments would be.
      </p>
    </div>
  );
}

export default EmptyDisplay;