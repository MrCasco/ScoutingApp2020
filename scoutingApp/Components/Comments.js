import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image}from 'react-native';
import tecbot from './tecbotletras.png';
import propTypes from 'prop-types';

export default class Comments extends Component {
    constructor(props){
        super(props);
        this.state={
          team : '',
          match : '',
          comment1:'',
          comment2:'',
          comment3:'',
          comment4:'',
          comment5:'',
          comment6:'',
          comment7:'',
          comment8:'',
          comment9:'',
          comment1S:0,
          comment2S:0,
          comment3S:0,
          comment4S:0,
          comment5S:0,
          comment6S:0,
          comment7S:0,
          comment8S:0,
          comment9S:0,
          comment1C:'lightblue',
          comment2C:'lightblue',
          comment3C:'lightblue',
          comment4C:'lightblue',
          comment5C:'lightblue',
          comment6C:'lightblue',
          comment7C:'lightblue',
          comment8C:'lightblue',
          comment9C:'lightblue',
        }
        }

        onComment1 = () => {
              if(this.state.comment1S === 1){
                  this.setState({comment1S:0});
                  this.setState({comment1C:'#2d7ac2'});
                  this.setState({comment1:'Se desconectó'});
                }else{
                    this.setState({comment1S:1});
                    this.setState({comment1C:'lightblue'});
                    this.setState({comment1:''});
                }
          }
        onComment2 = () => {
            if(this.state.comment2S === 1){
                this.setState({comment2S:0});
                this.setState({comment2C:'#2d7ac2'});
                this.setState({comment2:'No se presentó'});
              }else{
                  this.setState({comment2S:1});
                  this.setState({comment2C:'lightblue'});
                  this.setState({comment2:''});
              }
        }
        onComment3 = () => {
            if(this.state.comment3S === 1){
                this.setState({comment3S:0});
                this.setState({comment3C:'#2d7ac2'});
                this.setState({comment3:'Ayudó a escalar a otro robot'});
              }else{
                  this.setState({comment3S:1});
                  this.setState({comment3C:'lightblue'});
                  this.setState({comment3:''});
              }
        }
        onComment4 = () => {
            if(this.state.comment4S === 1){
                this.setState({comment4S:0});
                this.setState({comment4C:'#2d7ac2'});
                this.setState({comment4:'Se cayó intentando escalar'});
              }else{
                  this.setState({comment4S:1});
                  this.setState({comment4C:'lightblue'});
                  this.setState({comment4:''});
              }
        }
        onComment5 = () => {
            if(this.state.comment5S === 1){
                this.setState({comment5S:0});
                this.setState({comment5C:'#2d7ac2'});
                this.setState({comment5:'No se movió'});
              }else{
                  this.setState({comment5S:1});
                  this.setState({comment5C:'lightblue'});
                  this.setState({comment5:''});
              }
        }
        onComment6 = () => {
            if(this.state.comment6S === 1){
                this.setState({comment6S:0});
                this.setState({comment6C:'#2d7ac2'});
                this.setState({comment6:'Se le cayó parte del robot'});
              }else{
                  this.setState({comment6S:1});
                  this.setState({comment6C:'lightblue'});
                  this.setState({comment6:''});
              }
        }
        onComment7 = () => {
            if(this.state.comment7S === 1){
                this.setState({comment7S:0});
                this.setState({comment7C:'#2d7ac2'});
                this.setState({comment7:'Se cayó durante match'});
              }else{
                  this.setState({comment7S:1});
                  this.setState({comment7C:'lightblue'});
                  this.setState({comment7:''});
              }
        }
        onComment8 = () => {
            if(this.state.comment8S === 1){
                this.setState({comment8S:0});
                this.setState({comment8C:'#2d7ac2'});
                this.setState({comment8:'comment'});
              }else{
                  this.setState({comment8S:1});
                  this.setState({comment8C:'lightblue'});
                  this.setState({comment8:''});
              }
        }
        onComment9 = () => {
            if(this.state.comment9S === 1){
                this.setState({comment9S:0});
                this.setState({comment9C:'#2d7ac2'});
                this.setState({comment9:'comment2'});
              }else{
                  this.setState({comment9S:1});
                  this.setState({comment9C:'lightblue'});
                  this.setState({comment9:''});
              }
        }

