import { Col, Row } from 'antd';
import TrackItem from '../components/TrackItem';
import { carouselData } from '../data/carouselData';
import Main from '../layouts/Main';

function History() {
  return (
    <Main title={'History'} viewMore={false} showClearButton={true}>
      <Row gutter={[24, 24]} className="mt-6">
        {carouselData.map((item, index) => (
          <Col key={index} span={4}>
            <TrackItem item={item} />
          </Col>
        ))}
      </Row>
    </Main>
  );
}

export default History;
