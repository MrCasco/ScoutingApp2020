import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,Image}from 'react-native';
import tecbot from './tecbotletras.png';
import propTypes from 'prop-types';

export default class States extends Component {

    render() {
    return (
            <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
            <View>
            <Text>Team Number: {this.props.team}</Text>
            <Text>Match Number: {this.props.match}</Text>
            <Text>Inner Auto: {this.props.pcAuto.inner}</Text>
            <Text>Outer Auto: {this.props.pcAuto.outer}</Text>
            <Text>Lower Auto: {this.props.pcAuto.lower}</Text>
            <Text>Drop Auto: {this.props.pcAuto.drop}</Text>
            <Text>Move in Auto: {this.props.moveinauto}</Text>
            <Text>Feeding in Auto: {this.props.feedingAuto}</Text>
            <Text>Spinig Control: {this.props.spining}</Text>
            <Text>Color Control: {this.props.color}</Text>
            <Text>Inner: {this.props.pcTeleop.inner}</Text>
            <Text>Outer: {this.props.pcTeleop.outer}</Text>
            <Text>Lower: {this.props.pcTeleop.lower}</Text>
            <Text>Drop: {this.props.pcTeleop.drop}</Text>
            <Text>Defense: {this.props.defense}</Text>
            <Text>Feeding in Teleop: {this.props.feedingTeleop}</Text>
            <Text>Climb Position: {this.props.switchposition}</Text>
            <Text>No climb: {this.props.noClimb}</Text>
            <Text>Park: {this.props.park}</Text>
            <Text>Level: {this.props.level}</Text>
            <Text>Pc in end: {this.props.pcend}</Text>
            <Text>Pc drop in end: {this.props.pcdropend}</Text>
            <Text>Hour: {this.props.hour}</Text>
            <Text>comment1: {this.props.comments.comment1}</Text>
            <Text>comment2: {this.props.comments.comment2}</Text>
            <Text>comment3: {this.props.comments.comment3}</Text>
            <Text>comment4: {this.props.comments.comment4}</Text>
            <Text>comment5: {this.props.comments.comment5}</Text>
            <Text>comment6: {this.props.comments.comment6}</Text>
            <Text>comment7: {this.props.comments.comment7}</Text>
            <Text>comment8: {this.props.comments.comment8}</Text>
            <Text>comment9: {this.props.comments.comment9}</Text>
            </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex :1,
        backgroundColor: '#7aa4f8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        backgroundColor: '#7aa4f8',
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
        backgroundColor: 'lightblue',
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