    render() {
        const {submit} = this.props
        const {team} = this.state
        const {match} = this.state
        const {period} = this.state
        const {comment1} = this.state
        const {comment2} = this.state
        const {comment3} = this.state
        const {comment4} = this.state
        const {comment5} = this.state
        const {comment6} = this.state
        const {comment7} = this.state
        const {comment8} = this.state
        const {comment9} = this.state

        return (
            <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
            <View style={styles.body}>
                <View style ={styles.teamInfo}>
                        <View style ={styles.teamNumberContainer}>
                            <Text style = {styles.Text}>Team: {this.props.team}</Text>
                        </View>
                        <View style ={styles.teamNumberContainer}>
                            <Text style = {styles.Text}>Match: {this.props.match}</Text>
                        </View>
                </View>
                <TouchableOpacity style = {[{backgroundColor: this.state.comment1C},styles.start]}
                                onPress={this.onComment1} underlayColor='#2d7ac2'  >
                    <Text style={styles.TextButton}>Se desconectó</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[{backgroundColor: this.state.comment2C},styles.start]}
                                onPress={this.onComment2} underlayColor='#2d7ac2'     >
                    <Text style={styles.TextButton}>No se presentó</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[{backgroundColor: this.state.comment3C},styles.start]}
                                onPress={this.onComment3} underlayColor='#2d7ac2'     >
                    <Text style={styles.TextButton}>Ayudó a escalar a otro robot</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[{backgroundColor: this.state.comment4C},styles.start]}
                                onPress={this.onComment4} underlayColor='#2d7ac2'    >
                    <Text style={styles.TextButton}>Se cayó intentando escalar</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[{backgroundColor: this.state.comment5C},styles.start]}
                                onPress={this.onComment5} underlayColor='#2d7ac2'    >
                    <Text style={styles.TextButton}>No se movió</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[{backgroundColor: this.state.comment6C},styles.start]}
                                onPress={this.onComment6} underlayColor='#2d7ac2'     >
                    <Text style={styles.TextButton}>Se le cayó parte del robot</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[{backgroundColor: this.state.comment7C},styles.start]}
                                onPress={this.onComment7} underlayColor='#2d7ac2'    >
                    <Text style={styles.TextButton}>Se cayó durante match</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[{backgroundColor: this.state.comment8C},styles.start]}
                                onPress={this.onComment8} underlayColor='#2d7ac2'     >
                    <Text style={styles.TextButton}>comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[{backgroundColor: this.state.comment9C},styles.start]}
                                onPress={this.onComment9} underlayColor='#2d7ac2'  >
                    <Text style={styles.TextButton}>comment2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.finish} onPress={() => submit('check',comment1,comment2,comment3,
                comment4,comment5,comment6,comment7,comment8,comment9)}  >
                    <Text style={styles.TextButtonF}>Submit</Text>
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
        height:320,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius:6,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        borderWidth: 1.3,
        borderRadius: 20,
        marginTop: 25,
    },
    teamInfo:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
    },
    teamNumberContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 3,
    },
    matchInfo:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 15,
    },
    Text:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize: 18
    },
    TextButton:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize: 10,
        color: '#000000'
    },
    TextButtonF:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize: 10,
        color: '#ffffff'
    },
    start:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        width: 200,
       height: 20,
    },
    finish:{
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius:6,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        borderWidth: 1.3,
        borderRadius: 20,
        marginTop: 7,
        backgroundColor: '#5c5c61',
        width: 80,
       height: 20,
    },
  });

Comments.propTypes = {
    submit : propTypes.func.isRequired,
}
