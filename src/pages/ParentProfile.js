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
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ParentProfile extends React.Component {
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
            <View style={styles.Container}>   
                <StatusBar hidden={true} />

                <View style={styles.Slogan}>
                    <Slogan/>
                </View>
                

                <View style={styles.Tour}>
                    <Text
                        style={{color: 'green'}}
                    >View Tour</Text>
                </View>

                <View style={styles.Title}>
                    <Text
                        style={{color:'#00b8e6',fontSize:30,fontWeight:'700'}}
                    >Parent Profile</Text>
                </View>

                <View style={styles.Email}>
                    <Icon name="envelope" size={25} color="gray" />
                    <Text style={{color: 'orange', fontSize:18}}>Parent@email.com</Text>
                    <Icon name="pencil" size={22} color="orange" />
                </View>

                <View style={styles.Phone}>
                    <Icon name="phone" size={25} color="gray" />
                    <Text style={{color: 'orange', fontSize:18}}>Phone123456</Text>
                    <Icon name="pencil" size={22} color="orange" />
                </View>
 
                <View style={styles.ButtonContainer}>
                    <TouchableOpacity 
                        style={styles.Button}
                        onPress={()=>this.props.navigation.navigate('AddChild')}>
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
    Container:
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
    Tour:
    {
        flex: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: '10%',
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
        flexDirection: 'row',
    },
    Phone:
    {
        flex:2,
        flexDirection: 'row',
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