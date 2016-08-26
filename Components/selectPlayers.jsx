import React from 'react';
import Players from "./container/players";
import store from "../index";

var SelectPlayers = React.createClass({
   clearPlayers : function () {
      console.log(store.getState())
      store.dispatch({type:'clear'})
      console.log(store.getState())
   },
   removePlayer: function() {
     alert('re')  
   },
   render : function () {
       if (this.props.players.p.Keeper === 'undefined') {
           return (<div>empty></div>)
       }
        return (
            <div>
            <div className="playersContainer">
                <Players list = {this.props.players.p} bindRemovePlayer={this.removePlayer.bind(this)}/>
            </div>
            <button className="btn btn-default" onClick={this.clearPlayers}>Start Over</button>
            </div>
        )
   } 
    
});

export default SelectPlayers;