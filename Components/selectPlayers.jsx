import React from 'react';
import Players from "./container/players";
import {store} from "../index";
import {initialiseStates} from '../index';
var _ = require('lodash');
const c = initialiseStates;
var SelectPlayers = React.createClass({
   clearPlayers : function () {
      
      store.dispatch({type:'clear', state: c})
      
   },
   removePlayer: function(e) {
       
       
       console.log(store)
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
     // console.log(e)
      store.dispatch(e);
    //  console.log(store.getState())
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