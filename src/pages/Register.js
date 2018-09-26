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
import Slogan from '../../src/components/Slogan';

export default class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            mobile: "",
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
            <View 
                style={styles.MainContainer}
            >   
                <StatusBar hidden={true} />
                
                <Slogan/>

                <View style={styles.Empty}></View>

                <View
                    style={styles.InputContainer}
                >
                    <TextInput underlineColorAndroid={'transparent'}
                        style={styles.UserInput}
                        placeholder="Email (as your username)"
                        selectionColor="#595856"
                        keyboardType="email-address"
                        onSubmitEditing={()=>this.password.focus()}
                        onChangeText={(text)=>{this.setState({username:text});}}
                        value={this.state.username}
                    />
                    <TextInput underlineColorAndroid={'transparent'}
                        style={styles.UserInput}
                        placeholder="Password"
                        secureTextEntry={true}
                        selectionColor="#595856"
                        ref={(input) => this.password = input}
                        onChangeText={(text)=>{ this.setState({password:text});}}
                    />
                    <TextInput underlineColorAndroid={'transparent'}
                        style={styles.UserInput}
                        placeholder="Mobile Number"
                        secureTextEntry={true}
                        selectionColor="#595856"
                        // ref={(input) => this.password = input}
                        onChangeText={(text)=>{ this.setState({mobile:text});}}
                    />
                </View>

                <View
                    style={styles.WelcomImage}
                >
                    <Image
                        source={require('./../images/hello4.png')}
                        style={{flex:1,width:undefined,height:undefined}}
                        resizeMode="contain"
                    />
                </View>

                <View
                    style={styles.Footer}
                >
                    <TouchableOpacity
                        style={styles.RegisterButton}
                        onPress={()=>this.props.navigation.navigate('Verification')}
                    >
                        <Text
                            style={styles.RegisterText}
                        >Join Us Now!</Text>
                    </TouchableOpacity>
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
    Empty:
    {
        flex: 4,
    },
    InputContainer:
    {
        flex: 7,
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
    WelcomImage:
    {
        flex: 7,
        width: '100%',
    },
    Footer:
    {
        flex: 2,
        width: '100%', 
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#f2f2f2',    
    },
    RegisterButton:
    {
        height: '60%',
        maxHeight: 60,
        width: '35%',
        backgroundColor: '#ffffe6',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 3,
    },
    RegisterText:
    {
        color: 'green',
        fontSize: 14,
        fontWeight: '300',
    },
});