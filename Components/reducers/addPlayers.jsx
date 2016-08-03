export const AddPlayers = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}

export default AddPlayers;