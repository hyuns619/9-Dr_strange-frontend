import React from "react";
import Path from "Components/Path";
import { PATH_BACK } from "config";

class EmptyCart extends React.Component {
  render() {
    return (
      <div className="EmptyCart">
        <div className="empty_cart_wrapper">
          <div className="empty_cart_header">
            <button className="empty_back">
              <Path class="path" path={PATH_BACK} />
            </button>
            <h1 className="empty_cart_header_title">장바구니</h1>
          </div>

          <div className="empty_cart_container">
            <svg class="icon">
              <path
                className="first_icon"
                pid="0"
                fill="#ddd"
                d="M98 163v23H83v21h11v11h9l.023 11H165v-74h-19v-22h-42.977L103 155h9v-13h25v13h-12v8z"
              ></path>
              <path
                className="second_icon"
                pid="1"
                fill="#ddd"
                d="M83 218h11v11H83zM96.25 41h9v9h-9zM36.25.5h7.5V8h-7.5zM16.75 110h16.5v16.5h-16.5zM.25 99.5h7.5v7.5H.25zM60.25 195.5h4.5v4.5h-4.5zM75 152h4.577v4.908H75zM82 156h10v10H82zM27.25 161h12v12h-12zM39.25 72.5h12v12h-12z"
              ></path>
            </svg>
            <div className="cart_is_empty">
              <p>장바구니가 비어있습니다.</p>
            </div>
            <button className="continue_shopping">
              <span>쇼핑 계속하기</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EmptyCart;
