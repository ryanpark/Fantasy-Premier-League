import React from 'react';
var d3 = require('d3-format');


var Team = React.createClass({
   render : function () {
      
       if (typeof this.props.selectPlayers === 'undefined') {
           return null;
       } else {
       var pLists =_.chain(this.props.selectPlayers.players)
            .groupBy(function(item) {
            var positionType = '';
            switch (item.position) {
                case 'Centre Back':
                case 'Left-Back':
                case 'Right-Back':
                positionType = 'defenders';
                break;
                case 'Defensive Midfield':
                case 'Central Midfield':
                case 'Attacking Midfield':
                case 'Right Midfield':
                case 'Left Midfield':
                positionType = 'midfielders';
                break;
                case 'Left Wing':
                case 'Right Wing':
                case 'Centre Forward':
                positionType = 'forwards';
                break;
                case 'Keeper':
                positionType = 'keepers';
                break;
            }
            return positionType;
        }).map(function(item, n) {
            console.log(item['defenders'])
        }).value();
           /*
         var playerLists = _.chain(this.props.selectPlayers.players).filter(function(o) { 
            if (o.position == "Keeper") {
                return position.keepers.push(o);   
            }  
            if (o.position == 'Left-Back' || o.position == 'Right-Back' || o.position == "Centre Back") {
                return position.defenders.push(o);
            }
            if (o.position == 'Central Midfield' || o.position == 'Attacking Midfield' || o.position == "Defensive Midfield") {
                return position.midfields.push(o);
            }
            if (o.position == 'Centre Forward' || o.position == 'Right Wing' || o.position == "Left Wing") {
                return position.forwards.push(o);
            }
        }).map(function(p) {
            console.log(p)
        });*/
        
        console.log(pLists)
         /*
         playerLists = this.props.selectPlayers.players.map(function(p) {
              return (<li>{p.name}</li>)
         }.bind(this));*/
         
         return (
           <div>
            <h3>{this.props.data.name}</h3>
                <ul className="list-unstyled">
                    <h4>Forwards</h4>
                </ul>
           </div>
          );     
       }
      
   } 
});


export default Team;