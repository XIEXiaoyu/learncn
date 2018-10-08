import React from 'react';
import 
{ 
    StatusBar, 
    StyleSheet, 
    Text, 
    TextInput,
    TouchableOpacity,
    View, 
    WebView,
} from 'react-native';
import Slogan from '../../src/components/Slogan';
import Strings from '../localization';

export default class WriteStoke extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            language: "",
        };
    }

    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.Slogan}>
                    <Slogan/>
                </View>

                <View  style={{flex:4, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <View><Text>lesson1</Text></View>
                    <View><Text>question</Text></View>
                </View>

                <View style={{flex:10, flexDirection:'row',borderColor:'red',borderWidth:10}}>
                    <View style={{flex:3}}><Text>Left</Text></View>
                    <View style={{flex:16,borderWidth:2,borderColor:'black', width: '60%'}}>
                        <WebView
                            style={{}}
                            source={{uri: 'http://192.168.1.54/stroke/request.php'}}
                        />
                        <Text>ce</Text>
                    </View>
                    <View style={{flex:3}}><Text>Right</Text></View>
                </View>

                <View style={{flex:4, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <View><Text>喇叭</Text></View>
                    <View><Text>happy face</Text></View>
                    <View><Text>sad face</Text></View>
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
        width: '100%',
        borderWidth: 3,
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