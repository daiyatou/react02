import Icon from 'react-native-vector-icons/Ionicons';

propTypes = {
  ...
  tabNames: React.PropTypes.array, // 保存Tab名称
  tabIconNames: React.PropTypes.array, // 保存Tab图标
}
render() {
  return (
    <ScrollableTabView
      renderTabBar={() => <DefaultTabBar/>}>
      <Text tabLabel='Tab1'/>
      <Text tabLabel='Tab2'/>
      <Text tabLabel='Tab3'/>
      <Text tabLabel='Tab4'/>
      <Text tabLabel='Tab5'/>
      <Text tabLabel='Tab6'/>
    </ScrollableTabView>
  );
}

render() {
  return (
    <ScrollableTabView
      renderTabBar={() => <DefaultTabBar />}
      tabBarUnderlineColor='#FF0000'
      tabBarBackgroundColor='#FFFFFF'
      tabBarActiveTextColor='#9B30FF'
      tabBarInactiveTextColor='#7A67EE'
      tabBarTextStyle={{fontSize: 18}}
    >
    ...
    </ScrollableTabView>
  );
}

renderTabOption(tab, i) {
  const color = this.props.activeTab == i? "#6B8E23" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色
  return (
    <TouchableOpacity onPress={()=>this.props.goToPage(i)} style={styles.tab}>
        <View style={styles.tabItem}>
            <Icon
                name={this.props.tabIconNames[i]}  // 图标
                size={30}
                color={color}/>
            <Text style={{color: color}}>
                {this.props.tabNames[i]}
            </Text>
        </View>
    </TouchableOpacity>
   );
}
