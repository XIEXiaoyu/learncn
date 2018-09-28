import React from 'react';
import 
{ 
    Button,
    Image,
    Picker,
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

export default class ChildSetting extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.Container}>  

                <StatusBar hidden={true} />

                <View style={styles.Slogan}>
                    <Slogan/>
                </View>

                <View style={{flex:7,flexDirection:'row',backgroundColor:'yellow'}}>
                    <View style={{flex:2}}>
                        <Image
                            source={require('./../images/hello4.png')}
                            style={{width:'40%',height: '40%'}}
                        />
                        <Text>Adam</Text>
                    </View>
                    <View style={{flex:3}}>
                        <Text style={{flex:1}}>Learning Settings</Text>
                        <View style={{flex:2,flexDirection:'row'}}><Text>Hint</Text><Text>Button</Text></View>
                        <View style={{flex:2,flexDirection:'row'}}><Text>Hint</Text><Text>Button</Text></View>
                    </View>
                </View>
                <View style={{flex:4,backgroundColor:'green'}}>
                    <Text style={{flex:1}}>Currently Learning</Text>
                    <View style={{flext:4, flexDirection:'row'}}>
                        <Text>P1 Chinese</Text>
                        <Icon name='edit' size={25} color='orange'/>
                        <Icon name='file-edit' size={25} color='orange'/>
                    </View>
                </View>

                <View style={{flex:7,flexDirection:'row',backgroundColor:'red'}}>
                    <View style={{flex:1}}>
                        <Image
                            source={require('./../images/hello4.png')}
                            style={{width:'50%',height:'50%'}}
                        />
                    </View>
                    <View style={{flex:1}}>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Icon name='square' size={15} color='#33ccff'/>
                            <TouchableOpacity 
                                style={styles.LinkToWords}
                                onPress={()=>this.props.navigation.navigate('PinYinOnly')}
                                >
                                <Text style={styles.LinkText}>Able to PinYin Only</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Icon name='square' size={15} color='#ffcc33'/>
                            <TouchableOpacity style={styles.LinkToWords}>
                                <Text style={styles.LinkText}>Able to Read Only</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Icon name='square' size={15} color='#3333ff '/>
                            <TouchableOpacity style={styles.LinkToWords}>
                                <Text style={styles.LinkText}>Able to Write Only</Text>
                            </TouchableOpacity>                            
                        </View>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Icon name='square' size={15} color=' #33cc33'/>
                                <Text style={{color:'black'}}>Able to Read and Write</Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Icon name='square' size={15} color='#ff4000'/>
                                <Text style={{color:'black'}}>Unable to Read and Write</Text>
                        </View>
                    </View>
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
    LinkToWords: {

    },
    LinkText: {
        color: 'blue',
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