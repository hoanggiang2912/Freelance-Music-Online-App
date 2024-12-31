import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import SliderComponent from '../components/SliderComponent';
import TableTop15 from '../components/TableTop15';
import NewRelasesComponent from '../components/NewRelasesComponent';
import { Link } from 'react-router-dom';
const recentlyPlayeds = [
  {
    id: 1,
    image: '/images/r_music1.jpg.png',
    name: 'Dream Your Moments(Duet)',
    desc: 'Ava Cornish & Brian Hill',
  },
  {
    id: 2,
    image: '/images/r_music2.jpg.png',
    name: 'Until I Met You',
    desc: 'Ava Cornish & Brian Hill',
  },
  {
    id: 3,
    image: '/images/r_music3.jpg.png',
    name: 'Gimme Some Courage',
    desc: 'Ava Cornish & Brian Hill',
  },
  {
    id: 4,
    image: '/images/r_music4.jpg.png',
    name: 'Dark Alley Acoustic',
    desc: 'Ava Cornish & Brian Hill',
  },
  {
    id: 5,
    image: '/images/r_music5.jpg.png',
    name: 'Walking Promises',
    desc: 'Ava Cornish & Brian Hill',
  },
  {
    id: 6,
    image: '/images/r_music6.jpg.png',
    name: 'Desired Games',
    desc: 'Ava Cornish & Brian Hill',
  },
];
const featuredArtists = [
  {
    id: 2,
    image: '/images/r_music1.jpg.png',
    name: 'Dream Your Moments(Duet)',
  },
  {
    id: 3,
    image: '/images/r_music1.jpg.png',
    name: 'Dream Your Moments(Duet)',
  },
  {
    id: 4,
    image: '/images/r_music1.jpg.png',
    name: 'Dream Your Moments(Duet)',
  },
  {
    id: 5,
    image: '/images/r_music1.jpg.png',
    name: 'Dream Your Moments(Duet)',
  },
  {
    id: 6,
    image: '/images/r_music1.jpg.png',
    name: 'Dream Your Moments(Duet)',
  },
  {
    id: 1,
    image: '/images/r_music1.jpg.png',
    name: 'Dream Your Moments(Duet)',
  },
];
const featuredAlbums = [
  {
    id: 1,
    image: '/images/r_music1.jpg.png',
    name: 'Dream Your Moments(Duet)',
    desc: 'Ava Cornish & Brian Hill',
  },
  {
    id: 2,
    image: '/images/r_music2.jpg.png',
    name: 'Until I Met You',
    desc: 'Ava Cornish & Brian Hill',
  },
  {
    id: 3,
    image: '/images/r_music3.jpg.png',
    name: 'Gimme Some Courage',
    desc: 'Ava Cornish & Brian Hill',
  },
  {
    id: 4,
    image: '/images/r_music4.jpg.png',
    name: 'Dark Alley Acoustic',
    desc: 'Ava Cornish & Brian Hill',
  },
  {
    id: 5,
    image: '/images/r_music5.jpg.png',
    name: 'Walking Promises',
    desc: 'Ava Cornish & Brian Hill',
  },
  {
    id: 6,
    image: '/images/r_music6.jpg.png',
    name: 'Desired Games',
    desc: 'Ava Cornish & Brian Hill',
  },
];
const weeklyTop15 = [
  {
    id: 1,
    title: 'Until I Met You',
    ranking: '01',
    imgSrc:
      'https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center',
    artist: 'Ava Cornish',
  },
  {
    id: 2,
    title: 'Walking Promises',
    ranking: '02',
    imgSrc:
      'https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center',
    artist: 'Ava Cornish',
  },
  {
    id: 3,
    title: 'Gimme Some Courage',
    ranking: '03',
    imgSrc:
      'https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center',
    artist: 'Ava Cornish',
  },
  {
    id: 4,
    title: 'Desired Games',
    ranking: '04',
    imgSrc:
      'https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center',
    artist: 'Ava Cornish',
  },
  {
    id: 5,
    title: 'Dark Alley Acoustic',
    ranking: '05',
    imgSrc:
      'https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center',
    artist: 'Ava Cornish',
  },
  {
    id: 6,
    title: 'Walking Promises',
    ranking: '06',
    imgSrc:
      'https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center',
    artist: 'Ava Cornish',
  },
  {
    id: 7,
    title: 'Endless Things',
    ranking: '07',
    imgSrc:
      'https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center',
    artist: 'Ava Cornish',
  },
  {
    id: 8,
    title: 'Dream Your Moments',
    ranking: '08',
    imgSrc:
      'https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center',
    artist: 'Ava Cornish',
  },
  {
    id: 9,
    title: 'Until I Met You',
    ranking: '09',
    imgSrc:
      'https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center',
    artist: 'Ava Cornish',
  },
  {
    id: 10,
    title: 'One More Stranger',
    ranking: '10',
    imgSrc:
      'https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center',
    artist: 'Ava Cornish',
  },
  {
    id: 11,
    title: 'The Heartbeat Stops',
    ranking: '11',
    imgSrc:
      'https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center',
    artist: 'Ava Cornish',
  },
  {
    id: 12,
    title: 'Walking Promises',
    ranking: '12',
    imgSrc:
      'https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center',
    artist: 'Ava Cornish',
  },
  {
    id: 13,
    title: 'Gimme Some Courage',
    ranking: '13',
    imgSrc:
      'https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center',
    artist: 'Ava Cornish',
  },
  {
    id: 14,
    title: 'Endless Things',
    ranking: '14',
    imgSrc:
      'https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center',
    artist: 'Ava Cornish',
  },
  {
    id: 15,
    title: 'Desired Games',
    ranking: '15',
    imgSrc:
      'https://cdn.dribbble.com/userupload/18164562/file/original-1ec46f36a7a438f38c8fa275a70d98ac.png?format=webp&resize=450x338&vertical=center',
    artist: 'Ava Cornish',
  },
];
const newRelases = [
  {
    id: 1,
    title: 'Dark Alley Acoustic',
    artist: 'Ava Cornish',
    duration: '5:10',
    image:
      'https://cdn.dribbble.com/userupload/18164619/file/original-af8e9708e5b704d2dd2b2733e5cce9ea.png?format=webp&resize=450x338&vertical=center',
  },
  {
    id: 2,
    title: 'Dark Alley Acoustic',
    artist: 'Ava Cornish',
    duration: '5:10',
    image:
      'https://cdn.dribbble.com/userupload/18164619/file/original-af8e9708e5b704d2dd2b2733e5cce9ea.png?format=webp&resize=450x338&vertical=center',
  },
  {
    id: 3,
    title: 'Dark Alley Acoustic',
    artist: 'Ava Cornish',
    duration: '5:10',
    image:
      'https://cdn.dribbble.com/userupload/18164619/file/original-af8e9708e5b704d2dd2b2733e5cce9ea.png?format=webp&resize=450x338&vertical=center',
  },
  {
    id: 4,
    title: 'Dark Alley Acoustic',
    artist: 'Ava Cornish',
    duration: '5:10',
    image:
      'https://cdn.dribbble.com/userupload/18164619/file/original-af8e9708e5b704d2dd2b2733e5cce9ea.png?format=webp&resize=450x338&vertical=center',
  },
];
const genres = [
  {
    id: 1,
    image:
      'https://cdn.dribbble.com/userupload/16708407/file/original-a95a96065fd6a022030bf4e34f647986.png?format=webp&resize=450x338&vertical=center',
    name: 'Romantic',
    sytles: '',
  },
  {
    id: 2,
    image:
      'https://cdn.dribbble.com/userupload/15081900/file/original-4f32406e1b325951cef339173571d25c.png?format=webp&resize=450x338&vertical=center',
    name: 'Classical',
  },
  {
    id: 3,
    image:
      'https://cdn.dribbble.com/users/2400293/screenshots/19766354/media/f00ba86ba0c81e959f855126e2d6a8ba.png?format=webp&resize=450x338&vertical=center',
    name: 'Hiphop',
  },
  {
    id: 4,
    image:
      'https://cdn.dribbble.com/userupload/5611127/file/original-8ddbbf589991f3cc5d7f959b60ae8d67.png?format=webp&resize=450x338&vertical=center',
    name: 'Dancing',
  },
  {
    id: 5,
    image:
      'https://cdn.dribbble.com/userupload/11087034/file/original-a28a6194ffa21d0d91df67377527c689.png?format=webp&resize=450x338&vertical=center',
    name: 'EDM',
  },
  {
    id: 6,
    image:
      'https://cdn.dribbble.com/userupload/11087034/file/original-a28a6194ffa21d0d91df67377527c689.png?format=webp&resize=450x338&vertical=center',
    name: 'Rock',
  },
];
const styleGridLayout = [
  'col-start-1 col-end-3 row-start-1 row-end-3 object-cover rounded-xl h-full w-full overflow-hidden',
  'col-start-3 col-end-4 row-start-1 row-end-2 object-cover rounded-xl h-full w-full overflow-hidden',
  'col-start-4 col-end-6 row-start-1 row-end-2 object-cover rounded-xl h-full w-full overflow-hidden',
  'col-start-3 col-end-5 row-start-2 row-end-3 object-cover rounded-xl h-full w-full overflow-hidden',
  'col-start-5 col-end-6 row-start-2 row-end-3 object-cover rounded-xl h-full w-full overflow-hidden',
  'col-start-6 col-end-7 row-start-1 row-end-3 object-cover rounded-xl h-full w-full overflow-hidden',
];
const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex bg-transparent px-24">
        <div className="w-[40%] h-full">
          <img
            className="w-full h-full object-cover"
            src="/images/banner.png"
            alt=""
          />
        </div>
        <div className="w-[60%] h-full pt-36 pb-28 flex flex-col">
          <h1 className="inline-flex flex-col leading-[54px] font-bold text-5xl">
            <span>This Month’s</span>
            <span className="text-lightBlue">Record Breaking Albums !</span>
          </h1>
          <span className="text-[#777777] text-[15px] font-normal leading-8 mt-[15px]">
            Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley,
            One More Of A Stranger, Endless Things, The Heartbeat Stops, Walking
            Promises, Desired Games and many more...
          </span>
          <div className="flex gap-8 items-center mt-10">
            <Button
              type="primary"
              className="h-auto w-auto font-semibold text-[15px] bg-lightBlue rounded-3xl py-3 px-9 hover:shadow-[0_0_24px_0_#3BC8E7] hover:!bg-lightBlue hover:!text-white"
            >
              Listen Now
            </Button>
            <Button
              type="primary"
              className="h-auto w-auto font-semibold text-[15px] bg-lightBlue rounded-3xl py-3 px-9 hover:shadow-[0_0_24px_0_#3BC8E7] hover:!bg-lightBlue hover:!text-white"
            >
              Add To Queue
            </Button>
          </div>
        </div>
      </div>
      <div className="w-widthDesktop">
        <SliderComponent
          dataSlider={recentlyPlayeds}
          name={'Recently Played'}
          link={'/'}
        ></SliderComponent>
      </div>
      <div className="w-widthDesktop mt-16">
        <TableTop15 name={'Weekly Top 15'} data={weeklyTop15}></TableTop15>
      </div>
      <div className="w-widthDesktop mt-16">
        <SliderComponent
          dataSlider={featuredArtists}
          name={'Featured Artists'}
          link={'/'}
        ></SliderComponent>
      </div>
      <div className="w-widthDesktop mt-12">
        <img className="object-contain" src="/images/adv.jpg.png" alt="" />
      </div>
      <div className="w-widthDesktop mt-16">
        <NewRelasesComponent
          data={newRelases}
          name={'New Relases'}
        ></NewRelasesComponent>
      </div>
      <div className="w-widthDesktop mt-16">
        <SliderComponent
          dataSlider={featuredAlbums}
          name={'Featured Albums'}
          link={'/'}
        ></SliderComponent>
      </div>
      <div className="w-widthDesktop mt-16  mb-20">
        <div className="flex flex-col gap-8">
          <div className="w-full flex justify-between">
            <span className="text-lightBlue font-semibold text-lg relative">
              Top Genres
              <span className="absolute left-0 bottom-0 bg-lightBlue w-[30%] h-[1px]"></span>
            </span>
            <Link to="" className="font-normal text-[15px]">
              See More
            </Link>
          </div>
          <div className="w-full h-[369px] grid gap-10 grid-cols-6 grid-rows-2">
            {genres.map((item, index) => (
              <div
                key={item.id}
                className={`relative ${styleGridLayout[index]} `}
              >
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt=""
                />
                <span className="z-10 absolute left-3 bottom-6 text-white text-[13px]">
                  {item.name}
                </span>
                {index === 0 ? (
                  <Link
                    to={''}
                    className="z-10 absolute right-3 bottom-6 text-white text-[13px]"
                  >
                    View song
                  </Link>
                ) : (
                  ''
                )}
                <div className="w-full h-full absolute z-[1] top-0 left-0 bg-custom-gradient"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
