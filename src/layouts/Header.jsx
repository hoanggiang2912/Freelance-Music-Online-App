import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { IoLanguage } from 'react-icons/io5';

const Header = ({ setOpenPopup, openPopup, setFormOpenIs }) => {
  return (
    <header className="w-[calc(100%-80px)] h-[80px] bg-secondary z-10 fixed top-0 right-0 px-9 flex justify-between items-center text-white">
      <div className="flex items-center gap-9 w-8/12">
        <form className="flex rounded-md bg-white">
          <input
            className="text-black focus:outline-none px-5 py-2 font-normal text-sm rounded-md border-none focus:border-none overflow-hidden"
            type="text"
            placeholder="Search Music Here.."
          />
          <button className="bg-lightBlue rounded-md p-4 rounded-tl-none rounded-bl-none">
            <BiSearchAlt />
          </button>
        </form>
        <span className="font-normal text-[15px] text-lightBlue">
          Trending Songs :
          <span className="text-white">
            {' '}
            Dream your moments, Until I Met You, Gim
          </span>
        </span>
      </div>
      <div className="flex items-center">
        <button className="flex items-center gap-4 mr-16">
          languages{' '}
          <span>
            <IoLanguage />
          </span>
        </button>
        <button
          onClick={() => {
            setOpenPopup(!openPopup);
            setFormOpenIs('register');
          }}
          className="bg-lightBlue rounded-[20px] text-white py-3 px-5 text-[15px] font-normal hover:shadow-[0_0_24px_0_#3BC8E7] mr-4"
        >
          Register
        </button>
        <button
          onClick={() => {
            setOpenPopup(!openPopup);
            setFormOpenIs('login');
          }}
          className="bg-lightBlue rounded-[20px] text-white py-3 px-5 text-[15px] font-normal hover:shadow-[0_0_24px_0_#3BC8E7]"
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
