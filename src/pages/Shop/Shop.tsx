import React, { useState } from 'react';
import { SHOP_DATA } from '../../data/shop';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const Shop = () => {
  const collections = useState(SHOP_DATA)[0];

  return (
    <div className="shop-page">
      {collections.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </div>
  );
};

export default Shop;
