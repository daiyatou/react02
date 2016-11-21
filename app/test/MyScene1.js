import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import SecondPageComonent from "./MyScene2";

export default class FirstPageComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            resultMessage:"hello",
        };
    }

    _pressButtoon(){
        var _this = this;
        const { navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'SecondPageComonent',
                component:SecondPageComonent,
                params:{
                    message:"I am from FirstPageComponent",
                    getResult:function(myMessage){
                        _this.setState({
                            resultMessage:myMessage,
                        })
                    }
                }
            })
        }
    }

    render(){
        return (
            <View style={styles.narRow}>
                <TouchableOpacity onPress={this._pressButtoon.bind(this)}>
                    <Text style={styles.navBase , styles.background}>{this.state.resultMessage}</Text>
                </TouchableOpacity>
            </View>
            );
    }
}

var styles = StyleSheet.create({
  narRow: {
    flex:1,
  },
  navBase: {
    width: 200,
    height: 50,
  },
  background: {
    backgroundColor: '#00a3da',
    color:'#fff'
  },
});