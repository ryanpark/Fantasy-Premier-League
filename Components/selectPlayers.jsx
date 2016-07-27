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
                <Keepers list= {this.props.players.Keeper} url={this.props.logo} />
                <Defenders list= {this.props.players.Defenders}  url={this.props.logo} />
                <Forwards list= {this.props.players.Forwards} url={this.props.logo} />
                <Midfields list= {this.props.players.Midfield} url={this.props.logo} />
            </div>
            <button className="btn btn-default" onClick={this.clearPlayers}>Start Over</button>
            </div>
        )
   } 
    
});



export default SelectPlayers;