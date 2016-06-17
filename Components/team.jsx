import React from 'react';
import Players from "./players";

var Team = React.createClass({
    getInitialState: function() {
    	return {data: []};
   },
   render : function () {
       var urls;
       if (typeof this.props.data._links === 'undefined') {
           console.log(this.props.data)
           return null;
       } else {
         return (
           <div>
                <h3>{this.props.data.name}</h3>
                <Players />
                <span>{this.props.data._links.players.href}</span>
           </div>
          );     
       }
      
   } 
});


export default Team;