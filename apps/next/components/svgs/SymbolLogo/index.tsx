const SymbolLogo = (props: { className?: string }): JSX.Element => {
  const { className } = props;
  return (
    <svg className={className} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.19 57">
      <path d="M0,0H8.88V26.31H0ZM26.42,26.31h8.77V0H26.42ZM22,6.27H13.26v20H22Z" />
      <path d="M22,57H13.26V30.7H22ZM8.88,30.69H.05V43.85H8.88Zm26.31,0H26.42V43.85h8.77Z" />
    </svg>
  );
};

export default SymbolLogo;
