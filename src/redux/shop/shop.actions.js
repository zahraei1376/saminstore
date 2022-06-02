import shopActionTypes from "./shop.types";
import axios from "axios";
import {useErrorHandler} from '../../functions/functions';

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
    // const loading = useErrorHandler();
    // const callApi = (err) => ax.get(err ? 'https://asdf' : 'https://www.boredapi.com/api/activity')
    dispatch(fetchCollectionsStart());
    axios
      .get(url , {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT fefege...'
        },
      })
      .then((res) => {
        console.log("res", res);
        dispatch(fectchCollectionsCuccess(res.data));
      })
      .catch((res) => {
        if (res instanceof Error) {
          dispatch(fectchCollectionsFailure(res.message));
        } else {
          dispatch(fectchCollectionsCuccess(res.data));
        }
      });
  };
};
