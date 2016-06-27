import React from 'react';
var d3 = require('d3-format');

var Team = React.createClass({
   render : function () {
      
       if (typeof this.props.selectPlayers === 'undefined') {
           return null;
       } else {
         var playerLists;
         var keepers = _.filter(this.props.selectPlayers.players, function(o) { 
             return o.position == "Keeper";
         });
         console.log(keepers)
         playerLists = this.props.selectPlayers.players.map(function(p) {
             if (p.marketValue !== null) {
                 p.marketValue = p.marketValue.replace(/\D/g,'');
             } 
              return (<li>
                  {p.name} &euro;{d3.format("s")(p.marketValue)} {p.position}
              </li>)
         }.bind(this));
         
         return (
           <div>
            <h3>{this.props.data.name}</h3>
                <ul className="list-unstyled">
                    {playerLists}
                </ul>
           </div>
          );     
       }
      
   } 
});


export default Team;