function Logo({ full = false }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <img
        src="../../public/logo.png"
        alt="Music player logo"
        className="w-fit"
      />
      {full && (
        <h1 className="text-white text-2xl font-bold">The Miraculous</h1>
      )}
    </div>
  );
}

export default Logo;
