import Sidebar from './Sidebar';
import { Input } from 'antd';

import FormRegister from '../components/FormRegister';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { useState } from 'react';
import FormLogin from '../components/FormLogin';
import Footer from './Footer';
import Header from './Header';

const { Search } = Input;

function RootLayout({ children }) {
  const [openPopup, setOpenPopup] = useState(false);
  const [formOpenIs, setFormOpenIs] = useState(null);

  return (
    <div className="flex flex-col justify-between relative">
      <Sidebar />
      <Header
        setOpenPopup={setOpenPopup}
        openPopup={openPopup}
        setFormOpenIs={setFormOpenIs}
      />
      {/* main */}
      <main className="w-full min-h-[80vh] bg-primary pl-20 pt-20 text-white">
        {children}
      </main>
      {/* footer */}
      <Footer />
      {/* form login - register */}
      <div
        className={`popupLoginRegister ${
          openPopup ? '' : 'loginRegisteContainerHidden'
        } w-full h-full bg-[#0C0E1ACC] fixed top-0 left-0 z-[999] flex justify-center items-center`}
        onClick={() => {
          setOpenPopup(false);
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[1280px] rounded-3xl bg-lightBlue p-20 flex items-center gap-[72px] relative"
        >
          <IoCloseSharp
            onClick={() => {
              setOpenPopup(false);
            }}
            className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
          />
          <div className="w-[40%] max-w-[446px] max-h-[446px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/images/headphones 1.png"
              alt=""
            />
          </div>
          <div className="w-[60%] flex flex-col items-center">
            <h1 className="text-center text-white font-bold text-[40px]">
              {formOpenIs === 'login'
                ? 'Login / Sign In'
                : 'Register / Sign Up'}
            </h1>
            {formOpenIs === 'login' ? (
              <FormLogin setFormOpenIs={setFormOpenIs} />
            ) : (
              <FormRegister setFormOpenIs={setFormOpenIs} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
