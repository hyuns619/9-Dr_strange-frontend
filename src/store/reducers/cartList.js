const cartList = (state = [], action) => {
  switch (action.type) {
    case "ADD_CART":
      const newCartItem = action.payload;
      return [newCartItem, ...state];
    case "DELETE_CART":
      const delIdx = action.itemIndex;
      const filteredItem = state.filter((_, idx) => {
        return state[idx] !== state[delIdx];
      });
      return filteredItem;
    default:
      return state;
  }
};

export default cartList;
