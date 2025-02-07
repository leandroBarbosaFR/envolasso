const AgencyLogo = (props: { className?: string; id?: string }): JSX.Element => {
  const { className, id } = props;
  return (
    <svg
      className={className}
      id={id}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 111.2 189.22"
    >
      <path
        style={{ fill: 'white' }}
        d="M100.12,78.56h-24.5c-7,0-12.3-6.4-10.9-13.3l10.4-51.9c2.4-12.3-14-18.6-20.5-7.9L1.62,93.76c-4.5,7.4.9,16.9,9.5,16.9h24.5c7,0,12.3,6.4,10.9,13.3l-10.4,51.9c-2.4,12.3,14,18.6,20.5,7.9l53-88.3c4.4-7.4-.9-16.9-9.6-16.9h.1Z"
      />
    </svg>
  );
};

export default AgencyLogo;
