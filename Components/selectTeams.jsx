import React from 'react';
import Team from "./team";

function sortBy (targetData, value) {
	return _.sortBy(targetData , value);
}

var SelectTeams = React.createClass({
	getInitialState: function() {
    	return {data: []};
  	},
	getTeams : function(dataUrl) {
		$.ajax({
			url: dataUrl,
			dataType: 'json',
			cache: false,
			headers: {'X-Auth-Token': '05cc4cef572747059c533ac416045756'},
			success: function(data) {
				this.setState({data: data});
				console.log(this.state)
			}.bind(this),
			error: function(xhr, status, err) {
				console.error('sad');
			}.bind(this)
		});
	},
    handleClick: function(c) {
        this.getTeams(c)
    },
	componentDidMount : function () {
		this.handleClick();	
		this.getTeams();
	},
	render: function () {
		var clubs , self = this;
	//	clubs = this.sortBy.bind(this, this.data.value);
	//	console.log(sortBy.bind(this.state.data, 'teamName'));
		if (typeof this.props.data.standing === 'undefined') {
			return null;
		} else {
			clubs = sortBy(this.props.data.standing, this.props.value);
			clubs = clubs.map(function(c) {
				return (<li><a onClick={this.handleClick.bind(this, c._links.team.href)} data-url={c._links.team.href}>{c.teamName}</a></li>);
			}.bind(this))
		}
		return ( 
			<div>
			<div className="dropdown">
			 <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
<<<<<<< HEAD
    			{this.state.data.shortName || 'Clubs'}
=======
    			{this.state.data.name || "Clubs"}
>>>>>>> origin/ver1
    				<span className="caret"></span>
  				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">{clubs}</ul>
			</div>
			<Team data={this.state.data} />
			</div>
		)
	}
});

export default SelectTeams;