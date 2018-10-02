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

export default class Pencil extends React.Component {
    constructor(props){
        super(props);
    }

	render() {
        let lesson = this.props.lesson;

		return(
            <TouchableOpacity style={{flex:1,backgroundColor:'yellow'}}>
                <ImageBackground
                    style={{resizeMode:'contain',flex:1,width:undefined,height:undefined,alignItems:'center',justifyContent:'center'}}
                    source={require('./../images/pencil.jpeg')}>
                    <Text style={{color:'white',fontSize:22,fontWeight:'400'}}>{Strings[lesson]}</Text>
                </ImageBackground>
            </TouchableOpacity>
		);
	}
}