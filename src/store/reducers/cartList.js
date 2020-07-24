// const onChangeQuantity = (state, action) => {
//   const { item, changeType, input } = action.payload;

//   if (changeType === "input") {
//     return item.currentQuantity === input;
//   }

//   return [, ...state];
// };
const cartList = (state = [], action) => {
  switch (action.type) {
    case "ADD_CART":
      console.log("store state : ", state, action);
      const newCartItem = action.payload;
      return [newCartItem, ...state];
    case "DELETE_CART":
      console.log(state, action);
      const filterItem = state.filter(
        (product) => product.productNum !== action.productNum
      );
      return filterItem;
    default:
      return state;
  }
};

export default cartList;
