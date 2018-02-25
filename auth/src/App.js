import React , { Component } from 'react';
import { View } from 'react-native';
import firebase from "firebase";  //should be above anything else we import
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

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
                <LoginForm />
            </View>
        );
    }

}

export default App;