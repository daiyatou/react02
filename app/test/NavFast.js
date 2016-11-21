import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
export default class NavFast extends Component {
  render() {
	return (
		<ScrollView  ref={(scrollView) => { _scrollView = scrollView; }}>
  		<View style={styles.five_image_view}>
    		 <View style={styles.vertical_view}>
    			  <Image source={require('../images/home/icon-auction.png')} style={styles.navfast_img} />
    			  <Text style={styles.top_text}>
    				极鲜拍
    			  </Text>
    		 </View>
    		  <View style={styles.vertical_view}>
    			  <Image source={require('../images/home/icon-purchase.png')} style={styles.navfast_img}/>
    			  <Text style={styles.top_text}>
    				我要采购
    			  </Text>
    		 </View>
    		  <View style={styles.vertical_view}>
    			  <Image source={require('../images/home/icon-regular.png')} style={styles.navfast_img}/>
    			  <Text style={styles.top_text} >
    				定期购
    			  </Text>
    		 </View>
         <View style={styles.vertical_view}>
           <Image source={require('../images/home/icon-vip.png')} style={styles.navfast_img}/>
           <Text style={styles.top_text} >
           精英会员
           </Text>
        </View>
        <View style={styles.vertical_view}>
          <Image source={require('../images/home/icon-logistics.png')} style={styles.navfast_img}/>
          <Text style={styles.top_text} >
          物流/发票
          </Text>
       </View>
  		</View>
		</ScrollView>
	);
  }
}

const styles = StyleSheet.create({
  five_image_view:{
	paddingTop: 15,
  paddingBottom: 15,
	flexDirection:'row',
	justifyContent: 'space-around',
	alignItems: 'center',
	backgroundColor:'white',
  },
  vertical_view:{
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor:'white',
  },
  top_text:{
	marginTop:5,
	color:'#666666',
	fontSize:14,
	textAlign:'center'
  },
  navfast_img: {
    alignSelf:'center',
    width:45,
    height:45,
  },
});
module.export = NavFast;
