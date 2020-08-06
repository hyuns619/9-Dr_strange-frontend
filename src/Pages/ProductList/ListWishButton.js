import React from "react";
import { WISH_BTN1, WISH_BTN2 } from "config";

class ListWishButton extends React.Component {
  constructor() {
    super();
    this.state = {
      fill: "transparent",
      click: false,
      wishNum: 0,
    };
  }

  // 버튼 클릭 시 click state 변경
  handleClick = () => {
    this.setState({
      click: !this.state.click,
    });
  };

  // like number 가져오기
  componentDidMount() {
    this.setState({
      wishNum: +this.props.like,
    });
  }

  render() {
    const { click, wishNum } = this.state;

    return (
      <button className="WishButton">
        <svg
          onClick={this.handleClick}
          version="1.1"
          viewBox="0 0 24 21"
          className="WishButtonPc__icon svg-icon svg-fill"
        >
          <path
            pid="0"
            className="st0"
            d={WISH_BTN1}
            style={{ fill: click ? "yellow" : "transparent" }}
          ></path>
          <path pid="1" className="st1" d={WISH_BTN2}></path>
        </svg>
        <span className="wish_number">{click ? wishNum + 1 : wishNum}</span>
      </button>
    );
  }
}

export default ListWishButton;
