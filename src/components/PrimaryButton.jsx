import { Link } from 'react-router-dom';

function PrimaryButton({ to = '', className = '', onClick, children }) {
  return (
    <>
      {to ? (
        <Link
          to={to}
          className={`bg-lightBlue rounded-[20px] px-[22px] py-3 text-sm btn-primary transition ${className}`}
          onClick={onClick}
        >
          {children}
        </Link>
      ) : (
        <button
          className={`bg-lightBlue rounded-[20px] px-[22px] py-3 text-sm btn-primary transition ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
}

export default PrimaryButton;
