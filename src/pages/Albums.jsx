import React from "react";
import SliderComponent from "../components/SliderComponent";
import TableTop15 from "../components/TableTop15";
import NewRelasesComponent from "../components/NewRelasesComponent";

const recentlyPlayeds = [
  {
    id: 1,
    image: "/images/r_music1.jpg.png",
    name: "Dream Your Moments(Duet)",
    desc: "Ava Cornish & Brian Hill",
  },
  {
    id: 2,
    image: "/images/r_music2.jpg.png",
    name: "Until I Met You",
    desc: "Ava Cornish & Brian Hill",
  },
  {
    id: 3,
    image: "/images/r_music3.jpg.png",
    name: "Gimme Some Courage",
    desc: "Ava Cornish & Brian Hill",
  },
  {
    id: 4,
    image: "/images/r_music4.jpg.png",
    name: "Dark Alley Acoustic",
    desc: "Ava Cornish & Brian Hill",
  },
  {
    id: 5,
    image: "/images/r_music5.jpg.png",
    name: "Walking Promises",
    desc: "Ava Cornish & Brian Hill",
  },
  {
    id: 6,
    image: "/images/r_music6.jpg.png",
    name: "Desired Games",
    desc: "Ava Cornish & Brian Hill",
  },
];
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
    id: 1,
    image: "/images/r_music1.jpg.png",
    name: "Dream Your Moments(Duet)",
  },
];
const weeklyTop15 = [
  {
    id: 1,
    title: "Until I Met You",
    ranking: "01",
    imgSrc:
      "https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center",
    artist: "Ava Cornish",
  },
  {
    id: 2,
    title: "Walking Promises",
    ranking: "02",
    imgSrc:
      "https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center",
    artist: "Ava Cornish",
  },
  {
    id: 3,
    title: "Gimme Some Courage",
    ranking: "03",
    imgSrc:
      "https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center",
    artist: "Ava Cornish",
  },
  {
    id: 4,
    title: "Desired Games",
    ranking: "04",
    imgSrc:
      "https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center",
    artist: "Ava Cornish",
  },
  {
    id: 5,
    title: "Dark Alley Acoustic",
    ranking: "05",
    imgSrc:
      "https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center",
    artist: "Ava Cornish",
  },
  {
    id: 6,
    title: "Walking Promises",
    ranking: "06",
    imgSrc:
      "https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center",
    artist: "Ava Cornish",
  },
  {
    id: 7,
    title: "Endless Things",
    ranking: "07",
    imgSrc:
      "https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center",
    artist: "Ava Cornish",
  },
  {
    id: 8,
    title: "Dream Your Moments",
    ranking: "08",
    imgSrc:
      "https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center",
    artist: "Ava Cornish",
  },
  {
    id: 9,
    title: "Until I Met You",
    ranking: "09",
    imgSrc:
      "https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center",
    artist: "Ava Cornish",
  },
  {
    id: 10,
    title: "One More Stranger",
    ranking: "10",
    imgSrc:
      "https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center",
    artist: "Ava Cornish",
  },
  {
    id: 11,
    title: "The Heartbeat Stops",
    ranking: "11",
    imgSrc:
      "https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center",
    artist: "Ava Cornish",
  },
  {
    id: 12,
    title: "Walking Promises",
    ranking: "12",
    imgSrc:
      "https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center",
    artist: "Ava Cornish",
  },
  {
    id: 13,
    title: "Gimme Some Courage",
    ranking: "13",
    imgSrc:
      "https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center",
    artist: "Ava Cornish",
  },
  {
    id: 14,
    title: "Endless Things",
    ranking: "14",
    imgSrc:
      "https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center",
    artist: "Ava Cornish",
  },
  {
    id: 15,
    title: "Desired Games",
    ranking: "15",
    imgSrc:
      "https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center",
    artist: "Ava Cornish",
  },
];
const featuredAlbums = [
  {
    id: 1,
    image: "/images/r_music1.jpg.png",
    name: "Dream Your Moments(Duet)",
    desc: "Ava Cornish & Brian Hill",
  },
  {
    id: 2,
    image: "/images/r_music2.jpg.png",
    name: "Until I Met You",
    desc: "Ava Cornish & Brian Hill",
  },
  {
    id: 3,
    image: "/images/r_music3.jpg.png",
    name: "Gimme Some Courage",
    desc: "Ava Cornish & Brian Hill",
  },
  {
    id: 4,
    image: "/images/r_music4.jpg.png",
    name: "Dark Alley Acoustic",
    desc: "Ava Cornish & Brian Hill",
  },
  {
    id: 5,
    image: "/images/r_music5.jpg.png",
    name: "Walking Promises",
    desc: "Ava Cornish & Brian Hill",
  },
  {
    id: 6,
    image: "/images/r_music6.jpg.png",
    name: "Desired Games",
    desc: "Ava Cornish & Brian Hill",
  },
];
const newRelases = [
  {
    id: 1,
    title: "Dark Alley Acoustic",
    artist: "Ava Cornish",
    duration: "5:10",
    image:
      "https://cdn.dribbble.com/userupload/18164619/file/original-af8e9708e5b704d2dd2b2733e5cce9ea.png?format=webp&resize=450x338&vertical=center",
  },
  {
    id: 2,
    title: "Dark Alley Acoustic",
    artist: "Ava Cornish",
    duration: "5:10",
    image:
      "https://cdn.dribbble.com/userupload/18164619/file/original-af8e9708e5b704d2dd2b2733e5cce9ea.png?format=webp&resize=450x338&vertical=center",
  },
  {
    id: 3,
    title: "Dark Alley Acoustic",
    artist: "Ava Cornish",
    duration: "5:10",
    image:
      "https://cdn.dribbble.com/userupload/18164619/file/original-af8e9708e5b704d2dd2b2733e5cce9ea.png?format=webp&resize=450x338&vertical=center",
  },
  {
    id: 4,
    title: "Dark Alley Acoustic",
    artist: "Ava Cornish",
    duration: "5:10",
    image:
      "https://cdn.dribbble.com/userupload/18164619/file/original-af8e9708e5b704d2dd2b2733e5cce9ea.png?format=webp&resize=450x338&vertical=center",
  },
];
const Albums = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      <div className="w-widthDesktop">
        <SliderComponent
          dataSlider={featuredArtists}
          name={"Featured Artists"}
          link={"/"}
        ></SliderComponent>
      </div>
      <div className="w-widthDesktop mt-12">
        <SliderComponent
          dataSlider={recentlyPlayeds}
          name={"Trending Albums"}
          link={"/"}
        ></SliderComponent>
      </div>
      <div className="w-widthDesktop mt-16">
        <TableTop15 name={"Weekly Top 15"} data={weeklyTop15}></TableTop15>
      </div>
      <div className="w-widthDesktop mt-16">
        <SliderComponent
          dataSlider={featuredAlbums}
          name={"Featured Albums"}
          link={"/"}
        ></SliderComponent>
      </div>
      <div className="w-widthDesktop mt-16 mb-20">
        <NewRelasesComponent
          data={newRelases}
          name={"New Relases"}
        ></NewRelasesComponent>
      </div>
    </div>
  );
};

export default Albums;
