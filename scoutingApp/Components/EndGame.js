import React, { Component } from 'react'
import {
StyleSheet,
View,
Text,
ScrollView,
SafeAreaView,
TouchableHighlight,
TouchableOpacity,
Image,Slider}from 'react-native';
import switchGenerator from './Images/trianguloend.jpg';
import propTypes from 'prop-types';

export default class EndGame extends Component {
  constructor(props){
        super(props);
        this.state={
            noClimb:0,
            colorButtonPark:'#d9534f',
            park:0,
            colorButtonNo:'#d9534f',
            level:0,
            colorButtonLevel:'#d9534f',
            pcEnd: 0,
            pcDropEnd:0,
            climbPosition: 50,
            minutes:0,
            seconds:40,
            speedTimer: this.props.speed
        }
    }
    onPressLevel = () => {
        if(this.state.level === 1){
            this.setState({level:0});
            this.setState({colorButtonLevel:'#d9534f'});
            this.props.handleEndGame(this.state.climbPosition,this.state.pcEnd,this.state.pcDropEnd,this.state.noClimb,
            this.state.park, this.state.level);
          }else{
            this.setState({level:1});
            this.setState({colorButtonLevel:'#a1110c'});
            this.props.handleEndGame(this.state.climbPosition,this.state.pcEnd,this.state.pcDropEnd,this.state.noClimb,
            this.state.park, this.state.level);
          }
    }
    onPressPark = () => {
        if(this.state.park === 1){
            this.setState({park:0});
            this.setState({colorButtonPark:'#d9534f'});
            this.props.handleEndGame(this.state.climbPosition,this.state.pcEnd,this.state.pcDropEnd,this.state.noClimb, this.state.park, this.state.level);
          }else{
            this.setState({park:1});
            this.setState({colorButtonPark:'#a1110c'});
            this.props.handleEndGame(this.state.climbPosition,this.state.pcEnd,this.state.pcDropEnd,this.state.noClimb, this.state.park, this.state.level);
          }
    }
    onPressNoClimb = () => {
        if(this.state.noClimb === 1){
            this.setState({noClimb:0});
            this.setState({colorButtonNo:'#d9534f'});
            this.props.handleEndGame(this.state.climbPosition,this.state.pcEnd,this.state.pcDropEnd,this.state.noClimb, this.state.park, this.state.level);
          }else{
            this.setState({noClimb:1});
            this.setState({colorButtonNo:'#a1110c'});
              this.props.handleEndGame(this.state.climbPosition,this.state.pcEnd,this.state.pcDropEnd,this.state.noClimb, this.state.park, this.state.level);
          }
    }
    onPressMinus = () => {
        let pc = this.state.pcEnd;
        if(pc>=1){
            this.setState({pcEnd : pc - 1});
            this.props.handleEndGame(this.state.climbPosition,pc-1,this.state.pcDropEnd,this.state.noClimb, this.state.park, this.state.level);
        }
    }
    onPressPlus = () => {
        let pc = this.state.pcEnd;
        this.setState({pcEnd : pc + 1});
        this.props.handleEndGame(this.state.climbPosition,pc+1,this.state.pcDropEnd,this.state.noClimb, this.state.park, this.state.level);
    }
    onPressMinusDrop = () => {
        let pc = this.state.pcDropEnd;
        if(pc>=1){
            this.setState({pcDropEnd : pc - 1});
            this.props.handleEndGame(this.state.climbPosition,this.state.pcEnd,pc-1,this.state.noClimb, this.state.park, this.state.level);
        }

    }
    onPressPlusDrop = () => {
        let pc = this.state.pcDropEnd;
        this.setState({pcDropEnd : pc + 1});
        this.props.handleEndGame(this.state.climbPosition,this.state.pcEnd,pc+1,this.state.noClimb, this.state.park, this.state.level);
    }
    change(value) {
        this.setState({climbPosition:value});
        let drop = this.state.pcDropEnd
        this.props.handleEndGame(value,this.state.pcEnd,drop,this.state.noClimb, this.state.park, this.state.level);
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
        if (minutes <= 0 && seconds <= 0){
            _this.props.handlePeriod('Finish');
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
        const {climbPosition} = this.state;
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
                            <Text style = {styles.Text}>Period: End Game</Text>
                            </View>
                            <View style ={styles.matchInfo}>
                            <Text style = {styles.Text}>Time: {this.state.minutes}:{this.state.seconds}</Text>
                            </View>
                        </View>
                        <View style={styles.field}>
                        <Image source={switchGenerator} style = {{width: 600, height: 60, marginBottom: 1,resizeMode: 'stretch'}}></Image>
                        <View style={styles.slidecontainer}>
                            <Slider style={{width: 550, height: 10, borderRadius: 5}} minimumValue={0} maximumValue={100}
                            value={climbPosition} maximumTrackTintColor='#d9534f' minimumTrackTintColor='#d9534f'
                            onValueChange={this.change.bind(this)} step = {1}/>
                        </View>
                        </View>
                        <View style={styles.gamePeriodBar}>
                        <TouchableHighlight style = {[{backgroundColor: this.state.colorButtonLevel},styles.defense]}
                                onPress={this.onPressLevel} underlayColor='#a1110c'>
                            <Text style={styles.TextButton}>Level</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {[{backgroundColor: this.state.colorButtonNo},styles.defense]}
                        onPress={this.onPressNoClimb} underlayColor='#a1110c'>
                            <Text style={styles.TextButton}>No Climb</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {[{backgroundColor: this.state.colorButtonPark},styles.defense]}
                        onPress={this.onPressPark} underlayColor='#a1110c'>
                            <Text style={styles.TextButton}>Park</Text>
                        </TouchableHighlight>
                        </View>
                        <View style ={styles.gamePeriodBar}>
                        <View style={styles.counter}>
                            <TouchableOpacity style = {styles.plusMinus} onPress={this.onPressMinus}>
                                <Text style={styles.TextButton}>-</Text>
                            </TouchableOpacity>
                            <Text style = {styles.TextButton}>Power Cells: {this.state.pcEnd}</Text>
                            <TouchableOpacity style = {styles.plusMinus} onPress={this.onPressPlus}>
                                <Text style={styles.TextButton}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.counter}>
                            <TouchableOpacity style = {styles.plusMinus} onPress={this.onPressMinusDrop}>
                                <Text style={styles.TextButton}>-</Text>
                            </TouchableOpacity>
                            <Text style = {styles.TextButton}>Power Cells drop: {this.state.pcDropEnd}</Text>
                            <TouchableOpacity style = {styles.plusMinus} onPress={this.onPressPlusDrop}>
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
        backgroundColor: '#d9534f',
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
    switchGenerator:{
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.3,
        borderRadius: 20,
        margin: 10,

      },
    TextButton:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize: 18,
        color: '#ffffff'
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
        backgroundColor: '#d9534f',
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
        backgroundColor: '#a1110c',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        height: 40,
        margin:1,
        borderWidth: 0.1,
        borderRadius: 20,
    },
  });
