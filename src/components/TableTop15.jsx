import { Card, Col, Row } from 'antd';
import { IoIosMore } from 'react-icons/io';
import React from 'react';
import Main from '../layouts/Main';
import Song from './Song';

const TableTop15 = ({ data, name }) => {
  if (!data) return 'Chưa có data';
  const columns = data.reduce((acc, item, index) => {
    const groupIndex = Math.floor(index / 5);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(item);
    return acc;
  }, []);
  return (
    <Main title={'Weekly Top 15'} viewMore={false}>
      <div className="columns-3 gap-10">
        {[...Array(15).keys()].map((i) => (
          <Song key={i} index={i} />
        ))}
      </div>
    </Main>
  );
};

export default TableTop15;
