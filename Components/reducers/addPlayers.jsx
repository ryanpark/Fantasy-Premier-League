
import initialiseStates from "../../index";

export const addReducer = (state= initialiseStates, action) => {
	
	/*
		return this.setState({
			p: Object.assign(this.state.p, {
				[pos]: this.state.p[pos].concat(newState)
			})
		})*/
		
			
  switch(action.type) {
	  
	case 'addPlayer':
		var state = {p: Object.assign(state.p, {
			[action.pos]: state.p[action.pos].concat(action)
		})}
		
		return state
	
	case 'removePlayer':
		alert('removed');
	return {state : 'aaa'}
		 		
  	case  'clear' :
	
	return initialiseStates
  
			  /*
				return Object.assign(
					state , { p : {[action.pos] : [...state.p[action.pos], action]}
				})*/
				
				/*
				return Object.assign(
					state.p , {
						 [action.pos] :[...state.p[action.pos].concat(action)]
					
				})*/
				
		//	console.log(...state)
		
		
			/*
				return Object.assign(state, state, {
					count : action.count,
					p: [
					...state, {
						p:action.p
					}	
					]
				})*/
				/*
				return [
					...state, {
						count : action.count,
						p: 'sad'
					}
				]*/
			
	default:
	return state;
	}
}

export default addReducer;


    
    