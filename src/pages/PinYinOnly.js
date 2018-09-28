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

export default class PinYinOnly extends React.Component {
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

                <View style={{flex:1,backgroundColor:'red'}}><Text>Reading Progress</Text></View>

                <View style={{flex:1,flexDirection:'row',backgroundColor:'green',justifyContent:'space-around',alignItems:'center'}}>
                    <TouchableOpacity style={{flex:1,backgroundColor:'gray',alignItems:'center'}}><Text>Term1</Text></TouchableOpacity>
                    <TouchableOpacity style={{flex:1,alignItems:'center'}}><Text>Term2</Text></TouchableOpacity>
                    <TouchableOpacity style={{flex:1,alignItems:'center'}}><Text>Term3</Text></TouchableOpacity>
                    <TouchableOpacity style={{flex:1,alignItems:'center'}}><Text>Term4</Text></TouchableOpacity>
                </View>

                <View style={{flext:1,backgroundColor:'gray'}}>
                    <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('Word')}
                        >
                        <Text>Single Word</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:13,backgroundColor:'red',justifyContent:'flex-start',width:"100%",borderWidth:2,borderColor:'gray',padding:'3%'}}>
                    <SectionList
                        sections={[
                            {
                                title: 'Lesson1', 
                                data: [
                                    '<Word/>'
                                ]
                            },
                            {
                                title: 'Lesson2', 
                                data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']
                            },
                            {
                                title: 'Lesson1', 
                                data: ['Devin']
                            },
                            {
                                title: 'Lesson2', 
                                data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']
                            },
                            {
                                title: 'Lesson1', 
                                data: ['Devin']
                            },
                            {
                                title: 'Lesson2', 
                                data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']
                            },
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                    />
                </View>

                <View style={{flex:2,flexDirection:'row',backgroundColor:'green',justifyContent:'space-around',alignItems:'center'}}>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',backgroundColor:'gray'}}>
                        <Icon name='square' size={15} color='purple'/>
                        <Text>Familiar</Text>
                    </View>
                   <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                        <Icon name='square' size={15} color='red'/>
                        <Text>Unfamiliar</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                        <Icon name='square' size={15} color='yellow'/>
                        <Text>New</Text>
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
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'yellow',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
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