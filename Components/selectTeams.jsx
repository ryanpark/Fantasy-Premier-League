import React from 'react';
import Team from "./team";

function sortBy (targetData, value) {
	return _.sortBy(targetData , value);
}

var SelectTeams = React.createClass({
	getInitialState: function() {
    	return {data: []};
  	},
	alertMe: function() {
		console.log(this.state);	
	},
	getTeams : function(dataUrl) {
		var self = this;
		var teams = $.ajax({
			url: dataUrl,
			dataType: 'json',
			cache: false,
			headers: {'X-Auth-Token': '05cc4cef572747059c533ac416045756'},
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error('sad');
			}
		}),
		  players = teams.then(function(data) {
             // .then() returns a new promise
			 console.log(data._links.players.href)
             return $.ajax({
				url: data._links.players.href,
				dataType: 'json',
				cache: false,
				headers: {'X-Auth-Token': '05cc4cef572747059c533ac416045756'},
				success: function(data) {
					this.setState({players: data});
					this.alertMe();
				}.bind(self),
				error: function(xhr, status, err) {
					console.error('sad');
				}
             });
         });
	},
    handleClick: function(c) {
        this.getTeams(c)
    },
	render: function () {
		var clubs , self = this;
		if (typeof this.props.data.standing === 'undefined') {
			return null;
		} else {
			
			clubs = sortBy(this.props.data.standing, this.props.value);
			clubs = clubs.map(function(c) {
				return (<li><a onClick={this.handleClick.bind(this, c._links.team.href)}  data-url={c._links.team.href}>{c.teamName}</a></li>);
			}.bind(this))
		}
		return ( 
			<div>
			<div className="dropdown">
			 <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">

    			{this.state.data.shortName || 'Clubs'}

    				<span className="caret"></span>
  				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">{clubs}</ul>
			</div>
			<Team data={this.state.data} selectPlayers={this.state.players}/>
			</div>
		)
	}
});

export default SelectTeams;