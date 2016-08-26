

export const addReducer = (state= initialiseStates, action) => {		
  switch(action.type) {  
	case 'addPlayer':
		var state = {p: Object.assign(state.p, {
			[action.pos]: state.p[action.pos].concat(action)
		})}
	return state
  	case  'clear' :
    state = initialState
	return state;	
	case 'removePlayer' :
	var state = {p: Object.assign(state.p, {
			[action.pos]: state.p[action.pos].slice(2)
		})}
	return state		
	default:
	return state;
	}
}

export default addReducer;


    
    