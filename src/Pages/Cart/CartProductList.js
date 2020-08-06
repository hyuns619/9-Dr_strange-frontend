import React from "react";
import { connect } from "react-redux";
import WishButton from "Components/WishButton";
import { deleteCart } from "store/actions";
import { PATH_CLOSE_ICON } from "config";
import "./Cart.scss";

class CartProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      checkClick: true,
      singleOriginPrice: 0,
      singleSalePrice: 0,
      totalPrice: 0,
      totalDiscountedPrice: 0,
      finalPrice: 0,
    };
  }

  productSelectClickHandelr = () => {
    const { checkClick } = this.state;
    const { select } = this.props;
    this.setState({
      checkClick: !checkClick,
      select: checkClick ? select + 1 : select,
    });
  };

  selectDelHandler = (itemIndex) => {
    const { deleteCart } = this.props;
    deleteCart(itemIndex);
    alert("선택하신 상품이 장바구니에서 삭제되었습니다.");
  };

  render() {
    const { checkClick } = this.state;
    const {
      itemIndex,
      data: {
        productNum,
        productImg,
        productName,
        color,
        currentSize,
        currentQuantity,
        salePrice,
      },
    } = this.props;

    return (
      productName && (
        <section className="CartProductList">
          <main className="cart_content_product">
            <div className="cart_content">
              <button
                className="checkbox_btn"
                onClick={this.productSelectClickHandelr}
              >
                <input
                  type="checkbox"
                  value="checked"
                  className="checktest"
                  style={{ display: "none" }}
                />
                <label
                  for="checktest"
                  className="check_label"
                  style={{
                    background: checkClick ? "" : "none",
                    border: checkClick ? "none" : "3px solid",
                  }}
                />
              </button>
              <button
                className="close_btn"
                onClick={() => this.selectDelHandler(productNum)}
              >
                <svg viewBox="0 0 42 42" fill="#666">
                  <path pid="0" d={PATH_CLOSE_ICON}></path>
                </svg>
              </button>
              <div className="order_product_info_container">
                {productImg && (
                  <img
                    className="product_img"
                    src={productImg[0]}
                    alt={"product-img"}
                  />
                )}

                <div className="order_product_info">
                  <h2 className="order_product_title">{productName}</h2>
                  <ul className="order_product_detail">
                    <li className="detail_info">컬러: {color}</li>
                    <li className="detail_info">사이즈(UK) {currentSize}</li>
                    <li className="detail_info">수량 : {currentQuantity}</li>
                    <li className="point_option_btn">
                      <p>포인트 사용 불가</p>
                    </li>
                  </ul>
                  <div className="product_item_price_wrapper num-font">
                    <span className="num-font">
                      {salePrice.toLocaleString()}
                    </span>
                    <button className="option_chagne">옵션/수량 변경</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="order_content_footer">
              <WishButton />
              <button className="add_wish">
                <span>위시리스트 담기</span>
              </button>
            </div>
          </main>
        </section>
      )
    );
  }
}

export default connect(null, { deleteCart })(CartProductList);
