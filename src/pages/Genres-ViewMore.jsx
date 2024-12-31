import { Carousel } from 'antd';
import { carouselSetting, genres } from '../data/carouselData';
import Main from '../layouts/Main';
import TrackItem from '../components/TrackItem';

function GenresViewMore() {
  return (
    <>
      {genres?.map((genre, index) => (
        <Main key={index} title={genre.title}>
          <Carousel {...carouselSetting}>
            {genre.data.map((item, index) => (
              <TrackItem key={index} item={item} />
            ))}
          </Carousel>
        </Main>
      ))}
    </>
  );
}

export default GenresViewMore;
