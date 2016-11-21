import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
export default class ImageDemo extends Component {
  render() {
	return (
		<View style={styles.rectangle_view}>
		  <View style={{flexDirection:'row',alignItems: 'center'}}>
			  <Text style={styles.rectangle_text} >
				新闻资讯
			  </Text>
		  </View>
      <ScrollView  ref={(scrollView) => { _scrollView = scrollView; }}>
        <View style={{flexDirection:'row',alignItems: 'center'}}>
  			  <Text style={styles.rectangle_text} >
  				机鲜网用户体验公共于2016/12/13更新，请大家查看……
  			  </Text>
  		  </View>
        <View style={{flexDirection:'row',alignItems: 'center'}}>
  			  <Text style={styles.rectangle_text} >
  				机鲜网用户体验公共于2016/12/13更新，请大家查看……
  			  </Text>
  		  </View>
      </ScrollView>
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
	backgroundColor:'#27b5ee',
  },
   title_text:{
	color:'white',
	fontSize:20,
	textAlign:'center'
  },
  three_image_view:{
	paddingTop: 15,
	flexDirection:'row',
	justifyContent: 'space-around',
	alignItems: 'center',
	backgroundColor:'white',
  },
  vertical_view:{
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor:'white',
	paddingBottom:15,
  },
   top_text:{
	marginTop:5,
	color:'black',
	fontSize:16,
	textAlign:'center'
  },
  rectangle_view:{
	paddingTop:8,
	paddingBottom:8,
	paddingLeft:15,
	paddingRight:15,
	flexDirection:'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	backgroundColor:'white',
	borderBottomColor:'#dedfe0',
	borderBottomWidth:1,
  },
  rectangle_text:{
	color:'black',
	fontSize:16,
	textAlign:'center',
	paddingLeft:8,
  },
  button: {
	margin: 7,
	padding: 5,
	alignItems: 'center',
	backgroundColor: '#eaeaea',
	borderRadius: 3,
  },

});
module.export = ImageDemo;
