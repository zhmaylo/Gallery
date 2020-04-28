import { LOADING_END } from '../constants';


const loadingReducer = (state = false, action) => {
    switch(action.type) {
        case LOADING_END:
            return {
                ...state,
                loading:action.payload
            };
        default:
            return state;
    }
}
export default loadingReducer;