import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './pages/Login';
import Register from './pages/Register';
import VerificationCode from './pages/VerificationCode';
import ParentProfile from './pages/ParentProfile';
import AddChild from './pages/AddChild';
import Example from './pages/Example';
import ChildSetting from './pages/ChildSetting';
import PinYinOnly from './pages/PinYinOnly';
import Word from './pages/Word';
import Home from './pages/Home';
import WriteStoke from './pages/WriteStoke';

const Routes = createStackNavigator(
	{
	  	Login: { screen: Login },
	  	Register: { screen: Register },
        VerificationCode: { screen: VerificationCode },
        ParentProfile: { screen: ParentProfile },
        AddChild: {screen: AddChild},
        ChildSetting: {screen: ChildSetting},
        PinYinOnly: {screen: PinYinOnly},
        Word: {screen: Word},
        Home: {screen: Home},
        WriteStoke: {screen: WriteStoke},
	},
  	{
    	initialRouteName: 'Login',
    	navigationOptions: {
    		header: null,
    	}
  	}
);

export default Routes;