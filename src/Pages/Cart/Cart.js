import React from "react";
import { connect } from "react-redux";
import EmptyCart from "./EmptyCart";
import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";
import CartProductList from "./CartProductList";
import ScrollTopBtn from "Components/ScrollTopBtn";
import Path from "Components/Path";
import { PATH_BACK, PATH_DEL_ICON } from "config";
import "styles/reset.scss";
import "styles/common.scss";
import "./Cart.scss";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      checkClick: true,
      select: 1,
      totalPrice: 0,
      totalDiscountedPrice: 0,
    };
  }

  componentDidMount() {
    this.setPriceState();
  }

  componentDidUpdate(prevProps, _) {
    if (this.props.cartList !== prevProps.cartList) {
      this.setPriceState();
    }
  }

  getTotalPrice = (data) => {
    let result = 0;
    for (let i in data) {
      result += data[i].originPrice;
    }
    return result;
  };

  getTotalDiscountedPrice = (data) => {
    let result = 0;
    for (let i in data) {
      result += data[i].originPrice - data[i].salePrice;
    }
    return result;
  };

  setPriceState = () => {
    const { cartList } = this.props;
    this.setState({
      totalPrice: this.getTotalPrice(cartList),
      totalDiscountedPrice: this.getTotalDiscountedPrice(cartList),
    });
  };

  checkBoxClickHandler = () => {
    this.setState({
      checkClick: !this.state.checkClick,
    });
  };

  render() {
    const { checkClick, select, totalPrice, totalDiscountedPrice } = this.state;
    const { cartList } = this.props;

    return (
      <div className="Cart">
        <Nav />

        <section
          className="cart_wrapper"
          style={{ display: select === 0 ? "none" : "block" }}
        >
          <div className="cart_header">
            <button>
              <Path width="34" height="22" view="0 0 34 22" path={PATH_BACK} />
            </button>
            <h1 className="cart_header_title">장바구니</h1>
          </div>
          <section className="cart_content_wrapper">
            <div className="cart_content_header">
              <div className="cart_content_topper">
                <button
                  className="checkbox_btn"
                  onClick={this.checkBoxClickHandler}
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
                  <p>전체선택</p>
                </button>
                <button className="del_btn" onClick={this.deleteAllHandler}>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 40 40"
                    class="del_btn_icon"
                  >
                    <path
                      fill="#666"
                      width={20}
                      height={20}
                      d={PATH_DEL_ICON}
                    />
                  </svg>
                  <p> 선택 삭제 ({select}) </p>
                </button>
              </div>
            </div>
            {cartList.map((data, idx) => (
              <CartProductList
                click={checkClick}
                data={data}
                itemIndex={idx}
                key={data.productNum}
                select={select}
                checkBoxClickHandler={this.checkBoxClickHandler}
              />
            ))}

            <aside className="cart_content_price">
              <div className="order_price_topper">
                <h1>주문 예정 금액</h1>
              </div>
              <div className="total_price_detail">
                <ul className="total_price">
                  <li className="total_price">총 상품 금액</li>
                  <li className="total_price_num num-font">
                    {totalPrice.toLocaleString()}
                  </li>
                </ul>
                <ul className="total_discounted">
                  <li className="total_discounted_price">할인금액</li>
                  <li className="total_discounted_price_num num-font">
                    (-){totalDiscountedPrice.toLocaleString()}
                  </li>
                </ul>
                <ul className="final_price">
                  <li className="final_price">총 결제 예정 금액</li>
                  <li className="final_price_num num-font">
                    {(totalPrice - totalDiscountedPrice).toLocaleString()}
                  </li>
                </ul>
              </div>
              <button className="purchase_btn">
                <span>구매하기</span>
              </button>
            </aside>
          </section>
          <div className="top_btn">
            <ScrollTopBtn />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartList: state.cartList,
  };
};

export default connect(mapStateToProps)(Cart);
