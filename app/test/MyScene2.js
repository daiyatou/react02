import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import FirstPageComponent from './MyScene1';

export default class SecondPageComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message:"",
        };
    }

    componentDidMount(){
        this.setState({
            message:this.props.message,
        });
    }

    _pressButton(){
        const { navigator } = this.props;
        if(this.props.getResult){
            this.props.getResult("This is from SecondPageComponent");
        }

        if(navigator){
            navigator.pop();
        }
    }

    render(){
        return (
            <View style={styles.narRow}>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text style={styles.navBase , styles.background}>{this.state.message}</Text>
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