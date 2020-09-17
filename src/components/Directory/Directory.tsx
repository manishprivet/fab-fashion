import React, { useState } from 'react';
import { sections as sectionsList } from './data';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';

const Directory = () => {
  const sections = useState(sectionsList)[0];

  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, size }) => (
        <MenuItem key={id} imageUrl={imageUrl} size={size} title={title} />
      ))}
    </div>
  );
};

export default Directory;
