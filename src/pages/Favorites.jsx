import { Dot, HeartIcon, HeartPulse, XIcon } from 'lucide-react';
import Main from '../layouts/Main';
import {
  carouselData,
  carouselSetting,
  freeDownloads,
} from '../data/carouselData';
import React from 'react';
import { RxHeartFilled } from 'react-icons/rx';
import { VscHeart, VscHeartFilled } from 'react-icons/vsc';
import TrackItem from '../components/TrackItem';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';

function Favorites() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [playingSong, setPlayingSong] = React.useState({
    index: 1,
    title: 'Daydreamer',
    album: '19',
    duration: '3:45',
    favourites: true,
  });

  const columns = [
    { name: '#', key: 'index' },
    { name: 'Song Title', key: 'title' },
    { name: 'Album', key: 'album' },
    { name: 'Duration', key: 'duration', align: 'center' },
    { name: 'Remove', key: 'remove', align: 'center' },
  ];

  const renderTableHeader = () => {
    return columns.map((column) => {
      return (
        <th
          key={column.key}
          className={`flex items-center justify-${
            column.align || 'start'
          } text-lightBlue text-[15px] leading-6 flex-1 py-5`}
        >
          <div className="relative">
            <div className="absolute w-fit h-fit -left-6 top-1/2 transform -translate-y-1/2">
              <Dot />
            </div>
            {column.name}
          </div>
        </th>
      );
    });

    // return columns.map((column) => {
    //   return (
    //     <th
    //       key={column.key}
    //       className="flex items-center text-lightBlue text-[15px] leading-6 flex-1 py-5 relative"
    //     >
    //       <div className="absolute w-fit h-fit -left-6 top-1/2 transform -translate-y-1/2">
    //         <Dot />
    //       </div>
    //       {column.name}
    //     </th>
    //   );
    // });
  };

  const renderCell = (row, column, i) => {
    switch (column.key) {
      case 'index':
        return (
          <td className="flex items-center text-sm leading-6 flex-1 h-[50px]">
            {
              <button
                onClick={() => {
                  setIsPlaying(true);
                  setPlayingSong(row);
                }}
              >
                {playingSong.index == i + 1 && isPlaying ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.227 12.055C18.8 12.055 18.454 11.703 18.454 11.269V8.731C18.454 8.297 18.8 7.945 19.227 7.945C19.654 7.945 20 8.297 20 8.731V11.269C20 11.703 19.654 12.055 19.227 12.055ZM15.536 14.57C15.109 14.57 14.763 14.218 14.763 13.784V6.215C14.763 5.781 15.109 5.429 15.536 5.429C15.963 5.429 16.309 5.781 16.309 6.215V13.784C16.309 14.218 15.963 14.57 15.536 14.57ZM11.845 15.42C11.418 15.42 11.073 15.069 11.073 14.635V5.365C11.073 4.931 11.418 4.58 11.845 4.58C12.272 4.58 12.618 4.931 12.618 5.365V14.635C12.618 15.069 12.272 15.42 11.845 15.42ZM8.15503 20C7.72803 20 7.38202 19.648 7.38202 19.214V0.785C7.38202 0.351 7.72803 0 8.15503 0C8.58103 0 8.927 0.351 8.927 0.785V19.214C8.927 19.648 8.58103 20 8.15503 20ZM4.46399 16.84C4.03699 16.84 3.69098 16.489 3.69098 16.055V3.945C3.69098 3.511 4.03699 3.159 4.46399 3.159C4.89099 3.159 5.23602 3.511 5.23602 3.945V16.055C5.23602 16.489 4.89099 16.84 4.46399 16.84ZM0.77301 14.57C0.34601 14.57 0 14.218 0 13.784V6.215C0 5.781 0.34601 5.429 0.77301 5.429C1.20001 5.429 1.54602 5.781 1.54602 6.215V13.784C1.54602 14.218 1.20001 14.57 0.77301 14.57Z"
                      fill="#3BC8E7"
                    />
                  </svg>
                ) : (
                  <span>
                    {i < 10 ? 0 : ''}
                    {i + 1}
                  </span>
                )}
              </button>
            }
          </td>
        );
      case 'duration':
        return (
          <td className="flex items-center justify-center text-sm leading-6 flex-1 h-[50px]">
            {row[column.key]}
          </td>
        );
      case 'favourites':
        return (
          <td className="flex items-center justify-center text-sm leading-6 flex-1 h-[50px]">
            <button>
              {row[column.key] ? (
                <VscHeartFilled size={24} />
              ) : (
                <VscHeart size={24} />
              )}
            </button>
          </td>
        );
      case 'remove':
        return (
          <td className="flex items-center justify-center text-sm leading-6 flex-1 h-[50px]">
            <button className="rounded-full flex items-center justify-center bg-lightBlue w-5 h-5 hover:brightness-90 transition">
              <XIcon size={12} fontWeight={600} className="!text-white" />
            </button>
          </td>
        );
      default:
        return (
          <td className="flex items-center text-sm leading-6 flex-1 h-[50px]">
            {row[column.key]}
          </td>
        );
    }
  };

  return (
    <>
      <Main title={'Favorites'} viewMore={false}>
        <table className="w-full">
          <thead className="w-full border-b border-b-lightBlue">
            <tr className="flex w-full">{renderTableHeader()}</tr>
          </thead>
          <tbody>
            {freeDownloads.map((row, i) => (
              <tr
                key={row.index}
                className={`flex w-full ${
                  isPlaying && row['index'] == playingSong.index
                    ? 'text-lightBlue'
                    : ''
                }`}
              >
                {columns.map((column) => renderCell(row, column, i))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full flex justify-center mt-10">
          <PrimaryButton>View More</PrimaryButton>
        </div>
      </Main>
      <Main title={'Recently Played'} viewMore={false} className="!pt-0">
        <Carousel {...carouselSetting}>
          {carouselData.map((item, index) => (
            <TrackItem key={index} item={item} />
          ))}
        </Carousel>
      </Main>
    </>
  );
}

export default Favorites;
