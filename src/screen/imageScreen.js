import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TouchableWithoutFeedback, Image} from 'react-native';

export default function imageScreen(props) {

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Gallery')}>
                <Image resizeMode='contain'
                    style={styles.image}
                    source={{uri : props.route.params.url}}
                />
            </TouchableWithoutFeedback>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flexGrow: 1,
        alignSelf: 'stretch',

    },
});