import React from 'react';
import './MenuItem.scss';

interface Props {
  title: string;
  imageUrl: string;
  size?: string;
}

const MenuItem = ({ title, imageUrl, size }: Props) => {
  return (
    <div className={`${size} menu-item`}>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image" />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
