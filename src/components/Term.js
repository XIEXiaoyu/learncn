import React from 'react';
import 
{ 
    Image,
    ImageBackground,
    StyleSheet, 
    Text, 
    TouchableOpacity,
    View, 
} from 'react-native';

import Strings from '../localization';

export default class Term extends React.Component {
    constructor(props){
        super(props);
    }

	render() {
        let term = this.props.term;

		return(
            <TouchableOpacity style={{flex:1,backgroundColor:'#ffb84d',alignItems:'center',justifyContent:'center',width:'100%',height:'100%'}}>
                <Text style={{color:'#ff9900',fontSize:22,fontWeight:'600'}}>{Strings[term]}</Text>
            </TouchableOpacity>
		);
	}
}