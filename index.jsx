
require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
require("./node_modules/bootstrap/dist/js/bootstrap.min.js");

import TableLeague from "./Components/table";
import SelectTeams from "./Components/selectTeams";
var _ = require('lodash');


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


ReactDOM.render(
     <Container title="EPL App" url="http://api.football-data.org/v1/soccerseasons/398/leagueTable"/>,document.getElementById('myApp')
);