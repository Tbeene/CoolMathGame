import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions, Image, ImageBackground, TouchableHighlight, TextInput } from 'react-native';
import Constants from 'expo-constants';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        coolmath: 'coolmathgames.com',
        welcomePageDisplay: 'block',
        infoPageDisplay: 'none',
        searchDisplay: '',
        google: 'google.com'
    };

    _handleCoolMathChange = inputValue => {
        this.setState({ coolmath: inputValue });
    };

    _handleGoogleChange = inputValue => {
        this.setState({ google: inputValue });
    };

    _handleSearchDisplayChange = inputValue => {
        this.setState({ searchDisplay: inputValue });
    };

    handleWelcomePagePress = () => this.setState({
        welcomePageDisplay: 'block',
        infoPageDisplay: 'none',
    });

    handleInfoPagePress = () => this.setState({
        welcomePageDisplay: 'none',
        infoPageDisplay: 'block',
    });

    render() {
