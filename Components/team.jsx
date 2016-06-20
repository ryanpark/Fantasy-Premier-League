import React from 'react';
import Players from "./players";

var Team = React.createClass({
   getInitialState: function() {
    	return {selectedUrl:[]};
   },
   render : function () {
       var urls;
       if (typeof this.props.data._links === 'undefined') {
         
           return null;
       } else {
          
         return (
           <div>
                <h3>{this.props.data.name}</h3>
                <Players url= {this.props.data._links.players.href} />
           </div>
          );     
       }
      
   } 
});


export default Team;