
require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
require("./public/style/style.css")
require("./node_modules/font-awesome/css/font-awesome.css");
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
require("./node_modules/bootstrap/dist/js/bootstrap.min.js");


import TableLeague from "./Components/table";
import SelectTeams from "./Components/selectTeams";
import SelectPlayers from "./Components/selectPlayers";

var _ = require('lodash');

var Container = React.createClass({
	getInitialState: function() {
    	return {data:[] , p:{'Keeper' : [] , 'Defenders': [] , 'Midfield' : [], 'Forwards' : []}}
  	},
	servicesApi: function() {
    	$.ajax({
			url: this.props.url,
			dataType: 'json',
			headers: {'X-Auth-Token': '05cc4cef572747059c533ac416045756'},
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
  	},
	componentDidMount: function() {
		return this.servicesApi();
  	},
    onUpdatePlayers : function (newState) {
		var pos;
		
		if (newState.position.includes('Back')) {
			pos = 'Defenders'
		} else if (newState.position.includes('Midfield')){
			pos = 'Midfield'
		} else if (newState.position.includes('Forward') || newState.position.includes('Wing')) {
			pos = 'Forwards'
		} else {
			pos = newState.position;
		}
		var duplicated = _.some(this.state.p[pos], newState);
		if (duplicated == true) {return false};
		
		this.setState({
			p: Object.assign(this.state.p, {
				[pos]: this.state.p[pos].concat(newState)
			})
		})
		
	},
	render : function() {
		return (
			<div><h1>{this.state.data.leagueCaption}</h1>
			<div><span>{this.props.left}</span></div>
			<div className="col-md-5">
			<SelectPlayers data = {this.state.data} players= {this.state.p} a={this.state.a} />
			</div>
			<div className="col-md-6">
			<div className="col-md-6">
			<SelectTeams data={this.state.data} value='teamName' bindPlayers={this.onUpdatePlayers.bind(this)}/>
			</div>
			<div className="col-md-6">
			<TableLeague data={this.state.data} />
			</div>
			</div>
			</div>
		);
	}
});


ReactDOM.render(
     <Container title="EPL App" url="http://api.football-data.org/v1/soccerseasons/398/leagueTable"/>,document.getElementById('myApp')
);