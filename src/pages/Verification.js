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

export default class Verification extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            code: "",
        };
    }

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

                <Slogan/>

                <View style={styles.EmptyTop} >
                </View>

                <View style={styles.Information}>
                    <Text>A six-digit verification code will be</Text>
                    <Text>sent to your phone number.</Text>
                    <Text>If you did not receive it in 2 minutes</Text>
                    <Text>tap here to resend.</Text>
                </View>
                
                <View style={styles.InputContainer}>
                    <TextInput underlineColorAndroid={'transparent'}
                        style={styles.UserInput}
                        placeholder="Please enter your six-digit code"
                        selectionColor="#595856"
                        onChangeText={(text)=>{this.setState({code:text});}}
                        value={this.state.username}
                    />
                </View>

                <View style={styles.Confirm} >
                    <TouchableOpacity
                        style={styles.ConfirmButton}
                        onPress={()=>this.props.navigation.navigate('ParentProfile')}
                    >
                        <Text
                            style={styles.ConfirmText}
                        >Confirm</Text>
                    </TouchableOpacity>
                </View>


                    
                <View style={styles.EmptyBottom}>
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
    Information:
    {
        flex: 4,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    InputContainer:
    {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
        width: '100%',
    },
    UserInput:
    {
        height: 45,
        width: '80%',
        fontSize: 20,
        paddingLeft: 4,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 15,
    },
    Confirm:
    {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    ConfirmButton:
    {
        height: '50%',
        maxHeight: 60,
        width: '30%',
        backgroundColor: '#FFA500',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#BDBDBD',
        borderRadius: 4,
    },
    ConfirmText:
    {
        fontSize: 20,
        fontWeight: '300',
        color: '#ffffff',
    },
    EmptyBottom:
    {
        flex:6
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