import { Steps } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const { Step } = Steps;
const NewRelasesComponent = ({ data, name, link }) => {
  const [current, setCurrent] = useState(0);

  const handleStepClick = (index) => {
    setCurrent(index);
  };
  if (!data) return 'Chưa có data!';
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full flex justify-between">
        <span className="text-lightBlue font-semibold text-lg relative">
          {name}
        </span>
        <Link to={link} className="font-normal text-[15px]">
          See More
        </Link>
      </div>
      <div>
        <Steps
          current={current}
          progressDot
          direction="horizontal"
          style={{
            display: 'flex',
            justifyContent: 'center',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            padding: '10px 0',
          }}
        >
          {data.map((item, index) => (
            <Step
              key={item.id}
              title={
                <div
                  className="flex w-full gap-5 py-1 cursor-pointer mr-10"
                  onClick={() => handleStepClick(index)}
                >
                  <div className="w-[50px] h-[50px] rounded-md overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover"
                      src={item.image}
                      alt=""
                    />
                    <div
                      id="image-cover-step"
                      className="flex justify-center items-center w-full h-full absolute top-0 left-0 z-10 bg-[#000000B2]"
                    >
                      <img className="" src="/images/Component 4.png" alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="flex gap-2 text-white font-semibold text-sm leading-5">
                      <span>{item.title}</span>
                      <span>{item.duration}</span>
                    </h3>
                    <span className="font-normal text-sm text-white">
                      {item.artist}
                    </span>
                  </div>
                </div>
              }
              description=""
            />
          ))}
        </Steps>
      </div>
    </div>
  );
};

export default NewRelasesComponent;
