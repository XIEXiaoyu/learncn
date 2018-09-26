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
            <View style={styles.MainContainer}>   
                <StatusBar hidden={true} />

                <Slogan />

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
                    <Text style={{color: 'orange', fontSize:18}}>Parent@email.com</Text>
                </View>

                <View style={styles.Phone}>
                    <Text style={{color: 'orange', fontSize:18}}>Phone</Text>
                </View>
 
                <View style={styles.Button}>
                    <View>
                        <TouchableOpacity>
                            <Text>Update</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity>
                            <Text>Add Child</Text>
                        </TouchableOpacity>
                    </View>
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
    },
    Phone:
    {
        flex:2,
    },
    Button:
    {
        flex: 9,
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