//index.ios.js - place code in here for IOS!!!

// import a library to help create a cmponent

import React from 'react';
import { Text, AppRegistry } from 'react-native';



// crecte a component
const App = () => {
    return (
        <Text>Some text</Text>
    );
};




// render it to the device

AppRegistry.registerComponent('albums_with_native', () => App);