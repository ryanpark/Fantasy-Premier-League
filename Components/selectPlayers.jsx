import React from 'react';
import Defenders from "./container/defenders";
import Keepers from "./container/keepers";
import Forwards from "./container/forwards";
import Midfields from "./container/midfields";
import Players from "./container/players";

var SelectPlayers = React.createClass({
   clearPlayers : function () {
        store.dispatch({type:'clear'})
   },
   removePlayer: function() {
     alert('re')  
   },
   render : function () {
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