import React from 'react';
import 
{ 
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
import ModalDropdown from 'react-native-modal-dropdown';

export default class Example extends React.Component {
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

                <View style={styles.Profile}>
                    <View style={styles.Left}>
                        <Text style={{flex:1, color:'blue',fontSize:22,fontWeight:'400', backgroundColor:'pink'}}>child profile</Text>
                        <Image
                            source={require('./../images/hello2.jpeg')}
                            style={{flex:2,width:'20%',height:'20%',backgroundColor:'green'}}
                            resizeMode="contain"
                        />
                        <TextInput
                            style={{flex:1, height: '40%',width: '80%',fontSize: 14,paddingLeft: 4,borderColor: 'gray',borderWidth: 1,backgroundColor: 'red'}}
                            placeholder="Pleae Enter Name"
                        />
                    </View>
                    <View style={styles.Right}>
                        <Image
                            source={require('./../images/hello4.png')}
                            style={{width:'70%', height: '70%'}}
                            resizeMode="contain"
                        />
                        <Text style={{color:'orange',fontsize:12}}>Tap to Upload</Text>
                        <Text style={{color:'orange',fontsize:12}}>Profile Picture</Text>
                    </View>
                </View>

                <View style={styles.WordSelect}>
                    <View style={styles.TitleToLearn}>
                        <Text>Words to Learn</Text>
                    </View>
                    <View style={styles.DropDownWrapper}>
                        <View style={{flex:1,backgroundColor:'red'}}>
                            <ModalDropdown 
                                defaultValue={'N2'}
                                options={['K1','K2','N1']}
                                dropdownStyle={{width:'50%'}}
                                style={{flex:1,width:'50%',backgroundColor:'black'}}
                                textStyle={{fontsize:20,color:'white'}}/>
                        </View>
                        <View style={{flex:1,backgroundColor:'green'}}>
                            <ModalDropdown 
                                defaultValue={'Chinese'}
                                options={['Chinese','Higer Chinese']}
                                style={{flex:1,color:'red',width:'100%'}}
                                textStyle={{fontsize:14,color:'black'}}/>
                        </View>
                    </View>
                    <View style={styles.Content}>
                        <TextInput
                            style={{flex:1,width:'100%',height:'100%',borderColor:'gray',borderWidth:2}}
                        />
                    </View>
                </View>

                <View style={styles.Buttons}>
                    <TouchableOpacity
                        style={{
                            height: '50%',
                            maxHeight: 60,width: '30%',
                            backgroundColor: '#FFA500',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: '#BDBDBD',
                            borderRadius: 5}}
                        onPress={()=>this.props.navigation.navigate('Example')}
                    >
                        <Text
                            style={{fontSize: 20,fontWeight: '300',color: '#ffffff',}}
                        >Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: '50%',
                            maxHeight: 60,width: '30%',
                            backgroundColor: '#FFA500',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: '#BDBDBD',
                            borderRadius: 5}}
                    >
                        <Text
                            style={{fontSize: 20,fontWeight: '300',color: '#ffffff',}}
                        >OK</Text>
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
    Profile: {
        flex:6,
        width: '100%',
        flexDirection: 'row',
        paddingVertical: '5%',
        backgroundColor: 'gray',
    },
    Left: {
        flex: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e09f'
    },
    Right: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#afe09f',     
    }, 
    WordSelect: {
        flex: 12,
        width: '100%',
        backgroundColor: '#9fafe0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TitleToLearn: {
        flex: 1,
        backgroundColor: '#e09fbf',
        color: 'blue',
        fontSize: 30,
        fontWeight: '400',
        justifyContent:'center',
    },
    DropDownWrapper: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#9fd0e0',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    Content: {
        flex: 3,
        backgroundColor: '#cc33ff',
        width: '100%',
        padding: '5%',
    },
    Buttons: {
        flex: 6,
        flexDirection: 'row',
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