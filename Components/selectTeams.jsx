import React from 'react';

function sortBy (targetData, value) {
	return _.sortBy(targetData , value);
}

var SelectTeams = React.createClass({
    handleClick: function(event) {
        console.log(event)
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
				return (<li><a onClick={this.handleClick.call(this)} data-url={c._links.team.href}>{c.teamName}</a></li>);
			}.bind(this))
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

export default SelectTeams;