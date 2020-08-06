import React from "react";
import { connect } from "react-redux";
import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";
import Path from "Components/Path";
import Thumbnail from "./Thumbnail";
import SizeBtn from "../../Components/SizeBtn";
import DetailWishButton from "./DetailWishButton";
import SizeTable from "./SizeTable";
import SubTitle from "./SubTitle";
import ReviewBoard from "./ReviewBoard";
import QnaBoard from "./QnaBoard";
import RefundForm from "./RefundForm";
import { addCart } from "store/actions";
import { addCartActionHandler } from "Components/CartModal/addCartFunction";
import {
  DETAIL_API,
  CART_API,
  MINUS,
  PLUS,
  PATH_SHARE,
  REVIEW_GENDER_M,
  REVIEW_GENDER_W,
} from "config";
import "./ProductDetail.scss";

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      productData: {},
      productThumbnail: [],
      productImg: [],
      sizeArr: [],
      currentSize: 0,
      like: 0,
      currentOrigin: 0,
      currentSale: 0,
      currentQuantity: 1,
      reviewArr: [],
      reviewFilter: 3,
    };
  }

  // ProductDetailInfo data 받아오기
  componentDidMount() {
    const productAPI = this.props.match.params.id;
    // fetch(`${DETAIL_API}/${productAPI}`)
    fetch("http://localhost:3000/data/productDetailInfo.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          productData: res.productDetailInfo,
          productNum: res.productDetailInfo.productNum,
          productThumbnail: Object.entries(
            res.productDetailInfo.productThumbnail
          ),
          sizeArr: Object.entries(res.productDetailInfo.size),
          like: res.productDetailInfo.like,
          currentOrigin: +res.productDetailInfo.originPrice,
          currentSale: +res.productDetailInfo.salePrice,
          reviewArr: res.productDetailInfo.reviewInfo,
          productImg: res.productDetailInfo.productImg,
        })
      );
    window.scrollTo(0, 0);
  }

  // color 버튼 클릭할 때 마다, 다른 상품으로 렌더링
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const productAPI = this.props.match.params.id;
      fetch(`${DETAIL_API}/${productAPI}`)
        .then((res) => res.json())
        .then((res) =>
          this.setState({
            productData: res.productDetailInfo,
          })
        )
        .finally(() => {
          this.setState({
            productNum: this.state.productData.productNum,
            productThumbnail: Object.entries(
              this.state.productData.productThumbnail
            ),
            sizeArr: Object.entries(this.state.productData.size),
            like: this.state.productData.like,
            currentOrigin: +this.state.productData.originPrice,
            currentSale: +this.state.productData.salePrice,
            reviewArr: this.state.productData.reviewInfo,
            productImg: this.state.productData.productImg,
          });
        });
    }
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

  // 더 많은 후기 보기 버튼 클릭 시 review board를 3개씩 추가로 출력
  reviewBtnHandler = () => {
    const { reviewFilter } = this.state;
    this.setState({
      reviewFilter: reviewFilter + 3,
    });
  };

  // 장바구니 버튼 클릭시 상품 정보 store에 저장
  addCartHandler = () => {
    const { addCart } = this.props;
    addCartActionHandler(this.state, addCart);
    this.clearCartInfo();
  };

  clearCartInfo = () => {
    const { originPrice, salePrice } = this.state.productData;
    this.setState({
      currentSize: 0,
      currentOrigin: +originPrice,
      currentSale: +salePrice,
      currentQuantity: 1,
    });
  };

  render() {
    const {
      productData,
      productImg,
      productThumbnail,
      currentSize,
      sizeArr,
      like,
      reviewArr,
      reviewFilter,
      currentOrigin,
      currentSale,
      currentQuantity,
    } = this.state;
    const review_filter = this.state.reviewArr.filter(
      (_, idx) => idx < this.state.reviewFilter
    );

    return (
      <section id="scroll_top">
        <Nav />
        <section className="ProductDetail m-w-1140 m-auto">
          <div className="detail_scroll_sidebar">
            <ul>
              <li>
                <a className="num-font" href="#scroll_top">
                  BUY NOW
                </a>
                <a className="main-font" href="#scroll_top">
                  구매하기
                </a>
              </li>

              <li>
                <a className="num-font" href="#scroll_spec">
                  SPEC
                </a>
                <a className="main-font" href="#scroll_spec">
                  상품상세설명
                </a>
              </li>

              <li>
                <a className="num-font" href="#scroll_review">
                  REVIEW
                </a>
                <a className="main-font" href="#scroll_review">
                  상품후기
                </a>
              </li>
              <li>
                <a className="num-font" href="#scroll_qna">
                  Q&A
                </a>
                <a className="main-font" href="#scroll_qna">
                  상품문의
                </a>
              </li>
              <li>
                <a className="num-font" href="#scroll_refund">
                  EXCHANGES &<br />
                  REFUNDS HELP
                </a>
                <a className="main-font" href="#scroll_refund">
                  교환/환불 안내
                </a>
              </li>
            </ul>
          </div>

          <article className="product_detail_container">
            <div className="lazy_img_form">
              {productImg.map((img, idx) => (
                <img alt="test" src={img} key={idx} />
              ))}
            </div>

            <div className="product_detail_form p-r">
              <div className="product_detail_sticky p-s t-0">
                <div className="product_detail_top p-r">
                  <Path
                    width="20"
                    height="23"
                    view="0 0 20 23"
                    path={PATH_SHARE}
                  />

                  {like > 0 && <DetailWishButton like={like} />}
                  <div className="review_count">
                    <p>
                      ★★★★★
                      <a href="#scroll_review" className="num-font underline">
                        {productData.reviewCount}
                      </a>
                      건
                    </p>
                  </div>
                </div>
                <h1>{productData.productName}</h1>
                <div className="now_in_stock">
                  <a href="">품절상품 재입고 알림</a>
                </div>

                <div className="size_option">
                  {sizeArr.map((size, idx) => (
                    <SizeBtn
                      size={size[0]}
                      soldout={size[1]}
                      key={idx}
                      currentSize={currentSize}
                      sizeClickHandler={this.sizeClickHandler}
                    />
                  ))}
                </div>

                <div className="product_colors">
                  {productThumbnail.map((thumbnail, idx) => (
                    <Thumbnail
                      className="product_thumbnail"
                      productThumbnail={thumbnail[1]}
                      productThumbnailLink={thumbnail[0]}
                      key={idx}
                    />
                  ))}
                </div>
                <div className="product_price_form">
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
                </div>

                <div className="buying_btn">
                  <button
                    className="buying_btn_cart main-font"
                    onClick={() => this.addCartHandler()}
                  >
                    장바구니
                  </button>
                  <button className="buying_btn_purchase main-font">
                    구매하기
                  </button>
                </div>
              </div>
            </div>
          </article>

          <article className="product_info_container" id="scroll_spec">
            <div className="product_size_guide">
              <h2>신발 사이즈</h2>
              <SizeTable />
            </div>

            <div className="product_info_form">
              <ul className="detail_info_list">
                <li>
                  <h3>모델명</h3>
                  <p className="black-gothic-font">{productData.productName}</p>
                </li>
                <li>
                  <h3>제조연월</h3>
                  <p>제품라벨 표기</p>
                </li>
                <li>
                  <h3>제품 주소재</h3>
                  <p className="black-gothic-font">{productData.material}</p>
                </li>
                <li>
                  <h3>모델명</h3>
                  <p>{productData.country}</p>
                </li>
              </ul>

              <div className="as_guide">
                <h3>A/S 책임자와 전화번호</h3>
                <p>
                  <span className="underline">1544-6486</span>(내선2번)
                </p>
                <p>전국 매장 유/무상 A/S</p>
              </div>

              <ul className="other_info_list gray-20-font info-list-style">
                <li>상품번호 : {productData.productNum}</li>
                <li>
                  치수 : UK 사이즈 기준(mm표기)/ 신발에 따라 사이즈 상이하니
                  구매 후기 참고 및 가까운 매장에서 착화 권장
                </li>
                <li>제조자 : Dr.Martens</li>
                <li>품질보증기준 : 소비자피해보상규정에 따름</li>
              </ul>
            </div>
          </article>

          <article className="product_attention_container">
            <div className="attention_guide">
              <h2>취급 시 주의사항</h2>
              <ul className="gray-20-font info-list-style">
                <li>
                  일반 가죽은 마른 헝겊으로 먼지를 털어낸 후<br />
                  '원더발삼'으로 관리합니다.
                </li>
                <li>
                  적당한 온도와 습도에서 가죽 제품 속에 보형물을
                  <br />
                  넣고 형태를 유지시키면서 보관해주세요.
                </li>
                <li>
                  스웨이드/누벅/화이트 색상 가죽은 발삼 사용을 제한합니다.
                </li>
                <li>
                  가죽 제품인 경우 젖었을 때 통풍이 잘 되는 그늘에서
                  <br />
                  건조해주세요.
                </li>
                <li>
                  습기, 수분, 강한 열, 기름기 있는 곳에서의 착용은
                  <br />
                  가죽 제품의 형태를 변화시킬 수 있으니 주의하여 주세요.
                </li>
                <li>
                  천연가죽 내피가 사용된 제품은 가죽 컬러의 물감이
                  <br />
                  배어 나오는 경우가 있으므로 주의하여 주세요.
                </li>
                <li>
                  가죽 제품인 경우 여름철 자동차의 트렁크나 차내,
                  <br />
                  고온다습한 장소에 방치하지 말아주세요.
                </li>
              </ul>
            </div>
            <div className="material_guide">
              <h2>소재 별 손질 및 보존 방법</h2>
              <ul className="gray-20-font info-list-style">
                <h3>스웨이드 누벅</h3>
                <li>
                  가벼운 오염은 부드러운 솔로 털어주거나 고무 지우개로
                  <br />
                  가볍게 문질러 제거해주세요.
                </li>
                <li>
                  물에 닿으면 얼룩, 탈색, 변형 등의 원인이 되므로 특히
                  <br />
                  주의하여주세요. 만약 젖었을 경우 바로 부드러운 면으로
                  <br />털 듯이 물기를 제거해주세요.
                </li>

                <h3>애나멜가죽</h3>
                <li>애나멜 전용 클리너를 사용해주세요.</li>

                <h3>합성(인조)가죽</h3>
                <li>
                  물에 젖었을 때 바로 부드러운 면으로 닦고 통풍이 잘 되는
                  <br />
                  그늘에서 건조시켜주세요.
                </li>
                <li>
                  오염 제거시 비눗물에 적신 천을 사용하고, 그 외의 보혁류를
                  <br />
                  사용할 필요가 없습니다.
                </li>

                <h3>섬유(의류) 세탁시 유의사항</h3>
                <li>
                  면 100%인 경우, 중성세제를 사용하여 차가운 물에 손세탁
                  <br />
                  또는 세탁기 이용시에는 세탁망에 넣은 후 짧은 시간 단독으로
                  <br />
                  세탁해주세요.
                </li>
                <li>
                  의류 및 액세서리의 경우, 제품에 부착된 케어라벨의
                  <br />
                  세탁 방법을 참조해주세요.
                </li>
                <li>
                  30도 이하의 물 온도에서 30분 이내 손세탁 혹은 드라이클리닝
                  <br />
                  해주세요.
                </li>
                <li>세탁시 색상 구분하여 단독 세탁해주세요.</li>
                <li>표백제는 사용 불가합니다.</li>
              </ul>
            </div>
          </article>

          {/* <article className="product_recommend_container">
            <h2>당신이 좋아할 것 같은</h2>
            <div className="product_item_wrapper">
              <div className="test"></div>
              <div className="test"></div>
            </div>
          </article> */}

          <article className="product_review_container" id="scroll_review">
            <SubTitle title="상품후기" />

            <div className="review_rating">
              <p>
                후기
                <span> {productData.reviewCount}</span>개 / 별점{" "}
                {(+productData.averageRate).toFixed(1)}
              </p>
              <span className="yellow">★★★★★</span>
            </div>

            <div className="review_state">
              <div className="review_state_gender">
                <h3>성별 구매 평균</h3>
                <div className="gender_form">
                  <span>
                    <p className="review-g-font">남성</p>
                    <img alt="gender_man" src={REVIEW_GENDER_M} />
                    <p className="review-b-font">34</p>
                  </span>
                  <span>
                    <p className="review-g-font">여성</p>
                    <img alt="gender_woman" src={REVIEW_GENDER_W} />
                    <p className="review-b-font">66</p>
                  </span>
                </div>
              </div>

              <div className="review_state_age">
                <h3>연령별 구매 평균</h3>
                <div className="age_form">
                  <span>
                    <p className="review-g-font">10대</p>
                    <div className="percent_empty p-r">
                      <div className="percent_fill_1040 p-a" />
                    </div>
                    <p className="review-b-font">10</p>
                  </span>

                  <span>
                    <p className="review-g-font">20대</p>
                    <div className="percent_empty p-r">
                      <div className="percent_fill_20 p-a" />
                    </div>
                    <p className="review-b-font">48</p>
                  </span>

                  <span>
                    <p className="review-g-font">30대</p>
                    <div className="percent_empty p-r">
                      <div className="percent_fill_30 p-a" />
                    </div>
                    <p className="review-b-font">32</p>
                  </span>

                  <span>
                    <p className="review-g-font">40대</p>
                    <div className="percent_empty p-r">
                      <div className="percent_fill_1040 p-a" />
                    </div>
                    <p className="review-b-font">10</p>
                  </span>

                  <span>
                    <p className="review-g-font">50대</p>
                    <div className="percent_empty p-r" />
                    <p className="review-b-font">0</p>
                  </span>
                </div>
              </div>

              <div className="review_state_product">
                <h3>정사이즈</h3>
                <div className="product_state_line p-r">
                  <div className="product_state_point p-a" />
                </div>
                <div className="product_state_dec">
                  <p className="review-g-font">보다 작아요</p>
                  <p className="review-point-font">딱맞아요</p>
                  <p className="review-g-font">보다 커요</p>
                </div>

                <h3>실제 색상보다</h3>
                <div className="product_state_line p-r">
                  <div className="product_state_point p-a" />
                </div>
                <div className="product_state_dec">
                  <p className="review-g-font">어두워요</p>
                  <p className="review-point-font">똑같아요</p>
                  <p className="review-g-font">밝아요</p>
                </div>

                <h3>품질에 대해</h3>
                <div className="product_state_line p-r">
                  <div className="product_state_point last p-a" />
                </div>
                <div className="product_state_dec">
                  <p className="review-g-font">불만이에요</p>
                  <p className="review-point-font">보통이에요</p>
                  <p className="review-g-font">만족해요</p>
                </div>
              </div>
            </div>

            <div className="review_form">
              {review_filter.map((review, idx) => (
                <ReviewBoard data={review} key={idx} />
              ))}
            </div>
            <div className="more-btn">
              <button onClick={this.reviewBtnHandler}>
                더 많은 후기 보기 (+
                {reviewArr.length < 3
                  ? reviewArr.length
                  : reviewArr.length - reviewFilter}
                개)
              </button>
            </div>
          </article>

          <article className="product_qna_container" id="scroll_qna">
            <div className="inquiries">
              <SubTitle title="상품문의" />
              <div className="m-t-40" />
              <QnaBoard
                name="김*애(비회원)"
                title="[사이즈 문의]245 신는데..."
              />
              <QnaBoard
                name="송*교"
                title="[불량상품 문의]삐그덕 소리가 나네요."
              />
              <QnaBoard
                name="전*현(비회원)"
                title="[기타 문의]하나만 결제했는데 두 개가 결제됨"
              />
            </div>
            <div className="more-btn">
              <button>더 많은 문의 보기</button>
            </div>
          </article>

          <article className="product_refund_container" id="scroll_refund">
            <RefundForm />
          </article>
        </section>
        <Footer />
      </section>
    );
  }
}

export default connect(null, { addCart })(ProductDetail);
