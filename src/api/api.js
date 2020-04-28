import React from 'react';
import {IMGHEIGHT, IMGWIDTH, URLGAL} from "../constants";
import {Dimensions} from "react-native";

export function fetchData() {

    return (fetch(URLGAL)
        .then(response => response.json(),
            error => console.log('An error occurred.', error))
        .then(json => {
            return json;
        }))
}

export function getDimen() {
    let dim = {
        imgWidth:  IMGWIDTH,
        numColumn: 1,
        imgHeight: IMGHEIGHT
    };

    const windowWidth = Dimensions.get('window').width;
    dim.numColumn = windowWidth/dim.imgWidth >> 0;
    dim.imgWidth = windowWidth/dim.numColumn;


    return (dim);

}

