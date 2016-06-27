import React from 'react';

var position = {
    keepers : [],
    defenders : [],
    midfields : [],
    forwards : []
}

var Team = React.createClass({
   render : function () {
      
       if (typeof this.props.selectPlayers === 'undefined') {
           return null;
       } else {
           var f = _.chain(this.props.selectPlayers.players).groupBy('position').pairs().map(function (currentItem) {
                    return _.object(_.zip(["position", "players"], currentItem));
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
        
        console.log(f)
         /*
         playerLists = this.props.selectPlayers.players.map(function(p) {
              return (<li>{p.name}</li>)
         }.bind(this));*/
         
         return (
           <div>
            <h3>{this.props.data.name}</h3>
                <ul className="list-unstyled">
                  
                </ul>
           </div>
          );     
       }
      
   } 
});


export default Team;