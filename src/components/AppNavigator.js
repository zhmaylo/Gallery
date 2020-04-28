import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import imageScreen from "../screen/imageScreen";
import galerryScreen from "../screen/galerryScreen";
const Stack = createStackNavigator();


const AppNavigator = () => (
        <NavigationContainer>
            <Stack.Navigator mode="modal" >
                <Stack.Screen name="Gallery" component={galerryScreen}/>
                <Stack.Screen options={{ headerShown: false }} name="ImageFull" component={imageScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );


export default AppNavigator;

