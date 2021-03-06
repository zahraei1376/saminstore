import shopActionTypes from './shop.types';

const INITIAL={
    collections:[],
    isFetching:false,
    errorMessage:undefined
}

const shopReducer = (state=INITIAL , action)=>{
    switch(action.type){
        case shopActionTypes.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching:true,
            }
        case shopActionTypes.FETCH_COLLECTION_SECCUSS:
            return {
                ...state,
                isFetching:false,
                collections:action.payload
            }
        case shopActionTypes.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                isFetching:false,
                errorMessage:action.paylod
            }
        default:
            return state;
    }
};

export default shopReducer;