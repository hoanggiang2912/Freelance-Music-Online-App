import { Carousel } from 'antd';
import Song from '../components/Song';
import TrackItem from '../components/TrackItem';
import { carouselData, carouselSetting, songs } from '../data/carouselData';
import Main from '../layouts/Main';
import NewRelasesComponent from '../components/NewRelasesComponent';

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
        <div className="mt-8">
          <NewRelasesComponent name={'Trending Track'} data={songs} />
        </div>
      </Main>
    </>
  );
}

export default TopTracks;
