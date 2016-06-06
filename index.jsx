import $ from 'jquery';
require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
require("./node_modules/bootstrap/js/dropdown.js")
import React from 'react';
import ReactDOM from 'react-dom';
var _ = require('lodash');

function sortBy (targetData, value) {
	return _.sortBy(targetData , value);
}

var Container = React.createClass({
	getInitialState: function() {
    	return {data: []};
  	},
	servicesApi: function() {
    	$.ajax({
			url: this.props.url,
			dataType: 'json',
			headers: {'X-Auth-Token': '05cc4cef572747059c533ac416045756'},
			cache: false,
			success: function(data) {
				this.setState({data: data});
				console.log(this.state);
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
  	},
	componentDidMount: function() {
		this.servicesApi();
  	},
	render : function() {
		return (
			<div><h1>{this.state.data.leagueCaption}</h1>
			<div className="col-md-6">
			
			</div>
			<div className="col-md-4">
			<SelectTeams data={this.state.data} value='teamName' />
			<TableLeague data={this.state.data} />
			</div>
			</div>
		);
	}
});
var SelectTeams = React.createClass({
	render: function () {
		var clubs;
	//	clubs = this.sortBy.bind(this, this.data.value);
	//	console.log(sortBy.bind(this.state.data, 'teamName'));
		if (typeof this.props.data.standing === 'undefined') {
			return null;
		} else {
			clubs = sortBy(this.props.data.standing, this.props.value);
			clubs = clubs.map(function(c) {
				return (<li><a href="#" url={c._links.team.href}>{c.teamName}</a></li>);
			})
		}
		return ( 
			<div className="dropdown">
			 <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    			Clubs
    				<span className="caret"></span>
  				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">{clubs}</ul>
			</div>
			
		)
	}
});
var TableLeague = React.createClass({
	render: function () {
		var lists;
		if (typeof this.props.data.standing === 'undefined') {
			return null;
		} else {
		lists = this.props.data.standing.map(function(team) {
				return (
					<tr><td>{team.teamName}</td><td>{team.points}</td></tr>
				)
			})
		}
	
		return (
			<table className="table">
				<thead>
				<tr>
				<th>
				Clubs
				</th>
				<th>
				Points
				</th>
				</tr>
				</thead>
				<tbody>
				{lists}
				</tbody>
			</table>
    	);
	}
})

ReactDOM.render(
     <Container title="EPL App" url="http://api.football-data.org/v1/soccerseasons/398/leagueTable"/>,document.getElementById('myApp')
);