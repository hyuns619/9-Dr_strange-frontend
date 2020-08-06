export const addCartActionHandler = (state, addCart) => {
  const { productData, currentSize, currentQuantity } = state;
  const cartInfo = { ...productData, currentSize, currentQuantity };
  addCart(cartInfo);
  alert("상품이 장바구니에 담겼습니다.");
};
