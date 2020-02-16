import React, { Component } from 'react'
import {StyleSheet, View }from 'react-native';
import Login from './Login';
import Auto from './Auto';
import Teleop from './Teleop';
import EndGame from './EndGame';
import Finish from './Finish';
import Comments from './Comments';
import States from './States';

export default class AppScouting extends Component {

  gatherAllStates(){
    return `
    ${this.state.TeamNumber},${this.state.MatchNumber},${this.state.auto.ballCounter.inner},${this.state.auto.ballCounter.outer},${this.state.auto.ballCounter.lower},${this.state.auto.ballCounter.drop},${this.state.auto.cross},${this.state.auto.feeding},${this.state.teleop.ballCounter.inner},${this.state.teleop.ballCounter.outer},${this.state.teleop.ballCounter.lower},${this.state.teleop.ballCounter.drop},${this.state.teleop.defense},${this.state.teleop.feeding},${this.state.teleop.controlSpin},${this.state.teleop.controlColor},${this.state.EndGame.climb.climbPosition},${this.state.EndGame.noClimb},${this.state.EndGame.park},${this.state.EndGame.level},${this.state.EndGame.pcEnd},${this.state.EndGame.pcDropEnd},${this.state.comments.comment1},${this.state.comments.comment2},${this.state.comments.comment3},${this.state.comments.comment4},${this.state.comments.comment5},${this.state.comments.comment6},${this.state.comments.comment7},${this.state.comments.comment8},${this.state.comments.comment9}
    `;
  }

    constructor(){
        super()
        this.state={
            TeamNumber : 0,
            MatchNumber: 0,
            speedTimer: 50,
            CurrentPeriod:'login',
            auto:{
                ballCounter:{
                    inner:0,
                    outer:0,
                    lower:0,
                    drop:0
                },
                cross:0,
                feeding:0,
            },
            teleop:{
                ballCounter:{
                    inner:0,
                    outer:0,
                    lower:0,
                    drop:0
                },
                defense:0,
                feeding:0,
                controlSpin:0,
                controlColor:0
            },
            EndGame:{
                climb:{
                  climbPosition:50,
                },
                noClimb:0,
                park:0,
                level:0,
                pcEnd: 0,
                pcDropEnd:0,
            },
            date: new Date(),
            comments:{
              comment1:'',
              comment2:'',
              comment3:'',
              comment4:'',
              comment5:'',
              comment6:'',
              comment7:'',
              comment8:'',
              comment9:'',
            }
    }
  }

    handlePeriod = (p) =>{
      this.setState({CurrentPeriod:p});
    }

    handleLogIn = (t,m,p) => {
        this.setState({CurrentPeriod: p});
        this.setState({TeamNumber:t});
        this.setState({MatchNumber:m});
    }
    /*---------------------------------------------------------------------------------------------------------------------------*/
    handleAutoStates = (cl,f,i,o,l,drop) =>{
      this.setState({
     auto:{cross:cl,feeding:f, ballCounter:{
        inner:i,
        outer:o,
        lower:l,
        drop:drop,
      }}
   });
    }
    /*---------------------------------------------------------------------------------------------------------------------------*/
    handleTeleopStates = (d,f,sc,cc,i,o,l,drop) =>{
      this.setState({
     teleop:{defense:d,feeding:f,controlSpin:sc,controlColor:cc,
       ballCounter:{
         inner:i,
         outer:o,
         lower:l,
         drop:drop,
       }}
   });
    }
    /*---------------------------------------------------------------------------------------------------------------------------*/
    handleEndGameStates = (sp,pc,d,nc,p,l) =>{
      this.setState({
     EndGame:{climb:{climbPosition:sp},pcEnd:pc,pcDropEnd:d,noClimb:nc,park:p,level:l}
   });
 }
    /*---------------------------------------------------------------------------------------------------------------------------*/
    handleFinish =(period,finalC,pc,d,nc,p,l)=>{
        this.setState({CurrentPeriod:period});
        this.setState({EndGame:{climb:{climbPosition:finalC},pcEnd:pc,pcDropEnd:d,noClimb:nc,park:p,level:l}});
    }
    /*---------------------------------------------------------------------------------------------------------------------------*/
    handleComments = (period,c1,c2,c3,c4,c5,c6,c7,c8,c9) =>{
        this.setState({CurrentPeriod:period});
        this.setState({comments:{
          comment1:c1,
          comment2:c2,
          comment3:c3,
          comment4:c4,
          comment5:c5,
          comment6:c6,
          comment7:c7,
          comment8:c8,
          comment9:c9,
        }})
    }
    /*---------------------------------------------------------------------------------------------------------------------------*/
    render() {
        const {CurrentPeriod} = this.state;
         let stage;
         switch (CurrentPeriod) {
           case 'login':
           stage = <Login
           team = {this.state.TeamNumber}
           match = {this.state.MatchNumber}
           handleLogIn = {this.handleLogIn}
           />
           break;
           case 'Auto':
           stage = <Auto
           team = {this.state.TeamNumber}
           match = {this.state.MatchNumber}
           speed = {this.state.speedTimer}
           handleAuto = {this.handleAutoStates}
           handlePeriod = {this.handlePeriod}
           />
           break;
           case 'Teleop':
           stage = <Teleop
           team = {this.state.TeamNumber}
           match = {this.state.MatchNumber}
           speed = {this.state.speedTimer}
           handleTeleop = {this.handleTeleopStates}
           handlePeriod = {this.handlePeriod}
           />
           break;
           case 'EndGame':
           stage = <EndGame
           team = {this.state.TeamNumber}
           match = {this.state.MatchNumber}
           seconds = {this.state.seconds}
           minutes = {this.state.minutes}
           speed = {this.state.speedTimer}
           handleEndGame = {this.handleEndGameStates}
           handlePeriod = {this.handlePeriod}
           />
           break;
           case 'Finish':
           stage = <Finish
           team = {this.state.TeamNumber}
           match = {this.state.MatchNumber}
           climb = {this.state.EndGame}
           drop = {this.state.EndGame}
           noClimb = {this.state.EndGame.noClimb}
           park = {this.state.EndGame.park}
           level = {this.state.EndGame.level}
           pc = {this.state.EndGame}
           ready = {this.handleFinish}
           />
           break;
           case 'comments':
           stage = <Comments
           team = {this.state.TeamNumber}
           match = {this.state.MatchNumber}
           submit = {this.handleComments}
           />
           break;
           case 'check':
            console.log(this.gatherAllStates());
            fetch("http://10.49.80.70/insert.php", {
              method: "POST",
              mode: "same-origin",
              credentials: "same-origin",
              headers: {
                "Content-Type": "text/csv"
              },
              body: `${this.gatherAllStates()}`
            }).catch(error => {
              console.log(error, '0');
            });
             stage = <Login
             team = {this.state.TeamNumber}
             match = {this.state.MatchNumber}
             handleLogIn = {this.handleLogIn}
             />

           break;
           default:
           stage = <Login
           handleLogIn = {this.handleLogIn}
           />
           break;
         }
        return (
            <View style={styles.container}>
            {stage}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex :1,
    }
  });
