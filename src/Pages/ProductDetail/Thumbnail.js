import React from "react";
import { withRouter } from "react-router-dom";

class Thumbnail extends React.Component {
  render() {
    const { className, productThumbnail, productThumbnailLink } = this.props;

    return (
      <>
        <button
          onClick={() =>
            this.props.history.push(`/products/detail/${productThumbnailLink}`)
          }
          target="_blank"
        >
          <img
            className={className}
            alt="product_thumbnail"
            src={productThumbnail}
          />
        </button>
      </>
    );
  }
}

export default withRouter(Thumbnail);
