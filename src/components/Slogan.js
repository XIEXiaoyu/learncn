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

export default class Slogan extends React.Component {
	render() {
		return(
	        <View style={styles.Slogan}>
	            <Text style={styles.SloganText}>{"Let's Learn Chinese!"}</Text>
	        </View>
		);
	}
}

const styles = StyleSheet.create({
    Slogan: {
        flex: 2,
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