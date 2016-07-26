import React from 'react';
import Defenders from "./container/defenders";
import Keepers from "./container/keepers";
import Forwards from "./container/forwards";
import Midfields from "./container/midfields";

var SelectPlayers = React.createClass({
   clearPlayers : function () {
    
   },
   render : function () {
        return (
            <div>
            <div className="playersContainer">
                <Keepers list= {this.props.players.Keeper} />
                <Defenders list= {this.props.players.Defenders} />
                <Forwards list= {this.props.players.Forwards} />
                <Midfields list= {this.props.players.Midfield} />
            </div>
            <button className="btn btn-default" onClick={this.clearPlayers}>Start Over</button>
            </div>
        )
   } 
    
});



export default SelectPlayers;