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

export default class Home extends React.Component {
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
            <View style={styles.Container}>  

                <StatusBar hidden={true} />

                <View style={styles.Slogan}>
                    <Slogan/>
                </View>

                <View style={styles.Language}>
                    <Text style={{fontSize: 20, fontWeight: '800', color: '#FFA500'}}>华文</Text>
                </View>

                <View style={styles.HelloImage}>
                    <Image
                        source={require('./../images/hello1.jpeg')}
                        style={{flex:1,width:undefined,height:undefined}}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.Form}>
                    <Form linkTo='Home'/>
                </View>

                <Image
                    source={require('./../images/hello4.png')}
                    style={styles.HappyImage}
                    resizeMode="contain"
                />

                <View style={styles.ForgetPassword}>
                    <Text
                        style={{color: '#ffa64d', fontWeight: '500', fontSize: 18 }}
                    >Forgotten Your Password?</Text>
                </View>

                <View style={styles.Or} >
                    <Text style={{color: 'gray' }}>OR</Text>
                </View>

                <View style={styles.JoinNow}>
                    <TouchableOpacity
                        style={styles.RegisterButton}
                        onPress={()=>this.props.navigation.navigate('Register')}
                    >
                        <Text style={styles.RegisterText}>Join Us Now!</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Footer}>
                    <Text style={{ color: '#c68c53', fontSize: 22, fontWeight: '500'}}>Take a Tour</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffffe6',
    },
    Slogan: {
        flex: 2,
        width: '100%',
    },
    Language:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: '5%',
    },
    HelloImage:{
        flex: 3,
        width: '100%',
    },
    Form: {
        flex: 6,
        width: '100%',
    },
    HappyImage: {
        flex: 4,
    },
    ForgetPassword:
    {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    Or:
    {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    JoinNow:
    {
        flex: 2,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
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
    Footer:
    {
        flex: 2,
        width: '100%', 
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#f2f2f2',    
    }
});