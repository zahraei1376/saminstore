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

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key]) // object.key for  convert key object to array
);

// export const selectCollection = collectionUrlparam =>(
//     createSelector(
//         [selectCollections],
//         collections => collections[collectionUrlparam] //=>serach by object
//         // collections => collections.find( collection => collection.id === COLLECTION_ID_MAP[collectionUrlparam ]) =>serach by array
//     )
// )

export const selectCollection = (collectionUrlparam) =>
  createSelector(
    [selectCollections],
    // collections => collections[collectionUrlparam]
    (collections) => (collections ? collections[collectionUrlparam] : null)
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
