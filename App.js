import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { unionReducer } from './src/reducers/unionReducer'
import { ContextApp, initialState } from './src/reducers/unionReducer'

// import configureStore from "./src/store/configureStore";
// import { Provider} from "react-redux";
import AppNavigator from "./src/components/AppNavigator";
// import { LOADING_END } from "./src/constants";

//init state
// let store = configureStore();


const ContentApp = React.createContext(null);
// console.log ("ContentApp", ContentApp);

export default function App(props) {
    const [state, dispatch] = useReducer(unionReducer, initialState);

    // console.log ("App.state", state);

    return (
        <ContextApp.Provider value={{ state, dispatch }}>
            <AppNavigator />
        </ContextApp.Provider>
    );
}


// console.log("App.store", store);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


