import React from 'react';
import { 
    AppRegistry,
    Text,
    View,
} from 'react-native';
import Routes from './src/Routes';
import Happydemo from './src/database/test';

export default class App extends React.Component {
    constructor() {
        super();
        let db = new Happydemo;
        db.loadDB();
    }

    render() {
        return(
            <Routes/>
        );
    }
}