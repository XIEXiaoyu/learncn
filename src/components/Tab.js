import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.27

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default TabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
});