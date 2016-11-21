
/*ListView*/
// import React, {
//     Component
//   } from 'react';
//   import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     DrawerLayoutAndroid,
//     ListView,
//     PixelRatio,
//     ScrollView,
//   } from 'react-native';
//
//
//   class widthOneThird extends Component {
//
//     renderRow(rowDate) {
//         // console.log(rowDate);
//         return (
//
//             <TouchableOpacity
//                 activeOpacity={0.75}
//                 onPress={this._onPressFeedItem.bind(this, rowDate) }
//                 style={styles.center}
//                 >
//                 <View style = {styles.container}>
//                    <Image style = {styles.image_left} source = {{uri: rowDate.url}} />
//                    <View style = {styles.right_view}>
//                       <Text style = {styles.title}>{rowDate.name}</Text>
//                       <Text style = {styles.prompt_text}>{rowDate.item[0].symptoms}</Text>
//                    </View>
//                 </View>
//
//             </TouchableOpacity>
//         );
//     }
//
//
//     render() {
//
//       return (
//         <ScrollView>
//
//           <View style={styles.container, styles.bgBlue}>
//             <View style={[styles.item, styles.center,styles.flex]}>
//               <Text style={[styles.font]}>酒店</Text>
//             </View>
//             <View style={[styles.item,styles.lineLeftRight]}>
//                <View style={[styles.center,styles.flex,styles.lineCenter]}>
//                 <Text style={[styles.font]}>海外酒店</Text>
//                </View>
//                <View style={[styles.center,styles.flex]}>
//                   <Text style={[styles.font]}>优惠酒店</Text>
//                </View>
//             </View>
//             <View style={[styles.item]}>
//                <View style={[styles.center,styles.flex,styles.lineCenter]}>
//                   <Text style={[styles.center,styles.font]}>团购</Text>
//                </View>
//                <View style={[styles.center,styles.flex]}>
//                   <Text style={[styles.font]}>客栈，公寓</Text>
//                </View>
//             </View>
//           </View>
//
//
//           <View style={styles.container}>
//             <View style={[styles.item, styles.center,styles.flex]}>
//               <Text style={[styles.font]}>酒店</Text>
//             </View>
//             <View style={[styles.item,styles.lineLeftRight]}>
//                <View style={[styles.center,styles.flex,styles.lineCenter]}>
//                 <Text style={[styles.font]}>海外酒店</Text>
//                </View>
//                <View style={[styles.center,styles.flex]}>
//                   <Text style={[styles.font]}>优惠酒店</Text>
//                </View>
//             </View>
//             <View style={[styles.item]}>
//                <View style={[styles.center,styles.flex,styles.lineCenter]}>
//                   <Text style={[styles.center,styles.font]}>团购</Text>
//                </View>
//                <View style={[styles.center,styles.flex]}>
//                   <Text style={[styles.font]}>客栈，公寓</Text>
//                </View>
//             </View>
//           </View>
//
//
//             <View style={styles.list}>
//               <View style={styles.row3}>
//                 <Image style={styles.thumb} />
//                 <Text style={styles.text}>
//                   test
//                 </Text>
//               </View>
//               <View style={styles.row3}>
//                 <Image style={styles.thumb}/>
//                 <Text style={styles.text}>
//                   test
//                 </Text>
//               </View>
//               <View style={styles.row3}>
//                 <Image style={styles.thumb} />
//                 <Text style={styles.text}>
//                   test
//                 </Text>
//               </View>
//               <View style={styles.row3}>
//                 <Image style={styles.thumb} />
//                 <Text style={styles.text}>
//                   test
//                 </Text>
//               </View>
//               <View style={styles.row3}>
//                 <Image style={styles.thumb} />
//                 <Text style={styles.text}>
//                   test
//                 </Text>
//               </View>
//               <View style={styles.row3}>
//                 <Image style={styles.thumb} />
//                 <Text style={styles.text}>
//                   test
//                 </Text>
//               </View>
//             </View>
//
//
//
//             <View>
//               <View style={styles.row2}>
//                 <Image style={styles.thumb2} />
//                 <Text style={styles.tex2}>
//                   test
//                 </Text>
//               </View>
//               <View style={styles.row2}>
//                 <Image style={styles.thumb2} />
//                 <Text style={styles.tex2}>
//                   test
//                 </Text>
//               </View>
//               <View style={styles.row2}>
//                 <Image style={styles.thumb2} />
//                 <Text style={styles.tex2}>
//                   test
//                 </Text>
//               </View>
//               <View style={styles.row2}>
//                 <Image style={styles.thumb2} />
//                 <Text style={styles.tex2}>
//                   test
//                 </Text>
//               </View>
//               <View style={styles.row2}>
//                 <Image style={styles.thumb2} />
//                 <Text style={styles.tex2}>
//                   test
//                 </Text>
//               </View>
//               <View style={styles.row2}>
//                 <Image style={styles.thumb2} />
//                 <Text style={styles.tex2}>
//                   test
//                 </Text>
//               </View>
//             </View>
//
//
//        </ScrollView>
//       );
//
//
//     }
//   }
//
//
//   const styles = StyleSheet.create({
//     row2: {
//       flexDirection: 'row',
//       justifyContent: 'flex-start',
//       padding: 10,
//       backgroundColor: '#eee',
//     },
//     thumb2: {
//       width: 50,
//       height: 50,
//     },
//     text2: {
//       flex: 1,
//       marginTop: 5,
//       fontWeight: 'bold',
//     },
//
//
//     list: {
//     marginTop:5,
//     justifyContent: 'space-around',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   row3: {
//     justifyContent: 'center',
//     padding: 5,
//     margin: 3,
//     width: 85,
//     height: 85,
//     backgroundColor: '#00a3da',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: '#CCC',
//   },
//   thumb: {
//     width: 45,
//     height: 45,
//   },
//   text: {
//     flex: 1,
//     marginTop: 5,
//     fontWeight: 'bold',
//   },
//
//     flex: {
//       flex:1,
//     },
//     bgRed: {
//       backgroundColor: '#ff0067',
//     },
//     bgBlue: {
//       backgroundColor: '#00a3da',
//     },
//
//     container: {
//       marginRight: 5,
//       marginLeft: 5,
//       marginTop: 10,
//       flexDirection: 'row',
//       backgroundColor: '#ff0067',
//       borderColor:'red',
//       padding:2,
//       borderRadius: 5,
//       height:84,
//     },
//
//     lineLeftRight: {
//       borderLeftWidth: 1/PixelRatio.get(),
//       borderRightWidth: 1/PixelRatio.get(),
//       borderColor: '#fff',
//     },
//
//     font:{
//       fontSize:16,
//       color: 'white',
//       fontWeight: 'bold',
//     },
//
//     lineCenter:{
//       borderBottomWidth:1/PixelRatio.get(),
//       borderColor: '#fff'
//     },
//     item:{
//       flex: 1,
//       height: 80,
//
//     },
//
//     center: {
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//
//   });
//
//   AppRegistry.registerComponent('FansHome', () => widthOneThird);


  /*import React, { Component } from 'react';
  import {
      View,
      Text,
      Image,
  } from 'react-native';
  import TabNavigator from 'react-native-tab-navigator';
  import RecipesContainers from '../containers/RecipesContainers1';
  import AnswersContainers from '../containers/AnswersContainers1';
  import MoreContainer from '../containers/MoreContainer1';
  import CollectContainer from '../containers/CollectContainer1';
  const tabBarItems = [
      { title: '首页', icon: () => <Image style={{ width: 15, height: 15 }} source={require('../static/images/icon-home.png')}/>, component: RecipesContainers },
      { title: '客服', icon: () => <Image style={{ width: 15, height: 15 }} source={require('../static/images/icon-service.png')}/>, component: AnswersContainers },
      { title: '购物车', icon: () => <Image style={{ width: 15, height: 15 }} source={require('../static/images/icon-cart.png')}/>, component: CollectContainer },
      { title: '我的', icon: () => <Image style={{ width: 15, height: 15 }} source={require('../static/images/icon-personal.png')}/>, component: MoreContainer },
  ]

  export default class TarBarView extends Component {
      constructor(props) {
          super(props);
          this.state = {
              selectedTab: tabBarItems[0].title,
          };
      }
      render() {
          return (
              <TabNavigator tabBarStyle={{ height: 40 }}>
                  {
                      tabBarItems.map((controller, i) => {
                          let Component = controller.component;
                          return (
                              <TabNavigator.Item
                                  key= {i}
                                  selected={this.state.selectedTab === controller.title}
                                  title={controller.title}
                                  renderIcon={controller.icon}
                                  onPress={() => this.setState({ selectedTab: controller.title }) }>
                                  <Component navigator = {this.props.navigator} {...this.props}/>
                              </TabNavigator.Item>
                          )
                      })
                  }
              </TabNavigator >

          );
      }
  }*/