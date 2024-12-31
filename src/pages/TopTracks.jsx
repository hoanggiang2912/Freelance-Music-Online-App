import { Carousel } from 'antd';
import Song from '../components/Song';
import TrackItem from '../components/TrackItem';
import { carouselData, carouselSetting } from '../data/carouselData';
import Main from '../layouts/Main';

function TopTracks() {
  return (
    <>
      <Main title={'Weekly Top 15'} viewMore={false}>
        <div className="columns-3 gap-10">
          {[...Array(15).keys()].map((i) => (
            <Song key={i} />
          ))}
        </div>
      </Main>
      <Main title={'Top Track Of All Time'} viewMore={false}>
        <Carousel {...carouselSetting}>
          {carouselData.map((item, index) => (
            <TrackItem key={index} item={item} />
          ))}
        </Carousel>
      </Main>
      <Main title={'Trending Track'}>
        <div className="line-track"></div>
      </Main>
    </>
  );
}

export default TopTracks;
