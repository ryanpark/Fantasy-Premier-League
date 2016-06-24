import React from 'react';

var Team = React.createClass({
   render : function () {
      
       if (typeof this.props.selectPlayers === 'undefined') {
           return null;
       } else {
         var playerLists;
         playerLists = this.props.selectPlayers.players.map(function(p) {
              return (<li>{p.name}</li>)
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