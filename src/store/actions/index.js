export const addCart = (cartInfo) => ({
  type: "ADD_CART",
  payload: cartInfo,
});

export const deleteCart = (itemIndex) => ({
  type: "DELETE_CART",
  itemIndex,
});
