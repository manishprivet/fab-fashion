import React from 'react';
import './CollectionPreview.scss';
import { Item } from '../../data/shop';
import CollectionItem from '../CollectionItem/CollectionItem';

interface Props {
  title: string;
  items: Item[];
}

const CollectionPreview = ({ title, items }: Props) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((_, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
