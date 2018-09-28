import React from 'react';
import 
{ 
    StyleSheet, 
    Text, 
    TextInput,
    TouchableOpacity,
    View, 
} from 'react-native';

export default class Form extends React.Component {
    constructor(props){
        super(props);
    }

	render(){
		return(
            <View style={styles.Container}>
            	<View style={styles.InputContainer}>
	            	<TextInput 
	                	style={styles.Inputbox}
	                	underlineColorAndroid={'transparent'}
	                    placeholder="Username"
	                    selectionColor="#595856"
	                    keyboardType="email-address"
	                />
	                <TextInput 
	                	style={styles.Inputbox}
	                	underlineColorAndroid={'transparent'}
	                    placeholder="Password"
	                    selectionColor="#595856"
	                    secureTextEntry={true}
	                />
            	</View>
            	<View style={styles.ButtonContainer}>
	                <TouchableOpacity style={styles.Button}>
	                    <Text style={styles.ButtonText}>Login</Text>
	                </TouchableOpacity>
            	</View>
            </View>
		);
	}
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    InputContainer: {
    	flex: 1,
    	width: '100%',
    	justifyContent: 'center',
    	alignItems: 'center',
    	marginTop: 15,
    },
    Inputbox: {
        height: '40%',
        width: '80%',
        fontSize: 20,
        paddingLeft: 4,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 15,
    },
    ButtonContainer: {
    	flex: 1,
    	width: '100%',
    	justifyContent: 'flex-end',
    	alignItems: 'center',
    },
    Button: {
        height: '50%',
        maxHeight: 60,
        width: '30%',
        backgroundColor: '#FFA500',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#BDBDBD',
        borderRadius: 5,
    },
    ButtonText: {
        fontSize: 20,
        fontWeight: '300',
        color: '#ffffff',
    },
});