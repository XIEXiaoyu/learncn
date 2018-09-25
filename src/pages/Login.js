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

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
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
                <View>
                    <Text>{"Let's Learn Chinese!"}</Text>
                </View>
                <View>
                    <Text>华文</Text>
                </View>
                <View
                    style={styles.HelloImage}
                >
                    <Image
                        source={require('./../images/hello1.jpeg')}
                        style={{flex:1,width:undefined,height:undefined}}
                        resizeMode="contain"
                    />
                </View>
                <View
                    style={styles.InputContainer}
                >
                    <TextInput underlineColorAndroid={'transparent'}
                        style={styles.UserInput}
                        placeholder="Username"
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
                </View>

                <View
                    style={styles.Login}
                >
                    <TouchableOpacity
                        style={styles.LoginButton}
                        onPress={this.onLoginPressed.bind(this)}
                    >
                        <Text
                            style={styles.LoginText}
                        >Login</Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={styles.ForgetPassword}
                >
                    <Text>Forget your password</Text>
                </View>

                <View
                    style={styles.Or}
                >
                    <Text>or</Text>
                </View>

                <View
                    style={styles.JoinNow}
                >
                    <Text>Join now</Text>
                </View>

                <View
                    style={styles.Tour}
                >
                    <Text>take a tour</Text>
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
        backgroundColor: '#fff9c4',
    },
    Logo: 
    {
        flex: 1,
        width:'100%',
        padding: 10
    },
    HelloImage:
    {
        flex: 1,
        width: '100%',
    },
    InputContainer:
    {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
        width: '100%',
    },
    UserInput:
    {
        height: 50,
        width: '80%',
        fontSize: 22,
        paddingLeft: 4,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 15,
    },
    Login:
    {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    LoginButton:
    {
        height: '50%',
        maxHeight: 60,
        width: '75%',
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#BDBDBD',
        borderRadius: 5,
    },
    LoginText:
    {
        fontSize: 30,
        fontWeight: '500',
        color: '#3C3C3C',
    },
    ForgetPassword:
    {
        flex: 1,
        width: '100%',
        backgroundColor: 'red',
    },
    Or:
    {
        flex: 1,
        width: '100%',
        backgroundColor: 'green',
    },
    JoinNow:
    {
        flex: 1,
        width: '100%',
        backgroundColor: 'pink',
    },
    Tour:
    {
        flex: 1,
        width: '100%', 
        backgroundColor: 'orange',       
    }
});