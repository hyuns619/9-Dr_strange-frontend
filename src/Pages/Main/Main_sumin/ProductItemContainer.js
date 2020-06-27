import React from "react";
import "styles/reset.scss";
import WishButton from "Components/WishButton";

class ProductItemContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      productData: {},
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/productDetailInfo.json")
      .then((res) => res.json())
      .then((res) => this.setState({ productData: res.productDetailInfo[0] }));
  }

  render() {
    return (
      <div className="ProductItemContainer">
        <h2 className="product_item_container_title">
          {this.state.productData.productName}
        </h2>
        <div>
          <WishButton />
        </div>
        <div className="product_item_img_box">
          <img
            alt={this.state.productData.productName}
            src={
              this.state.productData.productImg &&
              this.state.productData.productImg[0]
            }
          />
          <img
            alt={this.state.productData.productName}
            src={this.state.productData.productThumbnail}
          />
        </div>
        <div className="product_item_container_bottom">
          <div className="product_item_price_wrapper num-font">
            <span className="product_item_price num-font">170,000</span>
          </div>
          <button className="add_to_cart">장바구니 담기</button>
        </div>
      </div>
    );
  }
}

export default ProductItemContainer;