

export const addReducer = (state= initialiseStates, action) => {
	
	/*
		return this.setState({
			p: Object.assign(this.state.p, {
				[pos]: this.state.p[pos].concat(newState)
			})
		})*/
		
			
  switch(action.type) {
	  
	case 'INCREMENT':
	
	console.log(state)
			/*
			return Object.assign(state.p, {
				[action.pos]: state.p[action.pos].push(action.count)
			})*/
	return Object.assign(
		{ a: [...state.p[action.pos] , action] 
	})
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
				case 'DECREMENT':
				console.log(state)
				 return Object.assign(
				  //state, { p : [...state.p , action] },{action}
				  
				  state, { p: [...state.p , action] },{action} 
				)
				default:
				return state;
			}
}

export default addReducer;


    
    