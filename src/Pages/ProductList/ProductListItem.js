import React from "react";
import { withRouter } from "react-router-dom";
import ReactModal from "react-modal";
import CartModal from "Components/CartModal/CartModal";
import ListWishButton from "Pages/ProductList/ListWishButton";
import "./ProductList.scss";

class ProductListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };
  }

  // 장바구니 버튼 클릭시 modalIsOpen state 변경
  modalClickHandelr = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    });
  };

  render() {
    const { modalIsOpen } = this.state;
    const {
      clickHandler,
      data: {
        productImg,
        productNum,
        productName,
        color,
        like,
        salePrice,
        originPrice,
      },
    } = this.props;
    const [productImgLeft, productImgRight] = productImg;

    const styleSet = {
      overlay: {},
      content: {
        border: "none",
        borderRadius: "none",
        width: "600px",
        height: "500px",
        padding: "0",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      },
    };

    return (
      <section className="ProductListItem">
        {productImg.length === 1 ? (
          <div
            className="product_img_one"
            onClick={() => clickHandler(productNum)}
          >
            <img alt="product_list_img" src={productImgLeft} />
          </div>
        ) : (
          <div
            className="product_img_two"
            onClick={() => clickHandler(productNum)}
          >
            <img alt="product_list_img" src={productImgLeft} />
            <img alt="product_list_img" src={productImgRight} />
          </div>
        )}
        <div className="product_list_info">
          <div className="list_info_content">
            <h2>{productName}</h2>
            <p className="product_color">{color}</p>
            <ListWishButton like={like} />
          </div>
          <div className="list_info_option">
            {salePrice !== originPrice ? (
              <>
                <p className="sale_price num-font">
                  {(+salePrice).toLocaleString()}
                </p>
                <p className="origin_price_ws num-font">
                  {(+originPrice).toLocaleString()}
                </p>
              </>
            ) : (
              <p className="origin_price num-font">
                {(+originPrice).toLocaleString()}
              </p>
            )}
            <button onClick={this.modalClickHandelr}>장바구니 담기</button>
            <ReactModal
              isOpen={modalIsOpen}
              onRequestClose={this.modalClickHandelr}
              style={styleSet}
            >
              <CartModal modalClickHandelr={this.modalClickHandelr} />
            </ReactModal>
          </div>
        </div>
      </section>
    );
  }
}
export default withRouter(ProductListItem);
