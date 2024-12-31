import { Col } from "antd";
import React from "react";

const ItemSliderComponent = ({ data, className }) => {
  return (
    <div className={`text-white flex flex-col ${className}`} id="item-carosel">
      <div className="rounded-xl overflow-hidden h-[175px] w-[175px]">
        <img className="w-full h-full object-cover" src={data?.image} alt="" />
      </div>
      <span className="mt-5 text-sm font-semibold leading-4">{data?.name}</span>
      <span className="mt-1 font-normal text-sm">{data?.desc}</span>
    </div>
  );
};

export default ItemSliderComponent;
