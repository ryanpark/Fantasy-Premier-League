import React from 'react';
import Players from "./container/players";
import {store} from "../index";
import {initialiseStates} from '../index';
var _ = require('lodash');

var SelectPlayers = React.createClass({
   clearPlayers : function () {
      const gStore = store.getState();
      const clearStored = _.forEach(gStore.p , function(e,i) {
        if (e.length > 1) {
            gStore.p[i].splice(1, e.length)
        }
      });
      store.dispatch({type:'clear', state: clearStored , budget : 100000000 })
   },
   removePlayer: function(e) {
      e.type = 'removePlayer'
      const slicedNumber = store.getState().p[e.pos].map(function(i , n) {
           if ( e.name == i.name) {
               return n
           }
       }).filter(function(x) {
         return typeof x !== 'undefined';
       })
      e.removeNo = slicedNumber[0];
      e.budget = parseInt(e.marketValue.slice(0,-1).replace(/,/g, ''));
      store.dispatch(e);
   },
   render : function () {
        return (
            <div>
            <div className="playersContainer">
                <Players list = {this.props.players.p} bindRemovePlayer={this.removePlayer.bind(this)}/>
            </div>
            <button className="btn btn-default" onClick={this.clearPlayers.bind(this)}>Start Over</button>
            </div>
        )
   } 
    
});

export default SelectPlayers;