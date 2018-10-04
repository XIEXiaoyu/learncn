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

export default class LearnWhat extends React.Component {
    constructor(props){
        super(props);
    }

	render() {
        let type = this.props.type;

		return(
            <TouchableOpacity style={{flex:1}}>
                <ImageBackground
                    style={{resizeMode:'contain',flex:1,width:undefined,height:undefined,alignItems:'center',justifyContent:'center'}}
                    source={require('../images/orangeCircle.png')}>
                    <Text style={{color:'white',fontSize:16,fontWeight:'400'}}>{Strings.learnTo}</Text> 
                    <Text style={{color:'white',fontSize:16,fontWeight:'400'}}>{Strings[type]}</Text>
                </ImageBackground>
            </TouchableOpacity>
		);
	}
}