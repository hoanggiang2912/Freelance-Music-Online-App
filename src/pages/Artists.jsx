import React from "react";
import SliderComponent from "../components/SliderComponent";
import ItemSliderComponent from "../components/ItemSliderComponent";

const featuredArtists = [
  {
    id: 2,
    image: "/images/r_music1.jpg.png",
    name: "Dream Your Moments(Duet)",
  },
  {
    id: 3,
    image: "/images/r_music1.jpg.png",
    name: "Dream Your Moments(Duet)",
  },
  {
    id: 4,
    image: "/images/r_music1.jpg.png",
    name: "Dream Your Moments(Duet)",
  },
  {
    id: 5,
    image: "/images/r_music1.jpg.png",
    name: "Dream Your Moments(Duet)",
  },
  {
    id: 6,
    image: "/images/r_music1.jpg.png",
    name: "Dream Your Moments(Duet)",
  },
  {
    id: 7,
    image: "/images/r_music1.jpg.png",
    name: "Dream Your Moments(Duet)",
  },
  {
    id: 8,
    image: "/images/r_music1.jpg.png",
    name: "Dream Your Moments(Duet)",
  },
  {
    id: 9,
    image: "/images/r_music1.jpg.png",
    name: "Dream Your Moments(Duet)",
  },
  {
    id: 10,
    image: "/images/r_music1.jpg.png",
    name: "Dream Your Moments(Duet)",
  },
];

const Artists = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      <div className="w-widthDesktop">
        <SliderComponent
          dataSlider={featuredArtists}
          name={"Featured Artists"}
          link={"/"}
        ></SliderComponent>
      </div>
      <div className="w-widthDesktop mt-16 mb-20">
        <div className="flex flex-col gap-8">
          <div className="w-full flex justify-between">
            <span className="text-lightBlue font-semibold text-lg relative">
              Featured Artists
              <span className="absolute left-0 bottom-0 bg-lightBlue w-[30%] h-[1px]"></span>
            </span>
          </div>
          <div className="flex gap-6 flex-wrap">
            {featuredArtists.map((item) => (
              <ItemSliderComponent
                key={item.id}
                data={item}
                className="!w-[calc(100%/6-24px)]"
              ></ItemSliderComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
