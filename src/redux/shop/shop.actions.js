import shopActionTypes from "./shop.types";
import axios from "axios";

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTION_START,
});

export const fectchCollectionsCuccess = (collectionMap) => ({
  type: shopActionTypes.FETCH_COLLECTION_SECCUSS,
  payload: collectionMap,
});

export const fectchCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = (url) => {
  return (dispatch) => {
    dispatch(fetchCollectionsStart());
    axios
      .get(url)
      .then((res) => {
        dispatch(fectchCollectionsCuccess(res.data));
      })
      .catch((err) => {
        dispatch(fectchCollectionsFailure(err.message));
        // if (res instanceof Error) {
        //   dispatch(fectchCollectionsFailure(res.message));
        // } else {
        //   dispatch(fectchCollectionsCuccess(res.data));
        // }
      });
  };
};
