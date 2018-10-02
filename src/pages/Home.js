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
import Slogan from '../components/Slogan';
import Pencil from '../components/Pencil';

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

                <View style={{flex:2,flexDirection:'row',backgroundColor:'green',justifyContent:'space-around',alignItems:'center'}}>
                    <TouchableOpacity style={{flex:1,backgroundColor:'gray',alignItems:'center'}}><Text>Term1</Text></TouchableOpacity>
                    <TouchableOpacity style={{flex:1,alignItems:'center'}}><Text>Term2</Text></TouchableOpacity>
                    <TouchableOpacity style={{flex:1,alignItems:'center'}}><Text>Term3</Text></TouchableOpacity>
                    <TouchableOpacity style={{flex:1,alignItems:'center'}}><Text>Term4</Text></TouchableOpacity>
                </View>

                <View style={{flex:12,flexDirection:'row'}}>
                    <View style={{flex:1,backgroundColor:'blue'}}>
                        <Pencil lesson='lesson1'/>
                        <Pencil lesson='lesson2'/>
                        <Pencil lesson='lesson3'/>
                        <Pencil lesson='lesson4'/>
                        <Pencil lesson='lesson5'/>
                    </View>
                    <View style={{flex:1,backgroundColor:'yellow'}}>
                        <Pencil lesson='lesson6'/>
                        <Pencil lesson='lesson7'/>
                        <Pencil lesson='lesson8'/>
                        <Pencil lesson='lesson9'/>
                        <Pencil lesson='lesson10'/>
                    </View>
                </View>

                <View style={{flex:4,flexDirection:'row'}}>
                    <View style={{flex:1}}><Text>Read</Text></View>
                    <View style={{flex:1}}><Text>write</Text></View>
                    <View style={{flex:1}}><Text>PinYin</Text></View>
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
    Footer:
    {
        flex: 2,
        width: '100%', 
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#f2f2f2',    
    }
});