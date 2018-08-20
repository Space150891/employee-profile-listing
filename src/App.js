/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Provider } from 'react-redux';

import store from './store'
import firebase from 'firebase';
import Router from './Router'

export default class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "apiKey",
            authDomain: "authDomain",
            databaseURL: "databaseURL",
            projectId: "projectId",
            storageBucket: "storageBucket",
            messagingSenderId: "messagingSenderId"
        };
        firebase.initializeApp(config);
    }
    render() {
       
        return (
            <Provider store={store}>
                <View style={styles.container}>
                <Router />
                </View>
            </Provider>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

});

