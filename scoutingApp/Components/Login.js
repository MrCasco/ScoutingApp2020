import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image} from 'react-native';
import tecbot from './tecbotletras.png';
import propTypes from 'prop-types';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
          team : '',
          match : '',
          period : 'Auto'
        }
        }

    render() {
        const {handleLogIn} = this.props
        const {team} = this.state
        const {match} = this.state
        const {period} = this.state

        return (
            <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
            <View style={styles.body}>
            <Image source={tecbot} style = {{width: 200, height: 70, marginBottom: 10,}}></Image>
            <Text style={styles.Text}>Team:</Text>
            <TextInput placeholder = '0000'  maxLength = {4}
            keyboardType = 'numeric' style={styles.TextInput}
            value = {team}
            onChangeText ={(team)=>{this.setState({team})}}/>
            <Text style={styles.Text}>Match:</Text>{}
            <TextInput placeholder = '000'  maxLength = {3}
            keyboardType = 'numeric' style={styles.TextInput}
            value = {match}
            onChangeText = {(match)=>{this.setState({match})}}/>
            <TouchableOpacity style={styles.start} onPress={() => handleLogIn(team, match, period)}  >
            <Text style={styles.TextButton}>Start</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex :1,
        backgroundColor: '#060f92',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        backgroundColor: '#ffffff',
        width:600,
        height:280,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius:6,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        borderWidth: 1.3,
        borderRadius: 20,
        marginTop: 25,
    },
    Text:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize: 18
    },
    TextButton:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize: 18,
        color: '#ffffff'
    },
    TextInput:{
     width: 400,
     height: 25,
     textAlign: 'center',
     borderWidth: 1,
     borderRadius: 20,
     fontSize: 20,
     marginBottom: 10,
     marginTop: 10,
    },
    start:{
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius:6,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        borderWidth: 1.3,
        borderRadius: 20,
        marginTop: 10,
        backgroundColor: '#5c5c61',
        width: 200,
       height: 35,
    },
    image:{
        width: 200,
       height: 35,
    }
  });

Login.propTypes = {
    handleLogIn : propTypes.func.isRequired,
}
