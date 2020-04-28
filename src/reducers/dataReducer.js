import { DATA_JSON } from '../constants';


const dataReducer = (state = false, action) => {
    switch(action.type) {
        case DATA_JSON:
            return {
                ...state,
                data:action.payload
            };
        default:
            return state;
    }
}
export default dataReducer;