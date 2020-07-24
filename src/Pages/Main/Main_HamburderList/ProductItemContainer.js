import React from "react";
import ReactModal from "react-modal";
import CartModal from "Components/CartModal/CartModal";
import WishButton from "Components/WishButton";

class ProductItemContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryList: {},
      productName: "",
      like: 0,
      productImg: [],
      originPrice: 0,
      modalIsOpen: false,
    };
  }

  // 장바구니 버튼 클릭시 modalIsOpen state 변경
  modalClickHandelr = () => {
    const { modalIsOpen } = this.state;
    this.setState({
      modalIsOpen: !modalIsOpen,
    });
  };

  render() {
    const { modalIsOpen } = this.state;
    const {
      componentKey,
      data: { productName, salePrice, originPrice },
    } = this.props;
    const [productImgLeft, productImgRight] = this.props.data.productImg;

    return (
      <div className="product_item out_n" key={componentKey}>
        <div className="ProductItemContainer">
          <h2 className="product_item_container_title">{productName}</h2>
          <div>
            <WishButton />
          </div>
          <div className="product_item_img_box">
            <img alt={productName} src={productImgLeft && productImgLeft} />
            <img alt={productName} src={productImgRight && productImgRight} />
          </div>
          <div className="product_item_container_bottom">
            <div className="product_item_price_wrapper num-font">
              <span className="num-font">
                {salePrice !== originPrice ? (
                  <>
                    <p className="sale_price num-font">
                      {(+salePrice).toLocaleString()}
                    </p>
                    <p className="origin_price_ws num-font">
                      {(+originPrice).toLocaleString()}
                    </p>
                  </>
                ) : salePrice ? (
                  <p className="origin_price num-font">
                    {(+originPrice).toLocaleString()}
                  </p>
                ) : (
                  ""
                )}
              </span>
            </div>
            <button className="add_to_cart" onClick={this.modalClickHandelr}>
              장바구니 담기
            </button>
            <ReactModal
              isOpen={modalIsOpen}
              onRequestClose={this.modalClickHandelr}
              style={{
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
              }}
            >
              <CartModal modalClickHandelr={this.modalClickHandelr} />
            </ReactModal>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItemContainer;
