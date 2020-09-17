import React, { useState } from 'react';
import { SECTIONS_DATA } from '../../data/sections';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';

const Directory = () => {
  const sections = useState(SECTIONS_DATA)[0];

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </div>
  );
};

export default Directory;
