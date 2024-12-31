import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const FormRegister = ({ setFormOpenIs }) => {
  return (
    <form className="w-full flex items-center flex-col gap-5">
      <div className="w-full rounded-[5px] bg-white flex items-center py-2 px-5 ">
        <input
          className="text-[#6C757D] w-full focus:outline-none"
          placeholder="Enter Your Name"
          type="text"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M9.9987 10.0003C12.2999 10.0003 14.1654 8.13485 14.1654 5.83366C14.1654 3.53247 12.2999 1.66699 9.9987 1.66699C7.69751 1.66699 5.83203 3.53247 5.83203 5.83366C5.83203 8.13485 7.69751 10.0003 9.9987 10.0003Z"
            stroke="#6C757D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.1565 18.3333C17.1565 15.1083 13.9482 12.5 9.99817 12.5C6.04817 12.5 2.83984 15.1083 2.83984 18.3333"
            stroke="#6C757D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="w-full rounded-[5px] bg-white flex items-center py-2 px-5 ">
        <input
          className="text-[#6C757D] w-full focus:outline-none"
          placeholder="Enter Your Email"
          type="text"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M14.168 17.0837H5.83464C3.33464 17.0837 1.66797 15.8337 1.66797 12.917V7.08366C1.66797 4.16699 3.33464 2.91699 5.83464 2.91699H14.168C16.668 2.91699 18.3346 4.16699 18.3346 7.08366V12.917C18.3346 15.8337 16.668 17.0837 14.168 17.0837Z"
            stroke="#6C757D"
            strokeWidth="1.5"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1654 7.5L11.557 9.58333C10.6987 10.2667 9.29036 10.2667 8.43203 9.58333L5.83203 7.5"
            stroke="#6C757D"
            strokeWidth="1.5"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="w-full rounded-[5px] bg-white flex items-center py-2 px-5 ">
        <input
          className="text-[#6C757D] w-full focus:outline-none"
          placeholder="Enter Password"
          type="text"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5 8.33366V6.66699C5 3.90866 5.83333 1.66699 10 1.66699C14.1667 1.66699 15 3.90866 15 6.66699V8.33366"
            stroke="#6C757D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.0013 15.4167C11.1519 15.4167 12.0846 14.4839 12.0846 13.3333C12.0846 12.1827 11.1519 11.25 10.0013 11.25C8.85071 11.25 7.91797 12.1827 7.91797 13.3333C7.91797 14.4839 8.85071 15.4167 10.0013 15.4167Z"
            stroke="#6C757D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.168 18.333H5.83464C2.5013 18.333 1.66797 17.4997 1.66797 14.1663V12.4997C1.66797 9.16634 2.5013 8.33301 5.83464 8.33301H14.168C17.5013 8.33301 18.3346 9.16634 18.3346 12.4997V14.1663C18.3346 17.4997 17.5013 18.333 14.168 18.333Z"
            stroke="#6C757D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="w-full rounded-[5px] bg-white flex items-center py-2 px-5 ">
        <input
          className="text-[#6C757D] w-full focus:outline-none"
          placeholder="Confirm Password"
          type="text"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5 8.33366V6.66699C5 3.90866 5.83333 1.66699 10 1.66699C14.1667 1.66699 15 3.90866 15 6.66699V8.33366"
            stroke="#6C757D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.0013 15.4167C11.1519 15.4167 12.0846 14.4839 12.0846 13.3333C12.0846 12.1827 11.1519 11.25 10.0013 11.25C8.85071 11.25 7.91797 12.1827 7.91797 13.3333C7.91797 14.4839 8.85071 15.4167 10.0013 15.4167Z"
            stroke="#6C757D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.168 18.333H5.83464C2.5013 18.333 1.66797 17.4997 1.66797 14.1663V12.4997C1.66797 9.16634 2.5013 8.33301 5.83464 8.33301H14.168C17.5013 8.33301 18.3346 9.16634 18.3346 12.4997V14.1663C18.3346 17.4997 17.5013 18.333 14.168 18.333Z"
            stroke="#6C757D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <button className="bg-transparent rounded-[24px] text-white py-3 px-5 text-[15px] font-normal border border-white w-fit">
        Register Now
      </button>
      <span className="italic font-normal text-white">
        Already Have An Account?{" "}
        <span
          onClick={() => {
            setFormOpenIs("login");
          }}
          className="not-italic font-bold cursor-pointer"
        >
          Login Here
        </span>
      </span>
    </form>
  );
};

export default FormRegister;
