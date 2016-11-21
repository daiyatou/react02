'use strict';
import React, {Component} from 'react';
import { Image, TextInput, View, Platform, StyleSheet, Text, Dimensions,} from 'react-native';
var myWidth = Dimensions.get('window').width;
export default class Footer extends Component {
    render() {
        return (
            <View style={styles.btm_choose}>
             <View style={[styles.btm_bg_gray, styles.btm_choose_btn ]}>
         			  <Image source={require('../images/tabs/icon-store.png')} style={styles.btm_choose_icon}/>
         		 </View>
             <View style={[styles.btm_bg_gray, styles.btm_choose_btn ]}>
               <Image source={require('../images/tabs/icon-cart.png')} style={styles.btm_choose_icon}/>
             </View>
             <View style={[styles.btm_bg_orange, styles.btm_choose_btn ]}>
              <Text style={styles.btm_choose_text}>
              加购物车
              </Text>
             </View>
             <View style={[styles.btm_bg_red, styles.btm_choose_btn ]}>
              <Text style={styles.btm_choose_text}>
              直接购买
              </Text>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    btm_choose: {
      flexDirection: 'row',   // 水平排布
      paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
      height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏
      justifyContent: 'space-around',
    	alignItems: 'center',
    },
    btm_bg_red: {
      backgroundColor: '#ff0000',
    },
    btm_bg_orange: {
      backgroundColor: '#ff8800',
    },
    btm_bg_gray: {
      backgroundColor: '#eeeeee',
    },
    btm_choose_btn: {
      width: myWidth*0.25,
      flex:1,
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop:15,
      paddingBottom:15,
    },
    btm_choose_icon: {
      width:25,
      height:25,
    },
    btm_choose_text:{
  	color:'#ffffff',
  	fontSize:16,
  	textAlign:'center'
    },

});
module.export = Footer;
