import React from 'react';
import 
{ 
    Image,
    StatusBar, 
    StyleSheet, 
    Text, 
    TextInput,
    TouchableOpacity,
    View, 
} from 'react-native';

import Strings from '../localization';

export default class Slogan extends React.Component {
	render() {
		return(
	        <View style={styles.Slogan}>
	            <Text style={styles.SloganText}>{Strings.slogan}</Text>
	        </View>
		);
	}
}

const styles = StyleSheet.create({
    Slogan: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    SloganText: {
        fontSize: 22,
        fontWeight: '900',
        color: '#ffa64d'
    }
})