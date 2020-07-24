import React from "react";
import ReactModal from "react-modal";
import CartModal from "Components/CartModal/CartModal";
import ListWishButton from "Pages/ProductList/ListWishButton";

class ProductPreview extends React.Component {
  constructor() {
    super();
    this.state = {
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
    const [productImgLeft, productImgRight] = this.props.data.productImg;
    const {
      productName,
      productImg,
      color,
      like,
      salePrice,
      originPrice,
    } = this.props.data;

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
      <section className="ProductPreview">
        {productImg && (
          <div className="product_img_two">
            <img alt={productName} src={productImgLeft} />
            <img alt={productName} src={productImgRight} />
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
            ) : originPrice ? (
              <p className="origin_price num-font">
                {(+originPrice).toLocaleString()}
              </p>
            ) : (
              ""
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
export default ProductPreview;
