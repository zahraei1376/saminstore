import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectError = createSelector(
  [selectShop],
  (shop) => shop.errorMessage
);

export const selectLoading = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
