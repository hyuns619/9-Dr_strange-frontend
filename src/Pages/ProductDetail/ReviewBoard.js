import React from "react";
import Path from "Components/Path";
import { GUEST_ICON, REVIEW_IMG } from "config";

class ReviewBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }

  // 클릭 시 리뷰창이 펼쳐지고 닫히는 이벤트
  openReviewHandler = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    const { isActive } = this.state;
    const { name, title, img, rating, size, content } = this.props.data;

    return (
      <div className="ReviewBoard">
        <div className="review_board_top">
          <img alt="guest_icon" src={GUEST_ICON}></img>
          <p className="font-b">{name}</p>
        </div>
        <div className="review_board_title">
          <h3 className="font-b">{title}</h3>
          {img ? (
            <Path width="24" height="21" view="0 0 56 48" path={REVIEW_IMG} />
          ) : (
            ""
          )}
        </div>

        {isActive && img ? (
          <div className="review_img">
            <img alt={title} src={img} />
          </div>
        ) : (
          ""
        )}

        <div className="review_board_bottom">
          <span className="rating_star">{"★".repeat(rating)}</span>
          {isActive ? (
            <div className="review_content">
              <p>
                구매 사이즈<span>|</span>
                {size}
              </p>
              <p>{content}</p>
            </div>
          ) : (
            ""
          )}
          <button className="underline font-b" onClick={this.openReviewHandler}>
            {isActive ? "접기" : "펼쳐보기"}
          </button>
        </div>
      </div>
    );
  }
}

export default ReviewBoard;
