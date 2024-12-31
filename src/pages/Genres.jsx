import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

export default function Genres() {
  return (
    <Main title="Top Genres">
      <Row gutter={[24, 24]}>
        <Col span={8}>
          <Genre />
        </Col>
        <Col span={12}>
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Genre />
            </Col>
            <Col span={16}>
              <Genre
                genre={{
                  image: '../../public/genres/hiphop.jpg',
                }}
              />
            </Col>
          </Row>
          <Row gutter={[24, 24]} className="mt-6">
            <Col span={16}>
              <Genre
                genre={{
                  image: '../../public/genres/dancing.jpg',
                }}
              />
            </Col>
            <Col span={8}>
              <Genre
                genre={{
                  image: '../../public/genres/edm.jpg',
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          <Genre
            genre={{
              image: '../../public/genres/rock.jpg',
            }}
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]} className="mt-6">
        <Col span={12}>
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Genre />
            </Col>
            <Col span={16}>
              <Genre
                genre={{
                  image: '../../public/genres/hiphop.jpg',
                }}
              />
            </Col>
          </Row>
          <Row gutter={[24, 24]} className="mt-6">
            <Col span={16}>
              <Genre
                genre={{
                  image: '../../public/genres/dancing.jpg',
                }}
              />
            </Col>
            <Col span={8}>
              <Genre
                genre={{
                  image: '../../public/genres/edm.jpg',
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          <Genre
            genre={{
              image: '../../public/genres/rock.jpg',
            }}
          />
        </Col>
        <Col span={8}>
          <Genre />
        </Col>
      </Row>
    </Main>
  );
}

function Genre({ genre }) {
  return (
    <Link
      to="/genres/1"
      className="rounded-lg relative overflow-hidden block group h-full"
    >
      <div className="absolute inset-0 bg-secondaryLinear h-full group-hover:!bg-primaryLinear transition"></div>
      <img
        src={genre?.image || '../../public/genres/romantic.jpg'}
        alt="romantic"
        className="object-cover w-full h-full"
      />
      <div className="flex px-3 py-6 absolute bottom-0 left-0 right-0 items-center font-sans group">
        <h2 className="text-white text-md font-sans">Romantic</h2>
        <Link
          to="/genres/1"
          className="ml-auto text-white text-md hover:text-white hover:underline opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition"
        >
          View Songs
        </Link>
      </div>
    </Link>
  );
}
