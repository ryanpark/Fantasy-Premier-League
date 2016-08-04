import React from 'react';

var TableLeague = React.createClass({
	render: function () {
		var lists;
		if (typeof this.props.data.standing === 'undefined') {
			return null;
		} else {
		lists = this.props.data.standing.map(function(team , i) {
				return (
					<tr key={i}><td key={i}>{team.teamName}</td><td>{team.points}</td></tr>
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

export default TableLeague;