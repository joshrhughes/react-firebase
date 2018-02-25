import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from "firebase";  //should be above anything else we import
import { Header } from './components/common';

class App extends Component {
    //bringin in Firebase
    componentWillMount () {
        firebase.initializeApp ({
            apiKey: 'AIzaSyDN_RWExpV6WC6f0lRkFb8bMWli3-CO0Us',
            authDomain: 'auth-3236f.firebaseapp.com',
            databaseURL: 'https://auth-3236f.firebaseio.com',
            projectId: 'auth-3236f',
            storageBucket: 'auth-3236f.appspot.com',
            messagingSenderId: '740860130602'
        });

    }


    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <Text>An App</Text>
            </View>
        );
    }

}

export default App;