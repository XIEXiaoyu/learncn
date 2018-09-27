import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './pages/Login';
import Register from './pages/Register';
import VerificationCode from './pages/VerificationCode';
import ParentProfile from './pages/ParentProfile';
import UpdateParentProfile from './pages/UpdateParentProfile';
import AddChild from './pages/AddChild';

const Routes = createStackNavigator(
	{
	  	Login: { screen: Login },
	  	Register: { screen: Register },
      VerificationCode: { screen: VerificationCode },
      ParentProfile: { screen: ParentProfile },
      UpdateParentProfile: {screen: UpdateParentProfile},
      AddChild: {screen: AddChild},
	},
  	{
    	initialRouteName: 'Login',
    	navigationOptions: {
    		header: null,
    	}
  	}
);

export default Routes;