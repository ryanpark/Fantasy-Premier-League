
var _ = require('lodash');

export const addReducer = (state= initialiseStates, action) => {		
  switch(action.type) {  
	case 'addPlayer':
		var state = {p: Object.assign(state.p, {
			[action.pos]: state.p[action.pos].concat(action)
		})}
	return state
  	case  'clear' :
    var state = {p: state}
	return state;	
	case 'removePlayer' :
	var state = {p: Object.assign(state.p, {
			[action.pos]: state.p[action.pos].slice(0, action.removeNo).concat(state.p[action.pos].slice(action.removeNo + 1))
		})}
	return state		
	default:
	return state;
	}
}

export default addReducer;


    
    