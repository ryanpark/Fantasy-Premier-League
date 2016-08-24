
require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
require("./public/style/style.css")
require("./node_modules/font-awesome/css/font-awesome.css");
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider, connect}  from 'react-redux';
import $ from 'jquery';
require("./node_modules/bootstrap/dist/js/bootstrap.min.js");


import TableLeague from "./Components/table";
import SelectTeams from "./Components/selectTeams";
import SelectPlayers from "./Components/selectPlayers";
import Counter from './Components/reducers/addPlayers';


var _ = require('lodash');





class CounterUI extends React.Component {
  increment() {
    this.props.dispatch({
      type: 'INCREMENT'
    });
  }
  decrement() {
    this.props.dispatch({
      type: 'DECREMENT'
    });
  }
  render() {
	
    return (<div>
		<h1>CounterUI</h1>
        {this.props.state}
      <div>
        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button>
      </div>
    </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {state};
}



const CounterApp = connect(mapStateToProps)(CounterUI);

console.log(CounterApp);


var Container = React.createClass({
	getInitialState: function() {
    	return {data:[] , p:{'Keeper' : [2] , 'Defenders': [4] , 'Midfield' : [4], 'Forwards' : [3]}}
  	},
	servicesApi: function() {
		fetch(this.props.url)  
			.then(  
				function(response) {  
					if (response.status !== 200) {  
						console.log('Looks like there was a problem. Status Code: ' +  
							response.status);  
						return; 
					}
					// Examine the text in the response  
					response.json().then(function(data) {  
						return this.setState({data: data})  
					}.bind(this));  
				}  
			)  
			.catch(function(err) {  
				console.log('Fetch Error :-S', err);  
			});
		/*
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
		});*/
  	},
	componentDidMount: function() {
		return this.servicesApi();
  	},
  onUpdatePlayers : function (newState) {
	
		let pos;
		
		if (newState.position.includes('Back')) {
			pos = 'Defenders'
		} else if (newState.position.includes('Midfield')){
			pos = 'Midfield'
		} else if (newState.position.includes('Forward') || newState.position.includes('Wing')) {
			pos = 'Forwards'
		} else {
			pos = newState.position;
		}
		
		const duplicated = _.some(this.state.p[pos], newState);
		const maxLength = (pos) => {	
			if (this.state.p[pos].length > this.state.p[pos][0]) {
				return true;
			}
		 }
	
		if (duplicated == true || maxLength.call(this, pos)) {return false}
		
		return this.setState({
			p: Object.assign(this.state.p, {
				[pos]: this.state.p[pos].concat(newState)
			})
		})
	},
	onUpldateLogo : function (logo) {
		this.setState({logoUrl:logo})
	},
	render : function() {
		//create store	
		let store = createStore(Counter);
		
		
		return (
			<div><h1>{this.state.data.leagueCaption}</h1>
			
			 <Provider store={store}>
        <CounterApp />
      </Provider>
		
			<div><span>{this.props.left}</span></div>
			<div className="col-md-5">
			<SelectPlayers data = {this.state.data} players= {this.state.p} logo={this.state.logoUrl} />
			</div>
			<div className="col-md-6">
			<div className="col-md-6">
			<SelectTeams data={this.state.data} value='teamName' bindPlayers={this.onUpdatePlayers.bind(this)} bindLogo={this.onUpldateLogo.bind(this)} />
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
     <Container title="EPL App" url="http://api.football-data.org/v1/soccerseasons/398/leagueTable"></Container>,document.getElementById('myApp')
);

