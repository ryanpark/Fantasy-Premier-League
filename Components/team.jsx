import React from 'react';
var d3 = require('d3-format');

var Team = React.createClass({
   getinitialstate : function () {
       
   },
   handleClick : function(i, props) {
      /* this.props.onUpdate({selectedPlayers : props[i]});*/
       this.props.onUpdate(props[i]);
       /*
       this.props.onUpdate({selectedPlayers :[{
           'keeper' :'22'
       }]});*/
   },
   render : function () {
       if (typeof this.props.players === 'undefined') {
           return null;
       } else {
           if (typeof this.props.players.players === 'object') {
               var selectedPlayers = {keepers:[],forwards:[],defenders:[],midfielder:[]}; 
               var pushLists = _.map(this.props.players.players, function (e , i) {
                   if (['Keeper'].indexOf(e.position) >= 0) {
                      selectedPlayers.keepers.push(<li><a className="player" onClick={this.handleClick.bind(this, i, this.props.players.players)}>{e.name}<i className="fa fa-plus-circle"></i></a></li>);
                    };
                   if (['Left Wing','Right Wing','Centre Forward'].indexOf(e.position) >= 0) {
                     selectedPlayers.forwards.push(<li><a className="player" onClick={this.handleClick.bind(this, i, this.props.players.players)}>{e.name}<i className="fa fa-plus-circle"></i></a></li>);
                    }
                    if (['Centre Back','Left-Back','Right-Back'].indexOf(e.position) >= 0) {
                     selectedPlayers.defenders.push(<li><a className="player" onClick={this.handleClick.bind(this, i, this.props.players.players)}>{e.name}<i className="fa fa-plus-circle"></i></a></li>);
                    }
                    if (['Defensive Midfield','Central Midfield','Attacking Midfield','Right Midfield','Left Midfield'].indexOf(e.position) >= 0) {
                     selectedPlayers.midfielder.push(<li><a className="player" onClick={this.handleClick.bind(this, i, this.props.players.players)}>{e.name}<i className="fa fa-plus-circle"></i></a></li>);
                    }
               }.bind(this))
            };
		}
        return (
           <div className="loadingWrapper">
            <div id="" className="selectedPlayers"></div>
            <h3>{this.props.data.name}</h3>
                <ul className="list-unstyled">
                    <h4>Keepers</h4>
                    {selectedPlayers.keepers}
                    <h4>Defenders</h4>
                     {selectedPlayers.defenders}
                    <h4>Midfielders</h4>
                     {selectedPlayers.midfielder}
                    <h4>Forwards</h4>
                     {selectedPlayers.forwards}
                </ul>
           </div>
          );     
       }
});


export default Team;