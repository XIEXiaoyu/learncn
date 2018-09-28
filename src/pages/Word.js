import React from 'react';
import 
{ 
    Button,
    Image,
    Picker,
    SectionList,
    StatusBar, 
    StyleSheet, 
    Text, 
    TextInput,
    TouchableOpacity,
    View, 
} from 'react-native';
import Slogan from '../../src/components/Slogan';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalDropdown from 'react-native-modal-dropdown';

export default class Word extends React.Component {
    constructor(props){
        super(props);
    }

    _onPressBulb(){

    }

    render() {
        return (
            <View style={styles.Container}>  

                <StatusBar hidden={true} />

                <View style={styles.Slogan}>
                    <Slogan/>
                </View>

                <View style={{flex:4,flexDirection:'row',width:'100%'}}>
                    <View style={{flex:3}}>
                        <TouchableOpacity>
                            <Text>Lesson 1</Text>
                        </TouchableOpacity> 
                    </View>
                    <View style={{flex:5}}>
                        <Image
                            source={require('./../images/a.jpeg')}
                        />
                    </View>
                    <View style={{flex:2}}>
                        <TouchableOpacity
                        >
                            <Image 
                                source={require('./../images/a.jpeg')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:8}}>
                </View>
                <View style={{flex:4}}>

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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
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