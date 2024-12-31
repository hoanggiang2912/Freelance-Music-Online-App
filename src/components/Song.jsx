import { Ellipsis } from 'lucide-react';

function Song({ showMoreButton = true, showNumber = true }) {
  return (
    <div className="flex gap-5 w-full py-5 relative before:contents-[''] before:block before:w-full before:h-[2px] before:bg-borderLinear before:absolute before:bottom-0 before:left-0 before:z-0">
      {showNumber && <h2 className="text-[40px] font-bold">01</h2>}
      <img
        src="../../public/genres/hiphop.jpg"
        alt=""
        className="object-cover aspect-square rounded-lg w-[50px] h-[50px]"
      />
      <div>
        <p className="text-md text-white">Until I found you</p>
        <p className="text-md text-gray-400">Stephent Sanchez</p>
      </div>
      <div className="flex h-fit flex-1 justify-end items-center gap-5">
        <p className="text-md">5:10</p>
        {showMoreButton && (
          <button className="hover:opacity-70 transition">
            <Ellipsis />
          </button>
        )}
      </div>
    </div>
  );
}

export default Song;
