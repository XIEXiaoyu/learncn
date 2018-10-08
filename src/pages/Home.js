import React from 'react';
import 
{ 
    Image,
    ImageBackground,
    StatusBar, 
    StyleSheet, 
    Text, 
    TextInput,
    TouchableOpacity,
    View, 
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Slogan from '../components/Slogan';
import Pencil from '../components/Pencil';
import Term from '../components/Term';
import LearnWhat from '../components/LearnWhat';
import Tab from '../components/Tab';

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

        let pencilsLeft = [
            {name: 'lesson1'},
            {name: 'lesson2'},
            {name: 'lesson3'},
            {name: 'lesson4'},
            {name: 'lesson5'},
        ];

        let pencilsRight = [
            {name: 'lesson6'},
            {name: 'lesson7'},
            {name: 'lesson8'},
            {name: 'lesson9'},
            {name: 'lesson10'}
        ];

        let pencilsLeftButtons = pencilsLeft.map(pencil => (<Pencil lesson={pencil.name} />));
        let pencilsRightButtons = pencilsRight.map(pencil => (<Pencil lesson={pencil.name} />));

        let terms = [
            {name: 'term1'},
            {name: 'term2'},
            {name: 'term3'},
            {name: 'term4'},
        ];

        let termsButtons = terms.map(term => (<Term term={term.name} />));

        let types = [
            {name: 'read'},
            {name: 'write'},
            {name: 'pinyin'},
        ];

        let typesButtons = types.map(type => (<LearnWhat type={type.name} />));

        return (
            <View style={styles.Container}>  

                <StatusBar hidden={true} />

                <View style={styles.Slogan}>
                    <Slogan/>
                </View>

                <View style={{flex:2,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                    {termsButtons}
                </View>

                <View style={{flex:12,flexDirection:'row'}}>
                    <Tab />
                </View>

                <View style={{flex:4,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    {typesButtons}
                </View>

                <View style={styles.Footer}>

                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('WriteStoke')}
                    >
                        <Text>Learn Stroke</Text>
                    </TouchableOpacity>
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