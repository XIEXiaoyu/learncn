import React from 'react';
import 
{ 
    StatusBar, 
    StyleSheet, 
    Text, 
    TextInput,
    TouchableOpacity,
    View, 
} from 'react-native';
import Slogan from '../../src/components/Slogan';

export default class UpdateParentProfile extends React.Component {

    onLoginPressed(event) {
        fetch('http://169.254.79.6/xieAttendance/request.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),            
        })
        .then(response => {
            // we can do console.log(response.json) here, or it will give error. because that would be response.json().json() returned.
            return response.json()
        })
        .then(responseJson => {

            console.log(responseJson.id);

        })
    }

    render() {
        return (
            <View style={styles.MainContainer}>   
                <StatusBar hidden={true} />

                <View style={styles.Slogan}>
                    <Slogan/>
                </View>

                <View style={styles.Title}>
                    <Text
                        style={{color:'#00b8e6',fontSize:30,fontWeight:'700'}}
                    >Parent Profile</Text>
                </View>

                <TextInput 
                    style={styles.Inputbox}
                    underlineColorAndroid={'transparent'}
                    placeholder="Enter New Email"
                    selectionColor="#595856"
                    keyboardType="email-address"
                />

                <TextInput 
                    style={styles.Inputbox}
                    underlineColorAndroid={'transparent'}
                    placeholder="Enter New Phone Number"
                    selectionColor="#595856"
                />
 
                <View style={styles.ButtonContainer}>
                    <TouchableOpacity 
                        style={styles.Button}
                        onPress={()=>this.props.navigation.navigate('UpdateParentProfile')}
                        >
                        <Text style={styles.ButtonText}>Update</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.ButtonText}>Add Child</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Footer} >
                    <Text
                        style={{fontSize:22, fontWeight:'400'}}
                    >Verification Code</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffffe6',
    },
    Slogan:{
        flex: 2,
        width: '100%',
    },
    Title:
    {
        flex: 3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Email:
    {
        flex: 2,
    },
    Phone:
    {
        flex:2,
    },
    ButtonContainer:
    {
        flex: 9,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    Button: {
        height: '20%',
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
    Footer:
    {
        flex: 2,
        width: '100%', 
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#f2f2f2',    
    },
});