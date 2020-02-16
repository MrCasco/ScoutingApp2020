import React, { Component } from 'react'
import {
StyleSheet,
View,
Text,
ScrollView,
SafeAreaView,
TouchableHighlight,
Image,
TouchableOpacity}from 'react-native';
import Inner from './Images/circulo.png';
import Outer from './Images/hexa.jpg';
import Bottom from './Images/bottom.png';

export default class Auto extends Component {
    constructor(props){
        super(props);
        this.state={
            crossline: 0,
            colorButtonCross:'#5cb85c',
            feederAuto:0,
            colorButtonFeeder:'#5cb85c',
            pcInnerAuto: 0,
            pcOuterAuto:0,
            pcBottomAuto:0,
            pcDropAuto:0,
            seconds:30,
            minutes:2,
            speedTimer: this.props.speed
        }
    }
    onPressCross = () => {
      let cross = this.state.crossline
        if(this.state.crossline === 1){
            this.setState({crossline:0});
            this.setState({colorButtonCross:'#5cb85c'});
            this.props.handleAuto(cross,this.state.feederAuto,this.state.pcInnerAuto,
            this.state.pcOuterAuto,this.state.pcBottomAuto,this.state.pcDropAuto);
          }else{
            this.setState({crossline:1});
            this.setState({colorButtonCross:'#207c20'});
            this.props.handleAuto(cross,this.state.feederAuto,this.state.pcInnerAuto,
            this.state.pcOuterAuto,this.state.pcBottomAuto,this.state.pcDropAuto);
          }
    }
    onPressFeeder = () => {
        if(this.state.feederAuto === 1){
            this.setState({feederAuto:0});
            this.setState({colorButtonFeeder:'#5cb85c'});
            this.props.handleAuto(this.state.crossline,this.state.feederAuto,this.state.pcInnerAuto,
            this.state.pcOuterAuto,this.state.pcBottomAuto,this.state.pcDropAuto);
          }else{
            this.setState({feederAuto:1});
            this.setState({colorButtonFeeder:'#207c20'});
            this.props.handleAuto(this.state.crossline,this.state.feederAuto,this.state.pcInnerAuto,
            this.state.pcOuterAuto,this.state.pcBottomAuto,this.state.pcDropAuto);
          }
    }
    onPressMinusInner = () => {
        let pc = this.state.pcInnerAuto;
        if(pc>=1){
            this.setState({pcInnerAuto : pc - 1});
            this.props.handleAuto(this.state.crossline,this.state.feederAuto,pc-1,
            this.state.pcOuterAuto,this.state.pcBottomAuto,this.state.pcDropAuto);
        }
    }
    onPressPlusInner = () => {
        let pc = this.state.pcInnerAuto;
        this.setState({pcInnerAuto : pc + 1});
        this.props.handleAuto(this.state.crossline,this.state.feederAuto,pc+1,
        this.state.pcOuterAuto,this.state.pcBottomAuto,this.state.pcDropAuto);
    }
    onPressMinusOuter = () => {
        let pc = this.state.pcOuterAuto;
        if(pc>=1){
            this.setState({pcOuterAuto : pc - 1});
            this.props.handleAuto(this.state.crossline,this.state.feederAuto,this.state.pcInnerAuto,
            pc-1,this.state.pcBottomAuto,this.state.pcDropAuto);
        }
    }
    onPressPlusOuter = () => {
        let pc = this.state.pcOuterAuto;
        this.setState({pcOuterAuto : pc + 1});
        this.props.handleAuto(this.state.crossline,this.state.feederAuto,this.state.pcInnerAuto,
        pc+1,this.state.pcBottomAuto,this.state.pcDropAuto);
    }
    onPressMinusBottom = () => {
        let pc = this.state.pcBottomAuto;
        if(pc>=1){
          this.setState({pcBottomAuto : pc - 1});
          this.props.handleAuto(this.state.crossline,this.state.feederAuto,this.state.pcInnerAuto,
          this.state.pcOuterAuto,pc-1,this.state.pcDropAuto);
        }
    }
    onPressPlusBottom = () => {
        let pc = this.state.pcBottomAuto;
        this.setState({pcBottomAuto : pc + 1});
        this.props.handleAuto(this.state.crossline,this.state.feederAuto,this.state.pcInnerAuto,
        this.state.pcOuterAuto,pc+1,this.state.pcDropAuto);
    }
    onPressMinusDrop = () => {
        let pc = this.state.pcDropAuto;
        if(pc>=1){
            this.setState({pcDropAuto : pc - 1});
            this.props.handleAuto(this.state.crossline,this.state.feederAuto,this.state.pcInnerAuto,
            this.state.pcOuterAuto,this.state.pcBottomAuto,pc-1);
        }
    }
    onPressPlusDrop = () => {
        let pc = this.state.pcDropAuto;
        this.setState({pcDropAuto : pc + 1});
        this.props.handleAuto(this.state.crossline,this.state.feederAuto,this.state.pcInnerAuto,
        this.state.pcOuterAuto,this.state.pcBottomAuto,pc+1);
    }

