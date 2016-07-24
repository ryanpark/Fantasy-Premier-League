import React from 'react';
import Defenders from "./container/defenders";

var SelectPlayers = React.createClass({
    
   render : function () {
       	if (typeof this.props.players === 'undefined') {
			return null;
		} else {
        }
        return (
            <Defenders list = {this.props.players} />
        )
   } 
    
});



export default SelectPlayers;