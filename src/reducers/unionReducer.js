import React from 'react';
import {combineReducers} from "redux";

import loadingReducer from "./loadingReducer";
import dataReducer from "./dataReducer";

export const ContextApp = React.createContext(null);

export const initialState = {
    loadingState: {
        loading: false
    },

    dataJson: {
        data: []
    }

};

export const unionReducer = combineReducers(
    {
        loadingState: loadingReducer,
        dataJson: dataReducer
    }
);
