import React from 'react';
import { Link } from 'react-router-dom';

export default function TrackItem({ item }) {
  return (
    <Link to="" className="font-sans">
      <div className="mr-5 w-full h-full">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover rounded-lg w-full aspect-square"
        />
        <h3 className="text-white py-5">{item.title}</h3>
        <p className="text-white">{item.singers.join(' & ')}</p>
      </div>
    </Link>
  );
}
