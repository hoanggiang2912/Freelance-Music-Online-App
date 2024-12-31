import React from "react";
import { Carousel, Col, Row } from "antd";
import { Link } from "react-router-dom";
import ItemSliderComponent from "./ItemSliderComponent";

const SliderComponent = ({ dataSlider, name, link }) => {
  if (!dataSlider) return "Chưa có data!";
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full flex justify-between">
        <span className="text-lightBlue font-semibold text-lg relative">
          {name}{" "}
          <span className="absolute left-0 bottom-0 bg-lightBlue w-[30%] h-[1px]"></span>
        </span>
        <Link to={link} className="font-normal text-[15px]">
          See More
        </Link>
      </div>
      <div>
        <Carousel
          autoplay={false}
          dots={false}
          draggable={true}
          arrows={true}
          slidesToShow={6}
          slidesToScroll={3}
          infinite={true}
        >
          {dataSlider.map((item) => (
            <ItemSliderComponent
              key={item.id}
              data={item}
            ></ItemSliderComponent>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SliderComponent;
