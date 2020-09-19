import React from 'react';
import './CollectionOverview.scss';
import { useTypedSelector } from '../../redux/rootReducer';
import { selectShopCollection } from '../../redux/shop/shopSelector';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { CollectionUrlParams } from '../../data/shop';

const CollectionOverview = () => {
  const collections = useTypedSelector((state) => selectShopCollection(state));
  return (
    <div className="collection-overview">
      {Object.keys(collections).map((id) => (
        <CollectionPreview key={id} {...collections[id as CollectionUrlParams]} />
      ))}
    </div>
  );
};

export default CollectionOverview;
