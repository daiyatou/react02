'use strict';
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  ToastAndroid
} from 'react-native';
export default class DataTest2 extends Component {
    constructor(props) {
        super(props);
        this.state = {weather: '天气'};
    }
    componentDidMount() {
        this.fetchWeatherData("上海");
    }
    render() {
        return(
            <View style={styles.containerStyle}>
            <TextInput
                style={styles.textInputStyle}
                onChangeText={(text) => this.handleTextChange(text)} >
            </TextInput>
            <TouchableHighlight
                style={styles.confirmStyle}
                onPress={() => this.fetchWeatherData(this.state.address)} >
                <Text >确认</Text>
            </TouchableHighlight>
            <Text>{this.state.weather}</Text>
            </View>
        );
    }
｝

module.exports = DataTest2;
