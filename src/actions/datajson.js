import { DATA_JSON } from '../constants';

//actions
export function changeCount(data) {
    return {
        type: DATA_JSON,
        payload: data
    }
}