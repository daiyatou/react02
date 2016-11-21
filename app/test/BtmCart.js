'use strict';
import React, {Component} from 'react';
import { Image, TextInput, View, Platform, StyleSheet, Text, } from 'react-native';

export default class BtmCart extends Component {
    render() {
        return (
            <View style={styles.cart_choose}>
             <View style={ styles.cart_choose_row }>
              <Text style={[styles.cart_total, styles.text_black]}>
              合计：
              </Text>
              <Text style={[styles.cart_total, styles.text_red]}>
              ￥25555.56
              </Text>
             </View>
             <View style={[styles.btm_bg_blue, styles.cart_to_pay ]}>
              <Text style={[styles.cart_total, styles.text_white]}>
              去结算(1)
              </Text>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    cart_choose: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    	alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    btm_bg_blue: {
      backgroundColor: '#0463de',
    },
    cart_choose_row: {
      flex:1,
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      paddingLeft:10,
    },
    text_black: {
      color:'#333333',
    },
    text_red: {
      color:'#ff6a7d',
    },
    text_white: {
      color:'#ffffff',
    },
    cart_to_pay: {
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop:10,
      paddingBottom:10,
      width:100,
    },
    cart_total:{
  	fontSize:16,
  	textAlign:'center',
    },

});
module.export = BtmCart;
