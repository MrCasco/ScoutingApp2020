import React, { Component } from 'react'
import {
StyleSheet,
View,
Text,
ScrollView,
SafeAreaView,
TouchableHighlight,
TouchableOpacity,
Image,
Slider}from 'react-native';
import switchGenerator from './Images/switchgenerator.png';
import propTypes from 'prop-types';

export default class Finish extends Component {
    constructor(props){
        super(props);
        this.state={
            noClimb:this.props.noClimb,
            park:this.props.park,
            level:this.props.level,
            climbPosition: this.props.climb.climb.climbPosition,
            pc: this.props.pc.pcEnd,
            drop: this.props.drop.pcDropEnd,
        }
    }
    change(value) {
        this.setState({climbPosition:value});
      }

    render() {
        const {ready} = this.props
        const {noClimb} = this.state
        const {park} = this.state 
        const {level} = this.state
        const {pc} = this.state
        const {drop} = this.state
        return (
            <SafeAreaView style = {styles.container}>
                <View contentContainerStyle={{flexGrow: 1}}>
                    <View style={styles.body}>
                        <View style ={styles.teamInfo}>
                            <View style ={styles.teamNumberContainer}>
                            <Text style = {styles.Text}>Team: {this.props.team}</Text>
                            </View>
                            <View style ={styles.teamNumberContainer}>
                            <Text style = {styles.Text}>Match: {this.props.match}</Text>
                            </View>
                            <View style ={styles.matchInfo}>
                            <TouchableOpacity style={[{backgroundColor:'#5cb85c'},styles.ready]}
                            onPress={() => ready('comments',this.state.climbPosition,pc,drop,noClimb,park,level)} >
                                <Text style={styles.TextButton}>Ready</Text>
                            </TouchableOpacity>
                            <Text style = {styles.Text}>Time: Finish</Text>
                            </View>
                        </View>
                        <View style={styles.field}>
                        <Image source={switchGenerator} style = {{width: 600, height: 60, marginBottom: 1,resizeMode: 'stretch'}}></Image>
                        <View style={styles.slidecontainer}>
                            <Slider style={{width: 550, height: 10, borderRadius: 5}} minimumValue={0} maximumValue={100}
                            value={this.state.climbPosition} maximumTrackTintColor='#000000' minimumTrackTintColor='#000000' 
                            onValueChange={this.change.bind(this)} step ={1}/>
                        </View>
                        </View>
                        <View style={styles.gamePeriodBar}>
                        <TouchableHighlight style = {[{backgroundColor: '#000000'},styles.defense]}
                               underlayColor='#000000'>
                            <Text style={styles.TextButton}>Level</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {[{backgroundColor: '#000000'},styles.defense]}
                                underlayColor='#000000'>
                            <Text style={styles.TextButton}>No Climb</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {[{backgroundColor: '#000000'},styles.defense]}
                         underlayColor='#000000'>
                            <Text style={styles.TextButton}>Park</Text>
                        </TouchableHighlight>
                        </View>
                        <View style ={styles.gamePeriodBar}>
                        <View style={styles.counter}>
                            <TouchableOpacity style = {styles.plusMinus}>
                                <Text style={styles.TextButton}>-</Text>
                            </TouchableOpacity>
                            <Text style = {styles.TextButton}>Power Cells: {this.props.pc.pcEnd}</Text>
                            <TouchableOpacity style = {styles.plusMinus}>
                                <Text style={styles.TextButton}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.counter}>
                            <TouchableOpacity style = {styles.plusMinus}>
                                <Text style={styles.TextButton}>-</Text>
                            </TouchableOpacity>
                            <Text style = {styles.TextButton}>Power Cells drop: {this.props.drop.pcDropEnd}</Text>
                            <TouchableOpacity style = {styles.plusMinus}>
                                <Text style={styles.TextButton}>+</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex :1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        backgroundColor: '#ffffff',
        width:640,
        height:320,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        shadowRadius:6,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        borderWidth: 1.3,
        borderRadius: 20,
        marginTop: 25,
    },
    slidecontainer:{

        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 20,
        shadowRadius:2,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        margin: 5,
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
        margin: 10,
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
    field:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex :1,

    },
    ready:{
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius:6,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        borderWidth: 1.3,
        borderRadius: 20,
        margin: 10,
        width: 100,
       height: 35,
    },
    switchGenerator:{
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.3,
        borderRadius: 20,
        margin: 10,

      },
    crosslineConatiner:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    },
    TextButton:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize: 18,
        color: '#ffffff'
    },
    powerPort:{
        marginLeft: 70,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    port:{
        margin: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
    defense:{
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius:6,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        borderWidth: 0.1,
        borderRadius: 20,
        margin:10,
        width: 100,
       height: 35,
    },
    gamePeriodBar:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    counter:{

        textAlign: 'center',
        backgroundColor: '#000000',
        shadowRadius:6,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        borderWidth: 0.1,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 280,
        height: 50,
        marginTop: 5,
        marginBottom:20,
        marginLeft:10,
    },
    plusMinus:{
        textAlign: 'center',
        backgroundColor: '#6d6f70',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        height: 40,
        margin:1,
        borderWidth: 0.1,
        borderRadius: 20,
    },
    counterField:{
        textAlign: 'center',
        backgroundColor: '#000000',
        shadowRadius:6,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        borderWidth: 0.1,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 150,
        height: 50,
        marginTop: 5,
        marginBottom:5,
        marginLeft:10,
    },
    plusMinusField:{
        textAlign: 'center',
        backgroundColor: '#000000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        height: 40,
        margin:1,
        borderWidth: 0.1,
        borderRadius: 20,
    }
  });

Finish.propTypes = {
    ready : propTypes.func.isRequired,
}
