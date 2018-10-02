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
import Form from '../../src/components/Form';
import Strings from '../localization';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            language: "",
        };
    }

    setLanguage(){
        let phoneLanguage = Strings.getLanguage();

        if(phoneLanguage != 'en'){
            Strings.setLanguage('zh-CN');
            this.setState({language: 'zh-CN'}); 
        } else{
            Strings.setLanguage('en');
            this.setState({language: 'en'});
        }
    }

    changeLanguage(){
        if(this.state.language == 'zh-CN'){
            Strings.setLanguage('en');
            this.setState({language: 'en'});
        } else{
            Strings.setLanguage('zh-CN');
            this.setState({language: 'zh-CN'});          
        }
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

    componentWillMount() {
        this.setLanguage();
    }

    render() {
        return (
            <View style={styles.Container}>  

                <StatusBar hidden={true} />

                <View style={styles.Slogan}>
                    <Slogan/>
                </View>

                <TouchableOpacity 
                    style={styles.Language}
                    onPress={()=>this.changeLanguage()}
                >
                    <Text style={{fontSize: 20, fontWeight: '800', color: '#FFA500'}}>{Strings.preferredLanguage}</Text>
                </TouchableOpacity>

                <View style={styles.HelloImage}>
                    <Image
                        source={require('./../images/hello1.jpeg')}
                        style={{flex:1,width:undefined,height:undefined}}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.Form}>
                    <Form onPress={()=>this.props.navigation.navigate("Home")} />
                </View>

                <Image
                    source={require('./../images/hello4.png')}
                    style={styles.HappyImage}
                    resizeMode="contain"
                />

                <View style={styles.ForgetPassword}>
                    <Text
                        style={{color: '#ffa64d', fontWeight: '500', fontSize: 18 }}
                    >{Strings.forgetPassword}</Text>
                </View>

                <View style={styles.Or} >
                    <Text style={{color: 'gray' }}>{Strings.or}</Text>
                </View>

                <View style={styles.JoinNow}>
                    <TouchableOpacity
                        style={styles.RegisterButton}
                        onPress={()=>this.props.navigation.navigate('Register')}
                    >
                        <Text style={styles.RegisterText}>{Strings.joinNow}</Text>
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
        flex: 5,
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