import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = createStackNavigator(
	{
	  	Login: { screen: Login },
	  	Register: { screen: Register },
	},
  	{
    	initialRouteName: 'Login',
    	navigationOptions: {
    		header: null,
    	}
  	}
);

export default Routes;