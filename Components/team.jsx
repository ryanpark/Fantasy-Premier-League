import React from 'react';
var d3 = require('d3-format');

var resultLists =  {
       defenders: [],
       midfielders: [],
       forwards : [],
       keepers: []
};
var Team = React.createClass({
   getInitialState : function () {
     return {
        a: []
     }
   },
   renderLists : function() {
       var p = this.props.selectPlayers.players.map(function(p,m) {
           switch (p.position) {
                case 'Centre Back':
                case 'Left-Back':
                case 'Right-Back':
                resultLists.defenders.push(<li>{p.name}</li>);
                break;
                case 'Defensive Midfield':
                case 'Central Midfield':
                case 'Attacking Midfield':
                case 'Right Midfield':
                case 'Left Midfield':
                resultLists.midfielders.push(<li>{p.name}</li>);
                break;
                case 'Left Wing':
                case 'Right Wing':
                case 'Centre Forward':
                resultLists.forwards.push(<li>{p.name}</li>);
                break;
                case 'Keeper':
                resultLists.keepers.push(<li>{p.name}</li>);
                break;
           }
          
       }.bind(this));
       
       return p;
       
   },
   render : function () {
      
       if (typeof this.props.selectPlayers === 'undefined') {
           return null;
       } else {
        this.renderLists();
        return (
           <div>
            <h3>{this.props.data.name}</h3>
                <ul className="list-unstyled">
                    <h4>Keepers</h4>
                    {resultLists.keepers}
                    <h4>Defenders</h4>
                    {resultLists.defenders}
                    <h4>Midfielders</h4>
                    {resultLists.midfielders}
                    <h4>Forwards</h4>
                    {resultLists.forwards}
                </ul>
           </div>
          );     
       }
      
   } 
});


export default Team;