      tick () {
        let seconds = this.state.seconds
        let minutes = this.state.minutes
        let _this = this
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        this.setState({seconds:seconds});
        this.setState({minutes:minutes});
        if (minutes <= 2 && seconds <= 15){
            _this.props.handlePeriod('Teleop');
          }
      }
      startTimer () {
        let speed = this.state.speedTimer
        this.timer = setInterval(this.tick.bind(this), speed)
      }
      stopTimer () {
      clearInterval(this.timer)
      }

      componentDidMount() {
       this.startTimer();
      }
      componentWillUnmount() {
        this.stopTimer();
      }

    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <View style={styles.body}>
                        <View style ={styles.teamInfo}>
                            <View style ={styles.teamNumberContainer}>
                            <Text style = {styles.Text}>Team: {this.props.team}</Text>
                            </View>
                            <View style ={styles.teamNumberContainer}>
                            <Text style = {styles.Text}>Match: {this.props.match}</Text>
                            </View>
                            <View style ={styles.matchInfo}>
                            <Text style = {styles.Text}>Period: Autonomus</Text>
                            </View>
                            <View style ={styles.matchInfo}>
                            <Text style = {styles.Text}>Time: {this.state.minutes}:{this.state.seconds}</Text>
                            </View>
                        </View>
                        <View style={styles.field}>
                            <View style ={styles.crosslineConatiner}>
                                <TouchableHighlight style = {[{backgroundColor: this.state.colorButtonCross},styles.crossline]}
                                onPress={this.onPressCross} underlayColor='#207c20'>
                                <Text style={styles.TextButton}>Move in Auto</Text>
                                </TouchableHighlight>
                            </View>
                            <View style = {styles.powerPort}>
                                <View style = {styles.port}>
                                    <Image source={Inner} style = {{width: 50, height: 50, marginBottom: 5,}}></Image>
                                    <View style={styles.counterField}>
                                    <TouchableOpacity style = {styles.plusMinusField}
                                    onPress={this.onPressMinusInner}>
                                        <Text style={styles.TextButton}>-</Text>
                                    </TouchableOpacity>
                                    <Text style = {styles.TextButton}>{this.state.pcInnerAuto}</Text>
                                    <TouchableOpacity style = {styles.plusMinusField}
                                    onPress={this.onPressPlusInner}>
                                        <Text style={styles.TextButton}>+</Text>
                                    </TouchableOpacity>
                                    </View>
                                </View>
                                <View style = {styles.port}>
                                <Image source={Outer} style = {{width: 50, height: 50, marginBottom: 5,}}></Image>
                                <View style={styles.counterField}>
                                    <TouchableOpacity style = {styles.plusMinusField}
                                    onPress={this.onPressMinusOuter}>
                                        <Text style={styles.TextButton}>-</Text>
                                    </TouchableOpacity>
                                    <Text style = {styles.TextButton}>{this.state.pcOuterAuto}</Text>
                                    <TouchableOpacity style = {styles.plusMinusField}
                                    onPress={this.onPressPlusOuter}>
                                        <Text style={styles.TextButton}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                </View>
                                <View style = {styles.port}>
                                <Image source={Bottom} style = {{width: 50, height: 50, marginBottom: 5,}}></Image>
                                <View style={styles.counterField}>
                                    <TouchableOpacity style = {styles.plusMinusField}
                                    onPress={this.onPressMinusBottom}>
                                        <Text style={styles.TextButton}>-</Text>
                                    </TouchableOpacity>
                                    <Text style = {styles.TextButton}>{this.state.pcBottomAuto}</Text>
                                    <TouchableOpacity style = {styles.plusMinusField}
                                    onPress={this.onPressPlusBottom}>
                                        <Text style={styles.TextButton}>+</Text>
                                    </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.gamePeriodBar}>
                        <TouchableHighlight style = {[{backgroundColor: this.state.colorButtonFeeder},styles.defense]}
                                onPress={this.onPressFeeder} underlayColor='#207c20'>
                                <Text style={styles.TextButton}>Feeding other robot</Text>
                                </TouchableHighlight>
                        <View style={styles.counter}>
                            <TouchableOpacity style = {styles.plusMinus}
                            onPress={this.onPressMinusDrop}>
                                <Text style={styles.TextButton}>-</Text>
                            </TouchableOpacity>
                            <Text style = {styles.TextButton}>Power Cells drop: {this.state.pcDropAuto}</Text>
                            <TouchableOpacity style = {styles.plusMinus}
                            onPress={this.onPressPlusDrop}>
                                <Text style={styles.TextButton}>+</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex :1,
        backgroundColor: '#5cb85c',
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex :1,

    },
    crossline:{
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius:6,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        borderWidth: 0.1,
        borderRadius: 20,
        marginTop: 10,
        width: 200,
       height: 35,
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
        marginTop: 5,
        marginBottom:20,
        width: 200,
       height: 35,
    },
    gamePeriodBar:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    counter:{

        textAlign: 'center',
        backgroundColor: '#5cb85c',
        shadowRadius:6,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        borderWidth: 0.1,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 300,
        height: 50,
        marginTop: 5,
        marginBottom:20,
        marginLeft:10,
    },
    plusMinus:{
        textAlign: 'center',
        backgroundColor: '#207c20',
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
        backgroundColor: '#5cb85c',
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
        backgroundColor: '#207c20',
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
