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
<<<<<<< HEAD
                <Players list = {this.props.players.p} bindRemovePlayer={this.removePlayer.bind(this)}/>
=======
                <Keepers list= {this.props.players.p.Keeper}  />
                <Defenders list= {this.props.players.p.Defenders}/>
                <Midfields list= {this.props.players.p.Midfield}  />
                <Forwards list= {this.props.players.p.Forwards} />
                
                <Players list = {this.props.players.p} />
>>>>>>> parent of a35b955... Combined to single player component
            </div>
            <button className="btn btn-default" onClick={this.clearPlayers}>Start Over</button>
            </div>
        )
   } 
    
});

export default SelectPlayers;