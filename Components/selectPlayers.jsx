import React from 'react';

var SelectPlayers = React.createClass({
    
   render : function () {
       return (<div><h3>Players</h3><span>{this.props.data}</span></div>)
   } 
    
});



export default SelectPlayers;