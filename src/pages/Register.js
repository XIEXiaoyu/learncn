import React from 'react';
import 
{ 
    AppRegistry, 
    Image,
    StatusBar, 
    StyleSheet, 
    Text, 
    TextInput,
    TouchableOpacity,
    View, 
} from 'react-native';

export default class Register extends React.Component {
    render() {
        return (
            <View 
                style={styles.MainContainer}
            >   
                <StatusBar hidden={true} />
                <View
                    style={styles.Logo}
                >
                    <Image
                        source={require('./../images/Commapp_Logo.png')}
                        style={{flex:3,width:undefined,height:undefined}}
                        resizeMode="contain"
                    />
                    <Text style={{flex: 1,textAlign: 'right', fontSize:28}}>Attendance</Text> 
                </View>
                <View
                    style={styles.InputContainer}
                >
                    <Text
                        style={styles.MainText}
                    >Xie Jun</Text>
                    <TextInput underlineColorAndroid={'transparent'}
                        style={styles.UserInput}
                        placeholder="Username"
                        selectionColor="#595856"
                        keyboardType="email-address"
                        onSubmitEditing={()=>this.password.focus()}
                    />
                    <Text
                        style={styles.MainText}
                    >
                    Password
                    </Text>
                    <TextInput underlineColorAndroid={'transparent'}
                        style={styles.UserInput}
                        secureTextEntry={true}
                        selectionColor="#595856"
                        ref={(input) => this.password = input}
                    />
                </View>

                <View
                    style={styles.Login}
                >
                    <TouchableOpacity
                        style={styles.LoginButton}
                    >
                        <Text
                            style={styles.LoginText}
                        >Login</Text>
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
        backgroundColor: '#fff9c4',
    },
    Logo: 
    {
        flex: 1,
        width:'100%',
        padding: 10
    },
    InputContainer:
    {
        flex: 3,
        justifyContent: 'flex-start',
        paddingTop: 20
    },
    MainText:
    {
        width: 300,
        fontSize: 22,
        fontWeight: '400',
        color: '#595856',
        textAlign: 'left',
        textAlignVertical: 'bottom',
    },
    UserInput:
    {
        height: 50,
        width: 300,
        fontSize: 22,
        paddingLeft: 4,
        backgroundColor: '#EEEEEE',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
    },
    Login:
    {
        flex: 1,
        justifyContent: 'flex-start',
    },
    LoginButton:
    {
        height: 55,
        width: 250,
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
    }
});