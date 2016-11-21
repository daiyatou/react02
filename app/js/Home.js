import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Image, View,ScrollView,} from 'react-native';
import HeaderSearch from './HeaderSearch';
import Banner from './Banner';
import NavFast from './NavFast';
import HomeSort from './HomeSort';
import BtmCart from './BtmCart';
import Footer from './Footer';
import DataTest1 from './DataTest1';
//import DataTest2 from './js/DataTest2';
class myHome extends React.Component {
  render() {
    return (
      <View>
       <HeaderSearch/>
       <ScrollView style={styles.scroll_body}  ref={(scrollView) => { _scrollView = scrollView; }}>
          <Banner />
          <NavFast />
          <Text style={styles.sort_title}>
            我要采购
          </Text>
          <HomeSort />
          <DataTest1 />
        </ScrollView>
        <BtmCart />
        <Footer />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  scroll_body: {
    backgroundColor: '#f5f5f5',
  },
  sort_title: {
	marginTop:5,
	color:'#666666',
	fontSize:14,
	textAlign:'center'
  },
});
module.export = myHome ;
