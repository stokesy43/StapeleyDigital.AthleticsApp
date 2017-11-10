import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home';
import AthleteList from '../screens/AthleteList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const OptionsStack = StackNavigator({
  Options: {
    screen: Options,
    navigationOptions: {
      title: 'Options',
    },
  },
  Themes: {
    screen: Themes,
    navigationOptions: {
      title: 'Themes',
    },
  },
});

export default TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />,
      header: () => null,
    },
  },
  AthleteList: {
    screen: AthleteList,
    navigationOptions: {
      tabBarlabel: 'Athletes',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Options: {
    screen: OptionsStack,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => <Icon name="settings" size={35} color={tintColor} />,
    },
  },
});
