import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Image, TouchableWithoutFeedback, View, Text } from 'react-native';

import { fetchData, getDimen } from "../api/api";
import { ContextApp } from "../reducers/unionReducer";
import Constants from 'expo-constants';

export default function galleryScreen(props) {

    const { state, dispatch } = React.useContext(ContextApp);

    useEffect(() => {
        fetchData().then((json) => {
            dispatch({ type: 'DATA_JSON', payload: json });
            dispatch({ type: 'LOADING_END', payload: true });
        });
    }, [!state.loadingState.loading]);

    // console.log("galleryScreen.state.dataJson.data", state.dataJson.data);
    // const items = state.dataJson.data;
    const dim = getDimen();

    if ((state.loadingState.loading))
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    numColumns={dim.numColumn}
                    horizontal={false}

                    data={state.dataJson.data}
                    renderItem={({ item, index, separators }) => (
                        <View>
                        <TouchableWithoutFeedback key={item.key}
                            onPress={() => props.navigation.navigate('ImageFull', { url: item.urls.full })}>
                            <Image style={{ width: dim.imgWidth, height: dim.imgHeight }} source={{uri: item.urls.small}} />
                        </TouchableWithoutFeedback>
                        <Text>{item.user.name}</Text> 
                        </View>
                    )}
                />
            </SafeAreaView>
        )
    else return (<Text>Загрузка</Text>)

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
});

