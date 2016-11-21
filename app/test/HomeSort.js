'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Image, View,ScrollView,TouchableHighlight,} from 'react-native';
export default class HomeSort extends Component {

  render() {
    return (
      <TouchableHighlight underlayColor="red">
        <View style={styles.list}>
          <View style={styles.row}>
            <Image style={styles.thumb} source={require('../images/home/classifyImg1.png')} />
            <Text style={styles.text}>
              螯龙虾
            </Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={require('../images/home/classifyImg2.png')} />
            <Text style={styles.text}>
              冻龙虾
            </Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={require('../images/home/classifyImg3.png')} />
            <Text style={styles.text}>
              锦绣龙虾
            </Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={require('../images/home/classifyImg4.png')} />
            <Text style={styles.text}>
              冻虾
            </Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={require('../images/home/classifyImg5.png')} />
            <Text style={styles.text}>
              其他龙虾
            </Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={require('../images/home/classifyImg6.png')} />
            <Text style={styles.text}>
              棕蟹
            </Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={require('../images/home/classifyImg7.png')} />
            <Text style={styles.text}>
              珍宝蟹
            </Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={require('../images/home/classifyImg8.png')} />
            <Text style={styles.text}>
              冻蟹类
            </Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={require('../images/home/classifyImg9.png')} />
            <Text style={styles.text}>
              冻鱼类
            </Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={require('../images/home/classifyImg10.png')} />
            <Text style={styles.text}>
              冰鲜类
            </Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={require('../images/home/classifyImg11.png')} />
            <Text style={styles.text}>
              敖龙虾
            </Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={require('../images/home/classifyImg12.png')} />
            <Text style={styles.text}>
              敖龙虾
            </Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={require('../images/home/classifyImg13.png')} />
            <Text style={styles.text}>
              海参类
            </Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={require('../images/home/classifyImg14.png')} />
            <Text style={styles.text}>
              冻肉类
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

}
var styles =StyleSheet.create({
  list: {
    marginTop:5,
    marginBottom:5,
    flexDirection: 'row',   
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  row: {
    justifyContent: 'center',
    margin: 5,
    width: 70,
    height: 80,
    alignItems: 'center',
  },
  thumb: {
    width: 35,
    height: 35
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'normal',
    fontSize:13,
  },
});
module.export = HomeSort;
