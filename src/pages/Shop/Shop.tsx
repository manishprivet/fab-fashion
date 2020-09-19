import React from 'react';
import CollectionOverview from '../../components/CollectionsOverview/CollectionOverview';
import { Route, useRouteMatch } from 'react-router-dom';
import Collection from '../Collection/Collection';

const Shop = () => {
  const match = useRouteMatch();
  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
