import { Link } from 'react-router-dom';

function Logo({ full = false }) {
  return (
    <Link to={'/'} className="flex flex-col justify-center items-center pt-10">
      <img src="/logo.png" alt="Music player logo" className="w-fit" />
      {full && (
        <h1 className="text-white text-2xl font-bold">The Miraculous</h1>
      )}
    </Link>
  );
}

export default Logo;
