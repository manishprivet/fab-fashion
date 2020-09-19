import React from 'react';
import './Collection.scss';
import { useRouteMatch } from 'react-router-dom';
import { useTypedSelector } from '../../redux/rootReducer';
import { selectCollection } from '../../redux/shop/shopSelector';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import { CollectionUrlParams } from '../../data/shop';

const Collection = () => {
  const match = useRouteMatch() as { params: { collectionId: CollectionUrlParams } };
  const { collectionId } = match.params;
  const collection = useTypedSelector((state) => selectCollection(collectionId)(state));

  return (
    <div className="collection-page">
      <h2 className="title">{collection?.title}</h2>
      <div className="items">
        {collection?.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
