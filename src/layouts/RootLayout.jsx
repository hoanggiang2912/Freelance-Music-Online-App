import Sidebar from "./Sidebar";
import { Input } from "antd";
import { BiSearchAlt } from "react-icons/bi";
import { IoLanguage } from "react-icons/io5";
import FormRegister from "../components/FormRegister";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import FormLogin from "../components/FormLogin";

const { Search } = Input;

function RootLayout({ children }) {
  const [openPopup, setOpenPopup] = useState(false);
  const [formOpenIs, setFormOpenIs] = useState(null);

  return (
    <div className="flex flex-col justify-between relative">
      <Sidebar />
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
              {" "}
              Dream your moments, Until I Met You, Gim
            </span>
          </span>
        </div>
        <div className="flex items-center">
          <button className="flex items-center gap-4 mr-16">
            languages{" "}
            <span>
              <IoLanguage />
            </span>
          </button>
          <button
            onClick={() => {
              openPopup ? setOpenPopup(false) : setOpenPopup(true);
              setFormOpenIs("register");
            }}
            className="bg-lightBlue rounded-[20px] text-white py-3 px-5 text-[15px] font-normal hover:shadow-[0_0_24px_0_#3BC8E7] mr-4"
          >
            Register
          </button>
          <button
            onClick={() => {
              openPopup ? setOpenPopup(false) : setOpenPopup(true);
              setFormOpenIs("login");
            }}
            className="bg-lightBlue rounded-[20px] text-white py-3 px-5 text-[15px] font-normal hover:shadow-[0_0_24px_0_#3BC8E7]"
          >
            Login
          </button>
        </div>
      </header>
      <main className="w-full min-h-[80vh] bg-primary pl-20 pt-20 text-white">
        {children}
      </main>
      <footer className="w-full h-[200px] bg-secondary text-white pl-20 flex justify-center">
        <section className="w-widthDesktop h-full bg-blue-400"></section>
      </footer>

      {/* form login - register */}
      <div
        className={`${
          openPopup ? "" : "loginRegisteContainerHidden"
        } w-full h-full bg-[#0C0E1ACC] fixed top-0 left-0 z-20 flex justify-center items-center`}
      >
        <div className="w-[1280px] rounded-3xl bg-lightBlue p-20 flex items-center gap-[72px] relative">
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
              {formOpenIs === "login"
                ? "Login / Sign In"
                : "Register / Sign Up"}
            </h1>
            {formOpenIs === "login" ? (
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
