import React from "react";
import { connect } from "react-redux";
import SizeBtn from "Components/SizeBtn";
import { addCart } from "store/actions";
import { addCartActionHandler } from "./addCartFunction";
import { MODAL_CANCEL, PLUS, MINUS } from "config";
import "./CartModal.scss";

class CartModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: {},
      currentSize: 0,
      currentQuantity: 1,
      currentSale: 0,
      currentOrigin: 0,
    };
  }

  componentDidMount() {
    // fetch(`${DETAIL_API}/${productAPI}`)
    fetch("http://localhost:3000/data/productDetailInfo.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          productData: res.productDetailInfo,
          currentSale: res.productDetailInfo.salePrice,
          currentOrigin: res.productDetailInfo.originPrice,
        })
      );
  }

  // size button 클릭 시 선택한 size를 currentSize에 저장
  sizeClickHandler = (size) => {
    const { soldout } = this.props;
    const { currentSize } = this.state;
    if (!soldout) {
      this.setState({
        currentSize: size,
      });
    }
    if (currentSize === size) {
      this.setState({
        currentSize: 0,
      });
    }
  };

  // price +, - 버튼 클릭 시 수량 및 가격 변동
  priceClickHandler = (type) => {
    const { currentQuantity, currentOrigin, currentSale } = this.state;
    const { originPrice, salePrice } = this.state.productData;
    if (currentQuantity > 1 && type === "minus") {
      this.setState({
        currentOrigin: +currentOrigin - +originPrice,
        currentSale: +currentSale - +salePrice,
        currentQuantity: currentQuantity - 1,
      });
    }
    if (type === "plus") {
      this.setState({
        currentOrigin: +currentOrigin + +originPrice,
        currentSale: +currentSale + +salePrice,
        currentQuantity: currentQuantity + 1,
      });
    }
  };

  // input 창에 수량 입력 시 현재 수량 및 가격 변동
  setInputHandler = (e) => {
    const { originPrice, salePrice } = this.state.productData;
    this.setState({
      currentQuantity: +e.target.value,
      currentOrigin: +originPrice * +e.target.value,
      currentSale: +salePrice * +e.target.value,
    });
  };

  // 장바구니 버튼 클릭시 상품 store에 저장
  addCartHandler = () => {
    const { modalClickHandelr, addCart } = this.props;
    addCartActionHandler(this.state, addCart);
    modalClickHandelr();
  };

  render() {
    const {
      productData,
      currentSize,
      currentQuantity,
      currentOrigin,
      currentSale,
    } = this.state;
    const { modalClickHandelr } = this.props;

    return (
      productData.productNum > 0 && (
        <section className="CartModal">
          <div className="modal_top">
            <h1>옵션</h1>
            <img alt="cancel" src={MODAL_CANCEL} onClick={modalClickHandelr} />
          </div>

          <div className="product_title">
            <h1>{productData.productName}</h1>
            <p>컬러 : {productData.color}</p>
          </div>

          <div className="now_in_stock">
            <h2>사이즈(UK) 선택</h2>
            <a className="underline" href="">
              품절상품 재입고 알림
            </a>
          </div>

          <div className="size_option">
            {Object.entries(productData.size).map((size, idx) => (
              <SizeBtn
                size={size[0]}
                soldout={size[1]}
                key={idx}
                currentSize={currentSize}
                sizeClickHandler={this.sizeClickHandler}
              />
            ))}
          </div>

          <dciv className="product_price_form">
            <div className="product_quantity">
              <p>수량</p>
              <input
                className="main-font"
                type="text"
                value={currentQuantity}
                onChange={this.setInputHandler}
              />
              <button onClick={() => this.priceClickHandler("minus")}>
                <img alt="-" className="btn_minus" src={MINUS} />
              </button>
              <button onClick={() => this.priceClickHandler("plus")}>
                <img alt="+" className="btn_plus" src={PLUS} />
              </button>
            </div>
            <div className="product_item_price num-font">
              {currentSale !== currentOrigin ? (
                <>
                  <span className="sale_price">
                    {(+currentSale).toLocaleString()}
                  </span>
                  <span className="origin_price_ws">
                    {(+currentOrigin).toLocaleString()}
                  </span>
                </>
              ) : (
                <>
                  <span className="origin_price">
                    {(+currentOrigin).toLocaleString()}
                  </span>
                </>
              )}
            </div>
          </dciv>

          <div className={currentSize !== 0 ? "cart_btn_on" : "cart_btn_off"}>
            <button onClick={() => this.addCartHandler()}>
              {currentSize !== 0 ? "장바구니 담기" : "사이즈를 선택해주세요."}
            </button>
          </div>
        </section>
      )
    );
  }
}

export default connect(null, { addCart })(CartModal);
