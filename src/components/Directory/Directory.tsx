import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';
import { useTypedSelector } from '../../redux/rootReducer';
import { selectDirectorySections } from '../../redux/directory/directorySelector';

const Directory = () => {
  const sections = useTypedSelector((state) => selectDirectorySections(state));

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </div>
  );
};

export default Directory;
