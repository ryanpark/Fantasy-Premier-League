import React from 'react';

var Players = React.createClass({
   getInitialState: function() {
    	return {all:[]};
  	},
   getPlayers : function(dataUrl) {
		 $.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			headers: {'X-Auth-Token': '05cc4cef572747059c533ac416045756'},
			success: function(data) {
				this.setState({players: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error('sad');
			}.bind(this)
		});
	},   
    componentWillUpdate  : function () {
       this.getPlayers();
    },
    componentDidMount : function() {
       this.getPlayers();
       this.setState({})
    },
   render : function () {
       var lists;
       if (typeof this.state.players === 'undefined') {
			return null;
		} else {
          lists = this.state.players.players.map(function(p) {
              return (<li>{p.name}</li>)
            }.bind(this));
        }
       return (
           <ul>
           {lists}
           </ul>
          );
   } 
});


export default Players;