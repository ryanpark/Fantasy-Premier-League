import React from 'react';

var SelectPlayers = React.createClass({
    
   render : function () {
       console.log(this.props.data)
       var name; 
       	if (typeof this.props.data.left === 'undefined') {
			return null;
		} else {
           name = this.props.left.name;
        }
       return (<div><h3>Players</h3><span>{this.props.left.name}</span></div>)
   } 
    
});



export default SelectPlayers;