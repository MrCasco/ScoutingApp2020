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
Animated, // provides methods for animating components
Easing }from 'react-native';
import Inner from './Images/circulo.png';
import Outer from './Images/hexa.jpg';
import Bottom from './Images/bottom.png';
import SpinigControl from './Images/spinig.jpg';
import SpinigControlChecked from './Images/checkedspinig.jpg'
import ColorControl from './Images/fortuneWheelsColors.jpg';
import ColorControlChecked from './Images/checkdcolor.jpg';

export default class Auto extends Component {
    constructor(props){
        super(props);
        this.state={
            defense: 0,
            colorButtonDefense:'#f0ad4e',
            feeder:0,
            colorButtonFeeder:'#f0ad4e',
            pcInner: 0,
            pcOuter:0,
            pcBottom:0,
            pcDrop:0,
            spinigControl:0,
            colorControl:0,
            controlSpinig: SpinigControl,
            controlColor: ColorControl,
            minutes:2,
            seconds:15,
            speedTimer: this.props.speed
        }
    }

    onPressColorControl= () =>{
        if(this.state.colorControl === 1){
            this.setState({colorControl:0});
            this.setState({controlColor: ColorControl});
            this.props.handleTeleop(this.state.defense,this.state.feeder,this.state.spinigControl,
            this.state.colorControl,this.state.pcInner,this.state.pcOuter,this.state.pcBottom,
            this.state.pcDrop);
          }else{
            this.setState({colorControl:1});
            this.setState({controlColor: ColorControlChecked});
            this.props.handleTeleop(this.state.defense,this.state.feeder,this.state.spinigControl,
            this.state.colorControl,this.state.pcInner,this.state.pcOuter,this.state.pcBottom,
            this.state.pcDrop);
          }
    }
    onPressSpningControl= () =>{
        if(this.state.spinigControl === 1){
            this.setState({spinigControl:0});
            this.setState({controlSpinig: SpinigControl});
            this.props.handleTeleop(this.state.defense,this.state.feeder,this.state.spinigControl,
            this.state.colorControl,this.state.pcInner,this.state.pcOuter,this.state.pcBottom,
            this.state.pcDrop);
          }else{
            this.setState({spinigControl:1});
            this.setState({controlSpinig: SpinigControlChecked});
            this.props.handleTeleop(this.state.defense,this.state.feeder,this.state.spinigControl,
            this.state.colorControl,this.state.pcInner,this.state.pcOuter,this.state.pcBottom,
            this.state.pcDrop);
          }
    }
    onPressDefense = () => {
        if(this.state.defense === 1){
            this.setState({defense:0});
            this.setState({colorButtonDefense:'#f0ad4e'});
            this.props.handleTeleop(this.state.defense,this.state.feeder,this.state.spinigControl,
            this.state.colorControl,this.state.pcInner,this.state.pcOuter,this.state.pcBottom,
            this.state.pcDrop);
          }else{
            this.setState({defense:1});
            this.setState({colorButtonDefense:'#f09412'});
            this.props.handleTeleop(this.state.defense,this.state.feeder,this.state.spinigControl,
            this.state.colorControl,this.state.pcInner,this.state.pcOuter,this.state.pcBottom,
            this.state.pcDrop);
          }
    }
    onPressFeeder = () => {
        if(this.state.feeder === 1){
            this.setState({feeder:0});
            this.setState({colorButtonFeeder:'#f0ad4e'});
            this.props.handleTeleop(this.state.defense,this.state.feeder,this.state.spinigControl,
            this.state.colorControl,this.state.pcInner,this.state.pcOuter,this.state.pcBottom,
            this.state.pcDrop);
          }else{
            this.setState({feeder:1});
            this.setState({colorButtonFeeder:'#f09412'});
            this.props.handleTeleop(this.state.defense,this.state.feeder,this.state.spinigControl,
            this.state.colorControl,this.state.pcInner,this.state.pcOuter,this.state.pcBottom,
            this.state.pcDrop);
          }
    }
    onPressMinusInner = () => {
        let pc = this.state.pcInner;
        if(pc>=1){
            this.setState({pcInner : pc - 1});
            this.props.handleTeleop(this.state.defense,this.state.feeder,this.state.spinigControl,
            this.state.colorControl,pc-1,this.state.pcOuter,this.state.pcBottom,
            this.state.pcDrop);
        }
    }
    onPressPlusInner = () => {
        let pc = this.state.pcInner;
        this.setState({pcInner : pc + 1});
        this.props.handleTeleop(this.state.defense,this.state.feeder,this.state.spinigControl,
        this.state.colorControl,pc+1,this.state.pcOuter,this.state.pcBottom,
        this.state.pcDrop);
    }
    onPressMinusOuter = () => {
        let pc = this.state.pcOuter;
        if(pc>=1){
            this.setState({pcOuter : pc - 1});
            this.props.handleTeleop(this.state.defense,this.state.feeder,this.state.spinigControl,
            this.state.colorControl,this.state.pcInner,pc-1,this.state.pcBottom,
            this.state.pcDrop);
        }
    }
    onPressPlusOuter = () => {
        let pc = this.state.pcOuter;
        this.setState({pcOuter : pc + 1});
        this.props.handleTeleop(this.state.defense,this.state.feeder,this.state.spinigControl,
        this.state.colorControl,this.state.pcInner,pc+1,this.state.pcBottom,
        this.state.pcDrop);
    }
    onPressMinusBottom = () => {
        let pc = this.state.pcBottom;
        if(pc>=1){
            this.setState({pcBottom : pc - 1});
            this.props.handleTeleop(this.state.defense,this.state.feeder,this.state.spinigControl,
            this.state.colorControl,this.state.pcInner,this.state.pcOuter,pc-1,
            this.state.pcDrop);
        }
    }
    onPressPlusBottom = () => {
        let pc = this.state.pcBottom;
        this.setState({pcBottom : pc + 1});
        this.props.handleTeleop(this.state.defense,this.state.feeder,this.state.spinigControl,
        this.state.colorControl,this.state.pcInner,this.state.pcOuter,pc+1,
        this.state.pcDrop);
    }
    onPressMinusDrop = () => {
        let pc = this.state.pcDrop;
        if(pc>=1){
            this.setState({pcDrop : pc - 1});
            this.props.handleTeleop(this.state.defense,this.state.feeder,this.state.spinigControl,
            this.state.colorControl,this.state.pcInner,this.state.pcOuter,this.state.pcBottom,
            pc-1);
        }
    }
    onPressPlusDrop = () => {
        let pc = this.state.pcDrop;
        this.setState({pcDrop : pc + 1});
        this.props.handleTeleop(this.state.defense,this.state.feeder,this.state.spinigControl,
        this.state.colorControl,this.state.pcInner,this.state.pcOuter,this.state.pcBottom,
        pc+1);
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
        if (minutes <= 0 && seconds <= 30){
            _this.props.handlePeriod('EndGame');
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
      const spinig = this.state.controlSpinig;
      const colorC = this.state.controlColor;
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
                            <Text style = {styles.Text}>Period: Teleop</Text>
                            </View>
                            <View style ={styles.matchInfo}>
                            <Text style = {styles.Text}>Time: {this.state.minutes}:{this.state.seconds}</Text>
                            </View>
                        </View>
                        <View style={styles.field}>
                            <View style ={styles.crosslineConatiner}>
                            <TouchableOpacity onPress={this.onPressSpningControl}>
                            <Image source = {spinig} style = {{width: 77, height: 77, marginBottom: 5,}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.onPressColorControl}>
                                <Image source = {colorC} style = {{width: 77, height: 77, marginBottom: 5,}}/>
                            </TouchableOpacity>
                            </View>
                            <View style = {styles.powerPort}>
                                <View style = {styles.port}>
                                    <Image source={Inner} style = {{width: 50, height: 50, marginBottom: 5,}}></Image>
                                    <View style={styles.counterField}>
                                    <TouchableOpacity style = {styles.plusMinusField}
                                    onPress={this.onPressMinusInner}>
                                        <Text style={styles.TextButton}>-</Text>
                                    </TouchableOpacity>
                                    <Text style = {styles.TextButton}>{this.state.pcInner}</Text>
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
                                    <Text style = {styles.TextButton}>{this.state.pcOuter}</Text>
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
                                    <Text style = {styles.TextButton}>{this.state.pcBottom}</Text>
                                    <TouchableOpacity style = {styles.plusMinusField}
                                    onPress={this.onPressPlusBottom}>
                                        <Text style={styles.TextButton}>+</Text>
                                    </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.gamePeriodBar}>
                        <TouchableHighlight style = {[{backgroundColor: this.state.colorButtonDefense},styles.defenseF]}
                                onPress={this.onPressDefense} underlayColor='#f09412'>
                                <Text style={styles.TextButton}>Feeding other robot</Text>
                                </TouchableHighlight>
                        <TouchableHighlight style = {[{backgroundColor: this.state.colorButtonFeeder},styles.defense]}
                                onPress={this.onPressFeeder} underlayColor='#f09412'>
                                <Text style={styles.TextButton}>Defense</Text>
                                </TouchableHighlight>
                        <View style={styles.counter}>
                            <TouchableOpacity style = {styles.plusMinus}
                            onPress={this.onPressMinusDrop}>
                                <Text style={styles.TextButton}>-</Text>
                            </TouchableOpacity>
                            <Text style = {styles.TextButton}>Power Cells drop: {this.state.pcDrop}</Text>
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
        backgroundColor: '#f0ad4e',
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
        marginRight:10,
        width: 100,
       height: 35,
    },
    defenseF:{
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius:6,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        borderWidth: 0.1,
        borderRadius: 20,
        marginTop: 5,
        marginBottom:20,
        marginRight:10,
        width: 120,
       height: 60,
    },
    gamePeriodBar:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    counter:{

        textAlign: 'center',
        backgroundColor: '#f0ad4e',
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
        backgroundColor: '#f09412',
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
        backgroundColor: '#f0ad4e',
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
        backgroundColor: '#f09412',
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
