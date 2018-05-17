const itemsReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_USER_ITEM' : 
      return [...state, {
        item: action.item, 
        buyPrice: action.buyPrice,
        uniqueID: Date.now()
      }]
    case 'REMOVE_USER_ITEM' :
      let newState = state.filter(item => item.uniqueID !== action.uniqueID)
      return newState
    default:
      return state 
  }
} 

export default itemsReducer