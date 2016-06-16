import React from 'react';

var Team = React.createClass({
    
   render : function () {
       return (
           <h3>{this.props.data.name}</h3>
          );
   } 
});


export default Team;