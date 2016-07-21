import React from 'react';

var SelectPlayers = React.createClass({
    
   render : function () {
       

       	if (typeof this.props.players === 'undefined') {
			return null;
		} else {

        }
       return (<div><h3>Players</h3><span>{this.props.players.name}</span></div>)
   } 
    
});



export default SelectPlayers;