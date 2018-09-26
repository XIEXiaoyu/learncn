import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './pages/Login';
import Register from './pages/Register';
import Verification from './pages/Verification';
import ParentProfile from './pages/ParentProfile';

const Routes = createStackNavigator(
	{
	  	Login: { screen: Login },
	  	Register: { screen: Register },
      Verification: { screen: Verification },
      ParentProfile: { screen: ParentProfile },
	},
  	{
    	initialRouteName: 'Login',
    	navigationOptions: {
    		header: null,
    	}
  	}
);

export default Routes;