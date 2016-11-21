import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
export default class HeaderCommon extends Component{
  render() {
	return (
		 <View style={styles.title_view}>
		 <Text style={styles.title_text}>
			   我是头部
		 </Text>
		</View>
	);
  }
}

const styles = StyleSheet.create({
  title_view:{
	flexDirection:'row',
	height:50,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor:'#00a3da',
  },
  title_text:{
	color:'white',
	fontSize:20,
	textAlign:'center'
  },
});
module.export = HeaderCommon;
