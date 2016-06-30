import React from 'react';
var d3 = require('d3-format');


var Team = React.createClass({
   componentWillReceiveProps  : function() {
    
   },
   render : function () {
      
       if (typeof this.props.players === 'undefined') {
           return null;
       } else {
          // console.log(this.props)
        return (
           <div>
            <h3>{this.props.data.name}</h3>
                <ul className="list-unstyled">
                    <h4>Keepers</h4>
                   
                    <h4>Defenders</h4>
                    
                    <h4>Midfielders</h4>
                   
                    <h4>Forwards</h4>
                   
                </ul>
           </div>
          );     
       }
      
   } 
});


export default Team;