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
   render : function () {
        return (
            <div>
            <div className="playersContainer">
                <Keepers list= {this.props.players.p.Keeper}  />
                <Defenders list= {this.props.players.p.Defenders}/>
                <Midfields list= {this.props.players.p.Midfield}  />
                <Forwards list= {this.props.players.p.Forwards} />
                
                <Players list = {this.props.players.p} />
            </div>
            <button className="btn btn-default" onClick={this.clearPlayers}>Start Over</button>
            </div>
        )
   } 
    
});

export default SelectPlayers;