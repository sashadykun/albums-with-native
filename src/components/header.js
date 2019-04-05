//import libreries to make a component
import React from 'react';
import { Text, View } from 'react-native';


// cteate componet

const Header = () => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums Header</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 25
    },
    textStyle: {
        fontSize: 20
    }
}
// make component to be avalable for other parts of app

export default Header;