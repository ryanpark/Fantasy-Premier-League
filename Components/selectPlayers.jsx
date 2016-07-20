import React from 'react';

var SelectPlayers = React.createClass({
    
   render : function () {
       
       var name; 
       	if (typeof this.props.players === 'undefined') {
			return null;
		} else {
           name = this.props.players.name;
           
        }
       return (<div><h3>Players</h3><span>{this.props.players.name}</span></div>)
   } 
    
});



export default SelectPlayers;