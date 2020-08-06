export const addCart = (cartInfo) => ({
  type: "ADD_CART",
  payload: cartInfo,
});

export const changeQuantity = (cartInfo, changeType, input) => ({
  type: "CHANGE_QUANTITY",
  payload: { item: cartInfo, changeType, input },
});

export const deleteCart = (productNum) => ({
  type: "DELETE_CART",
  productNum,
});
