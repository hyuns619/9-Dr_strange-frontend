import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavFooterIcon from "../NavFooterIcon";
import Menu from "Pages/Main/Main_HamburderList/Menu";
import {
  HAMBURGER_ICON,
  LOGO,
  PATH_SEARCH,
  PATH_WISH,
  PATH_CART,
  PATH_VIEWED,
  PATH_MYPAGE,
} from "config";
import "./Nav.scss";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      click: false,
    };
  }

  clickHandler = () => {
    return this.setState({
      click: !this.state.click,
    });
  };

  render() {
    const {
      cartList,
      userInput,
      pressEnterHandler,
      inputChangeHandler,
    } = this.props;
    const loginToken = localStorage.getItem("token");

    return (
      <header className="Nav">
        <nav className="nav_container gray-bg">
          <div className="nav_menu m-auto m-w-1140">
            <ul>
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li
                className={
                  loginToken ? "none_nav_sign_up_btn" : "nav_sign_up_btn"
                }
              >
                <Link to="/signup">회원가입</Link>
              </li>
              <li>
                <a href="">매장찾기</a>
              </li>
              <li>
                <a href="">브랜드헤리티지</a>
              </li>
              <li>
                <a href="">고객센터</a>
              </li>
              <li>
                <a href="">매장찾기</a>
              </li>
              <li>
                <a href="">브랜드헤리티지</a>
              </li>
              <li>
                <a href="">고객센터</a>
              </li>
            </ul>
          </div>
        </nav>

        <nav className="customer_container">
          <div className="customer_menu m-auto m-w-1140">
            <button
              className="hamburger_menu"
              onClick={() => this.clickHandler()}
            >
              <img alt="hamburger_menu_icon" src={HAMBURGER_ICON} />
            </button>
            <div
              className="Menu_wrapper p-a"
              style={{ display: this.state.click ? "block" : "none" }}
            >
              <Menu />
            </div>

            <Link to="/">
              <img className="logo" alt="Dr.Martins_logo" src={LOGO} />
            </Link>

            <input
              className="search_form"
              type="text"
              placeholder="검색어를 입력해 주세요."
              value={userInput}
              onChange={(e) => inputChangeHandler(e)}
              onKeyPress={(e) => pressEnterHandler(e)}
            />
            <ul className="icon_list">
              <NavFooterIcon
                width="32"
                heigth="32"
                view="0 0 32 32"
                path={PATH_SEARCH}
              />
              <NavFooterIcon
                width="35"
                heigth="29"
                view="0 0 35 29"
                path={PATH_WISH}
              />
              <Link to="/cart">
                <div className="cartIcon">
                  <NavFooterIcon
                    width="28"
                    heigth="33"
                    view="0 0 28 33"
                    path={PATH_CART}
                  />
                  <p
                    className={
                      cartList.length > 0
                        ? "cartItemLength"
                        : "noneCartItemLength"
                    }
                  >
                    {cartList.length}
                  </p>
                </div>
              </Link>
              <NavFooterIcon
                width="39"
                heigth="28"
                view="0 0 39 28"
                path={PATH_VIEWED}
              />
              <Link to="/mypage">
                <NavFooterIcon
                  width="33"
                  heigth="32"
                  view="0 0 33 32"
                  path={PATH_MYPAGE}
                />
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartList: state.cartList,
  };
};

export default connect(mapStateToProps)(Nav);
