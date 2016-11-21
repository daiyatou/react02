import React, { Component } from 'react';
import { AppRegistry, View, Image, Dimensions, StyleSheet} from 'react-native';
import ViewPager from 'react-native-viewpager';

var deviceWidth = Dimensions.get('window').width;

const BANNER_IMGS = [
    require('../images/banner/1.jpg'),
    require('../images/banner/2.jpg'),
    require('../images/banner/3.jpg'),
    require('../images/banner/4.jpg')
];

export default class Banner extends React.Component {

    constructor(props) {
        super(props);
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        // 实际的DataSources存放在state中
        this.state = {
            dataSource: dataSource.cloneWithPages(BANNER_IMGS)
        }
    }

    _renderPage(data, pageID) {
        return (
            <Image
                source={data}
                style={styles.banner_img}/>
        );
    }

    /**
    dataSource: 提供页面数据,
    renderPage: 用于渲染页面视图,
    autoPlay: 为true 将自动播放,
    isLoop: 为true支持循环播放,
    locked: 为true禁止触摸滚动,
    onChangePage: 页面变化的回调,
    renderPageIndicator: 渲染自定义的 ViewPager indicator.
    */
    render() {
        return (

            <View style={styles.homeBanner}>
                  <ViewPager
                    style={{height:130}}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    homeBanner: {
        flex: 1,
        height:160,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    banner_img: {
        width: deviceWidth,//设备宽(只是一种实现，此处多余)
        flex: 1,
        height: 160,
        resizeMode: 'stretch'
    },
});

module.export = Banner;
