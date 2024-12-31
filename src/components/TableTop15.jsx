import { Card, Col, Row } from "antd";
import { IoIosMore } from "react-icons/io";
import React from "react";

const TableTop15 = ({ data, name }) => {
  if (!data) return "Chưa có data";
  const columns = data.reduce((acc, item, index) => {
    const groupIndex = Math.floor(index / 5);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(item);
    return acc;
  }, []);
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full flex justify-between">
        <span className="text-lightBlue font-semibold text-lg relative">
          {name}{" "}
          <span className="absolute left-0 bottom-0 bg-lightBlue w-[30%] h-[1px]"></span>
        </span>
      </div>
      <div>
        <Row gutter={[16, 16]}>
          {columns.map((column, index) => (
            <Col span={8} key={index}>
              {column.map((item, indexItem) => (
                <div
                  key={item.id}
                  className={`h-auto flex gap-[20px] items-center py-[20px] pr-[40px] even:custom-border`}
                >
                  <span className="font-bold text-[40px] leding-[40px]">
                    {item.ranking}
                  </span>
                  <div className="w-[50px] h-[50px] overflow-hidden rounded-[5px]">
                    <img
                      className="w-full h-full object-cover"
                      src={item.imgSrc}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <span>{item.title}</span>
                    <span>{item.artist}</span>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <span>5:10</span>
                    <IoIosMore className="cursor-pointer text-[20px]" />
                  </div>
                </div>
              ))}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default TableTop15;
