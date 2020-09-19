import { RootState } from '../rootReducer';
import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';
import { CollectionUrlParams } from '../../data/shop';

const selectShop = (state: RootState) => state.shop;

export const selectShopCollection = createSelector([selectShop], (shop) => shop.collections);

export const selectCollection = memoize((collectionUrlParams: CollectionUrlParams) =>
  createSelector([selectShopCollection], (collections) => collections[collectionUrlParams])
);
