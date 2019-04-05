//index.ios.js - place code in here for IOS!!!

// import a library to help create a cmponent

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';



// crecte a component
const App = () => {
    return (
        <Header />
    );
};




// render it to the device

AppRegistry.registerComponent('albums_with_native', () => App);