import React from 'react';
import './MenuItem.scss';
import { useHistory, useRouteMatch } from 'react-router-dom';

interface Props {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

const MenuItem = ({ title, imageUrl, size, linkUrl }: Props) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image" />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
