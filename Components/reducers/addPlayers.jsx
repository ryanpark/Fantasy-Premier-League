
import { composeResetReducer } from 'redux-reset-store';
import {initialiseStates} from '../../index';

var _ = require('lodash');


export const addReducer = composeResetReducer(function addReducer(state= initialiseStates, action) {
	
	switch(action.type) {  
	case 'addPlayer':
		var state = {
			budget: state.budget - action.budget, 
			p: Object.assign(state.p, {
			[action.pos]: state.p[action.pos].concat(action)
		})}
	return state
 	case  'clear': 
	var state = {
		budget : action.budget,
		p : action.state
	}
	return state;
	case 'removePlayer' :
	var state = {
		budget: state.budget + action.budget,
		p: Object.assign(state.p, {
			[action.pos]: state.p[action.pos].slice(0, action.removeNo).concat(state.p[action.pos].slice(action.removeNo + 1))
		})}
	return state		
	default:
	return state;
	}

}, initialiseStates);


export default addReducer;


    
    