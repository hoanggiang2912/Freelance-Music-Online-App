import Sidebar from './Sidebar';
import { Input } from 'antd';
import { BiSearchAlt } from 'react-icons/bi';
import { IoLanguage } from 'react-icons/io5';
import FormRegister from '../components/FormRegister';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { useState } from 'react';
import FormLogin from '../components/FormLogin';

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
              openPopup ? setOpenPopup(false) : setOpenPopup(true);
              setFormOpenIs('register');
            }}
            className="bg-lightBlue rounded-[20px] text-white py-3 px-5 text-[15px] font-normal hover:shadow-[0_0_24px_0_#3BC8E7] mr-4"
          >
            Register
          </button>
          <button
            onClick={() => {
              openPopup ? setOpenPopup(false) : setOpenPopup(true);
              setFormOpenIs('login');
            }}
            className="bg-lightBlue rounded-[20px] text-white py-3 px-5 text-[15px] font-normal hover:shadow-[0_0_24px_0_#3BC8E7]"
          >
            Login
          </button>
        </div>
      </header>
      {/* main */}
      <main className="w-full min-h-[80vh] bg-primary pl-20 pt-20 text-white">
        {children}
      </main>
      {/* footer */}
      <footer className="w-full min-h-[200px] bg-secondary text-white pl-20 flex justify-center">
        <section className="w-widthDesktop h-full">
          <div className="m-[0 auto] flex justify-center mt-12">
            <img src="/images/open_logo.png.png" alt="" />
          </div>
          {/* content */}
          <div className="mt-12 w-full flex justify-between gap-7">
            {/* item */}
            <div className="w-1/4 flex flex-col">
              <span className="text-lightBlue text-lg font-semibold relative">
                Miraculous Music Station
                <span className="absolute bottom-0 left-0 w-[30%] h-[1px] bg-lightBlue"></span>
              </span>
              <div className="mt-12">
                <span className="leading-6 font-normal text-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat duis aute
                  irure dolor.
                </span>
              </div>
            </div>
            {/* item */}
            <div className="w-1/4 flex flex-col">
              <span className="text-lightBlue text-lg font-semibold relative">
                Download our App
                <span className="absolute bottom-0 left-0 w-[30%] h-[1px] bg-lightBlue"></span>
              </span>
              <div className="mt-12">
                <span className="leading-6 font-normal text-[15px]">
                  Go Mobile with our app. Listen to your favourite songs at just
                  one click. Download Now !
                </span>
              </div>
              <div className="flex flex-col gap-5 mt-4">
                <div className="relative pt-[15%] h-fit">
                  <img
                    className="absolute top-0 left-0 object-cover"
                    src="/images/google_play.jpg.png"
                    alt=""
                  />
                </div>
                <div className="relative pt-[15%]">
                  <img
                    className="absolute top-0 left-0 object-cover"
                    src="/images/app_store.jpg.png"
                    alt=""
                  />
                </div>
                <div className="relative pt-[15%]">
                  <img
                    className="absolute top-0 left-0 object-cover"
                    src="/images/windows.jpg.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* item */}
            <div className="w-1/4 flex flex-col">
              <span className="text-lightBlue text-lg font-semibold relative">
                Subscribe
                <span className="absolute bottom-0 left-0 w-[30%] h-[1px] bg-lightBlue"></span>
              </span>
              <div className="mt-12">
                <span className="leading-6 font-normal text-[15px]">
                  Subscribe to our newsletter and get latest updates and offers.
                </span>
              </div>
              <form className="mt-4 flex flex-col gap-5">
                <input
                  className="w-full bg-white py-2 px-5 text-[#6C757D] font-normal text-base rounded-md"
                  type="text"
                  placeholder="Enter Your Name"
                />
                <input
                  className="w-full bg-white py-2 px-5 text-[#6C757D] font-normal text-base rounded-md"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <button className="capitalize w-fit bg-lightBlue py-3 px-5 rounded-[20px]">
                  sign me up
                </button>
              </form>
            </div>
            {/* item */}
            <div className="w-1/4 flex flex-col">
              <span className="text-lightBlue text-lg font-semibold relative">
                Contact us
                <span className="absolute bottom-0 left-0 w-[30%] h-[1px] bg-lightBlue"></span>
              </span>
              <div className="mt-12 flex flex-col gap-2">
                <div className="flex gap-5">
                  <div className="rounded-md h-fit p-3 flex justify-center items-center bg-lightBlue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_18_116954)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.1017 8.43921C17.0727 8.44221 17.0477 8.44621 17.0187 8.44621C16.7847 8.44621 16.5797 8.28121 16.5407 8.04421C16.2567 6.37221 15.4657 4.84721 14.2517 3.63321C13.0367 2.42421 11.5097 1.63121 9.83467 1.34821C9.56867 1.30121 9.39267 1.05321 9.43667 0.78821C9.48267 0.52621 9.73067 0.34621 9.99267 0.39321C11.8687 0.71221 13.5757 1.59521 14.9347 2.95221C16.2927 4.30821 17.1767 6.01321 17.4967 7.88621C17.5427 8.14821 17.3637 8.39921 17.1017 8.43921ZM9.86067 3.47621C10.9997 3.66921 12.0377 4.20821 12.8607 5.03021C13.6837 5.85121 14.2227 6.88921 14.4167 8.02621C14.4597 8.29121 14.2837 8.54321 14.0177 8.58621C13.9897 8.59021 13.9637 8.59321 13.9357 8.59321C13.7017 8.59321 13.4967 8.42821 13.4577 8.19121C13.2957 7.25121 12.8537 6.39721 12.1707 5.71521C11.4877 5.03321 10.6327 4.58821 9.69167 4.43021C9.42567 4.38721 9.25267 4.13221 9.29967 3.87021C9.34667 3.60821 9.59467 3.43221 9.86067 3.47621ZM6.64067 6.67321C6.37467 6.94221 6.10167 7.22221 5.80667 7.49121C6.02567 7.97621 6.32767 8.45321 6.77667 9.02021C7.70367 10.1582 8.67067 11.0372 9.73467 11.7122C9.83867 11.7762 9.96067 11.8372 10.0907 11.9022C10.1797 11.9482 10.2737 11.9952 10.3667 12.0452L11.5027 10.9152C11.8657 10.5522 12.2897 10.3622 12.7317 10.3622C13.1767 10.3622 13.5977 10.5562 13.9457 10.9182L15.9187 12.8962C16.2817 13.2552 16.4727 13.6822 16.4727 14.1272C16.4727 14.5682 16.2857 14.9992 15.9297 15.3692C15.7747 15.5302 15.6167 15.6842 15.4627 15.8312C15.2357 16.0502 15.0207 16.2552 14.8337 16.4812C14.8297 16.4882 14.8227 16.4922 14.8197 16.4992C14.2727 17.0912 13.5757 17.3892 12.7457 17.3892C12.6737 17.3892 12.5947 17.3852 12.5197 17.3822C11.2867 17.3032 10.1837 16.8402 9.35667 16.4492C7.19367 15.4042 5.29967 13.9222 3.72567 12.0452C2.42867 10.4882 1.55867 9.03421 0.976666 7.46621C0.739666 6.82721 0.430666 5.85121 0.516666 4.80321C0.574666 4.15421 0.836666 3.59421 1.29667 3.13421L2.51867 1.90421C2.52167 1.90021 2.52167 1.90021 2.52567 1.89721C2.88467 1.55221 3.30867 1.36921 3.74767 1.36921C4.18567 1.36921 4.60267 1.55221 4.95167 1.89721C5.18467 2.11221 5.41167 2.34221 5.62667 2.56421C5.73467 2.67921 5.84967 2.79421 5.96167 2.90521L6.94167 3.88521C7.69667 4.63921 7.69667 5.61421 6.94167 6.36821C6.84167 6.46821 6.74067 6.57321 6.64067 6.67321ZM6.25967 4.57021L5.27867 3.59021C5.16367 3.47221 5.04867 3.35721 4.93667 3.24221C4.71767 3.01621 4.50967 2.80521 4.29067 2.60021C4.28667 2.59621 4.28267 2.59321 4.27967 2.58921C4.16467 2.47421 3.98067 2.33821 3.75467 2.33821C3.57167 2.33821 3.38467 2.42821 3.20867 2.59321L1.98267 3.81621C1.68467 4.11421 1.52267 4.46221 1.48767 4.88221C1.43367 5.53921 1.55567 6.23521 1.88967 7.12921C2.43267 8.59321 3.25167 9.95721 4.47667 11.4322C5.96167 13.2012 7.74667 14.5972 9.78067 15.5802C10.5247 15.9352 11.5167 16.3522 12.5837 16.4202C12.6377 16.4232 12.6957 16.4232 12.7497 16.4232C13.3097 16.4232 13.7377 16.2402 14.1007 15.8532C14.3237 15.5912 14.5607 15.3582 14.7937 15.1352C14.9487 14.9842 15.0927 14.8482 15.2327 14.6972C15.5987 14.3172 15.5987 13.9402 15.2287 13.5742L13.2487 11.5972C13.2457 11.5932 13.2457 11.5932 13.2417 11.5902C13.1307 11.4672 12.9467 11.3282 12.7247 11.3282C12.4977 11.3282 12.3037 11.4752 12.1817 11.5972L10.9527 12.8242C10.8917 12.8852 10.7047 13.0712 10.4067 13.0712C10.2877 13.0712 10.1727 13.0432 10.0507 12.9822C10.0367 12.9752 10.0217 12.9642 10.0077 12.9572C9.90367 12.8922 9.78067 12.8312 9.65167 12.7672C9.50767 12.6952 9.35667 12.6192 9.20967 12.5262C8.05667 11.7982 7.01067 10.8472 6.01867 9.62721L6.01467 9.62321C5.46867 8.93021 5.10967 8.34921 4.85467 7.73221C4.85067 7.72121 4.84767 7.71021 4.84367 7.69921C4.77867 7.49521 4.72167 7.19321 5.03067 6.88521C5.03367 6.87821 5.04167 6.87421 5.04867 6.86721C5.36067 6.58721 5.64867 6.30021 5.95067 5.99121C6.05467 5.89121 6.15567 5.78721 6.25967 5.68221C6.64067 5.30221 6.64067 4.95021 6.25967 4.57021Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_18_116954">
                          <rect
                            width={17}
                            height={17}
                            fill="white"
                            transform="translate(0.5 0.389648)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col font-normal text-[15px]">
                    <span>Call us :</span>
                    <span>(+1) 202-555-0176, (+1) 2025- 5501</span>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="rounded-md h-fit p-3 flex justify-center items-center bg-lightBlue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={14}
                      viewBox="0 0 18 14"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_18_116958)">
                        <g clipPath="url(#clip1_18_116958)">
                          <g clipPath="url(#clip2_18_116958)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.5489 13.9805H2.70886C1.56286 13.9805 0.630859 13.0435 0.630859 11.8915V3.06947C0.630859 1.91647 1.56286 0.980469 2.70886 0.980469H15.5519C16.6989 0.980469 17.6309 1.92047 17.6269 3.07247V11.8915C17.6269 13.0435 16.6949 13.9805 15.5489 13.9805ZM16.6779 11.8915V3.07247C16.6779 2.44747 16.1709 1.93847 15.5489 1.93847H2.70886C2.08686 1.93847 1.57986 2.44747 1.57986 3.07247V11.8915C1.57986 12.5165 2.08686 13.0255 2.70886 13.0255H15.5519C16.1749 13.0255 16.6809 12.5165 16.6809 11.8915H16.6779ZM15.5419 12.0295C15.4469 12.1285 15.3239 12.1775 15.1969 12.1775C15.0809 12.1775 14.9619 12.1355 14.8699 12.0465L10.6429 8.01047L9.45786 9.07747C9.36986 9.15947 9.25386 9.20147 9.14086 9.20147C9.02886 9.20147 8.91586 9.16247 8.82486 9.08147L7.67086 8.04547L3.41986 12.0435C3.32786 12.1285 3.21186 12.1705 3.09586 12.1705C2.96886 12.1705 2.84286 12.1175 2.74786 12.0185C2.56786 11.8245 2.57886 11.5235 2.76886 11.3435L6.95686 7.40247L2.75086 3.62447C2.55386 3.44747 2.53686 3.14747 2.71286 2.94947C2.88886 2.75147 3.18686 2.73347 3.38386 2.91047L7.93486 7.00247C7.96286 7.02447 7.98786 7.04547 8.01186 7.07047C8.01186 7.07347 8.01586 7.07747 8.01886 7.08047L9.13786 8.08447L14.8699 2.91347C15.0669 2.73647 15.3659 2.75447 15.5419 2.94947C15.7179 3.14747 15.6999 3.44747 15.5069 3.62447L11.3499 7.37047L15.5239 11.3545C15.7139 11.5345 15.7209 11.8385 15.5419 12.0295Z"
                              fill="white"
                            />
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_18_116958">
                          <rect
                            width={17}
                            height={13}
                            fill="white"
                            transform="translate(0.628906 0.979492)"
                          />
                        </clipPath>
                        <clipPath id="clip1_18_116958">
                          <rect
                            width={17}
                            height={13}
                            fill="white"
                            transform="translate(0.628906 0.979492)"
                          />
                        </clipPath>
                        <clipPath id="clip2_18_116958">
                          <rect
                            width={17}
                            height={13}
                            fill="white"
                            transform="translate(0.628906 0.979492)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col font-normal text-[15px]">
                    <span>Email us :</span>
                    <span>demo@mail.com </span>
                    <span>demo@mail.com </span>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="rounded-md h-fit p-3 flex justify-center items-center bg-lightBlue w-[40px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={17}
                      viewBox="0 0 12 17"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_18_116968)">
                        <g clipPath="url(#clip1_18_116968)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.154 9.39665L6.512 16.6616C6.423 16.8016 6.262 16.8886 6.087 16.8896C6.087 16.8896 6.085 16.8896 6.083 16.8896C5.91 16.8896 5.75 16.8056 5.658 16.6676L0.896 9.47265C0.31 8.58465 0 7.56265 0 6.51465C0 3.41265 2.692 0.889648 6 0.889648C9.308 0.889648 12 3.41265 12 6.51465C12 7.53065 11.707 8.52765 11.154 9.39665ZM6 1.82065C3.243 1.82065 0.993 3.92965 0.993 6.51465C0.993 7.38765 1.258 8.23965 1.745 8.97865L6.076 15.5206L10.295 8.91465C10.756 8.19165 11.003 7.36165 11.003 6.51465C11.003 3.92965 8.757 1.82065 6 1.82065ZM6 9.32665C4.324 9.32665 3 8.05565 3 6.51465C3 4.96365 4.346 3.70165 6 3.70165C7.654 3.70165 9 4.96365 9 6.51465C9 8.03865 7.697 9.32665 6 9.32665ZM6 4.63365C4.897 4.63365 3.993 5.48065 3.993 6.51465C3.993 7.55065 4.891 8.39565 6 8.39565C7.126 8.39565 8.003 7.53565 8.003 6.51465C8.003 5.48065 7.103 4.63365 6 4.63365Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_18_116968">
                          <rect
                            width={12}
                            height={16}
                            fill="white"
                            transform="translate(0 0.889648)"
                          />
                        </clipPath>
                        <clipPath id="clip1_18_116968">
                          <rect
                            width={12}
                            height={16}
                            fill="white"
                            transform="translate(0 0.889648)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col font-normal text-[15px]">
                    <span>walk in :</span>
                    <span>598 Old House Drive, London</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 items-center mt-5">
                <span className="font-normal text-[15px]">follow us :</span>
                <div className="flex items-center gap-2">
                  <div className="rounded-md h-[30px] w-[30px] flex justify-center items-center bg-lightBlue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                    >
                      <path
                        d="M7.74191 0.100586V2.31041H6.42773C5.94782 2.31041 5.62416 2.41085 5.45675 2.61175C5.28934 2.81264 5.20564 3.11398 5.20564 3.51577V5.0978H7.6582L7.33175 7.57547H5.20564V13.9287H2.64425V7.57547H0.509766V5.0978H2.64425V3.27302C2.64425 2.23507 2.93443 1.43011 3.51479 0.85812C4.09514 0.286133 4.86802 0.00014019 5.83343 0.00014019C6.65374 0.00014019 7.2899 0.0336218 7.74191 0.100586Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-md h-[30px] w-[30px] flex justify-center items-center bg-lightBlue">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={15}
                        viewBox="0 0 14 15"
                        fill="none"
                      >
                        <path
                          d="M3.49358 5.23117V13.5264H0.731306V5.23117H3.49358ZM3.66936 2.66978C3.67494 3.07715 3.53404 3.41755 3.24665 3.69099C2.95926 3.96443 2.58119 4.10114 2.11244 4.10114H2.0957C1.63811 4.10114 1.26981 3.96443 0.990792 3.69099C0.711775 3.41755 0.572266 3.07715 0.572266 2.66978C0.572266 2.25684 0.71596 1.91504 1.00335 1.64439C1.29074 1.37374 1.66602 1.23842 2.12919 1.23842C2.59235 1.23842 2.96345 1.37374 3.24247 1.64439C3.52148 1.91504 3.66378 2.25684 3.66936 2.66978ZM13.4294 8.7719V13.5264H10.6755V9.08998C10.6755 8.50405 10.5625 8.04506 10.3365 7.71303C10.1105 7.381 9.75753 7.21498 9.27762 7.21498C8.92606 7.21498 8.6317 7.31124 8.39453 7.50377C8.15737 7.69629 7.98019 7.93485 7.863 8.21945C7.80162 8.38686 7.77093 8.61286 7.77093 8.89746V13.5264H5.01702C5.02818 11.2998 5.03376 9.49456 5.03376 8.11063C5.03376 6.7267 5.03097 5.90081 5.02539 5.63295L5.01702 5.23117H7.77093V6.43652H7.75419C7.86579 6.25795 7.98019 6.1017 8.09738 5.96777C8.21456 5.83385 8.37221 5.68876 8.57031 5.53251C8.76841 5.37626 9.01116 5.25488 9.29855 5.16839C9.58594 5.08189 9.90541 5.03864 10.257 5.03864C11.2112 5.03864 11.9785 5.35533 12.5589 5.9887C13.1392 6.62207 13.4294 7.5498 13.4294 8.7719Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-md h-[30px] w-[30px] flex justify-center items-center bg-lightBlue">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={15}
                        viewBox="0 0 14 15"
                        fill="none"
                      >
                        <path
                          d="M13.5946 3.41546C13.221 3.96233 12.7693 4.42829 12.2396 4.81334C12.2451 4.89146 12.2479 5.00865 12.2479 5.1649C12.2479 5.89035 12.142 6.6144 11.9301 7.33705C11.7182 8.05971 11.3961 8.75307 10.964 9.41713C10.5318 10.0812 10.0174 10.6685 9.42071 11.1791C8.82404 11.6897 8.10469 12.0971 7.26266 12.4012C6.42063 12.7054 5.52005 12.8574 4.56092 12.8574C3.04972 12.8574 1.66679 12.4528 0.412109 11.6437C0.607282 11.666 0.82476 11.6772 1.06454 11.6772C2.31922 11.6772 3.43728 11.2921 4.41872 10.522C3.8332 10.5109 3.30903 10.3309 2.84619 9.98214C2.38335 9.63337 2.0655 9.18834 1.89263 8.64704C2.07665 8.67494 2.24673 8.6889 2.40287 8.6889C2.64265 8.6889 2.87965 8.6582 3.11385 8.59682C2.4893 8.46847 1.97209 8.15737 1.56223 7.6635C1.15237 7.16964 0.947439 6.59626 0.947439 5.94336V5.90988C1.32663 6.12193 1.73371 6.23633 2.16866 6.25307C1.80062 6.00753 1.50786 5.68666 1.29039 5.29046C1.07291 4.89425 0.964168 4.46457 0.964168 4.0014C0.964168 3.51032 1.08685 3.05552 1.33221 2.637C2.00695 3.46847 2.82806 4.13393 3.79556 4.63337C4.76306 5.13281 5.79887 5.41044 6.90299 5.46624C6.85837 5.25419 6.83607 5.04771 6.83607 4.84682C6.83607 4.09905 7.09955 3.4615 7.62652 2.93415C8.15348 2.40681 8.79058 2.14314 9.53781 2.14314C10.3185 2.14314 10.9765 2.42773 11.5118 2.99693C12.1197 2.87974 12.6912 2.66211 13.2266 2.34403C13.0202 2.98577 12.6243 3.48242 12.0388 3.83398C12.5574 3.77818 13.076 3.63867 13.5946 3.41546Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-md h-[30px] w-[30px] flex justify-center items-center bg-lightBlue">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={15}
                        viewBox="0 0 20 15"
                        fill="none"
                      >
                        <path
                          d="M12.3797 7.64244C12.3797 8.80315 12.137 9.83691 11.6518 10.7437C11.1666 11.6505 10.4749 12.3592 9.57697 12.8698C8.679 13.3804 7.64996 13.6357 6.48985 13.6357C5.6588 13.6357 4.86401 13.4739 4.10548 13.1503C3.34694 12.8266 2.69438 12.3913 2.14779 11.8444C1.6012 11.2976 1.16615 10.6447 0.842661 9.88574C0.519168 9.12681 0.357422 8.33161 0.357422 7.50014C0.357422 6.66867 0.519168 5.87347 0.842661 5.11454C1.16615 4.35561 1.6012 3.70271 2.14779 3.15583C2.69438 2.60896 3.34694 2.17369 4.10548 1.85003C4.86401 1.52637 5.6588 1.36454 6.48985 1.36454C8.085 1.36454 9.45427 1.90025 10.5976 2.97168L8.93278 4.57045C8.28021 3.93987 7.4659 3.62458 6.48985 3.62458C5.80382 3.62458 5.16938 3.79757 4.58654 4.14355C4.00369 4.48954 3.54216 4.95968 3.20193 5.55399C2.8617 6.1483 2.69159 6.79701 2.69159 7.50014C2.69159 8.20326 2.8617 8.85198 3.20193 9.44629C3.54216 10.0406 4.00369 10.5107 4.58654 10.8567C5.16938 11.2027 5.80382 11.3757 6.48985 11.3757C6.95278 11.3757 7.37806 11.3115 7.76569 11.1832C8.15333 11.0548 8.47264 10.8944 8.72362 10.7019C8.97461 10.5093 9.19352 10.2903 9.38037 10.0448C9.56721 9.79925 9.70386 9.56766 9.79031 9.35003C9.87676 9.13239 9.93672 8.92592 9.97018 8.73061H6.48985V6.62123H12.2793C12.3462 6.9728 12.3797 7.3132 12.3797 7.64244ZM19.6331 6.62123V8.37905H17.8846V10.1285H16.1277V8.37905H14.3792V6.62123H16.1277V4.87179H17.8846V6.62123H19.6331Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-center mt-12 mb-3">
            <span className="leading-6 font-normal text-[15px]">
              Copyright © 2022{' '}
              <span className="text-lightBlue">
                The Miraculous Music Template
              </span>{' '}
              . All Rights Reserved.
            </span>
          </div>
        </section>
      </footer>
      {/* form login - register */}
      <div
        className={`popupLoginRegister ${
          openPopup ? '' : 'loginRegisteContainerHidden'
        } w-full h-full bg-[#0C0E1ACC] fixed top-0 left-0 z-20 flex justify-center items-center`}
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
