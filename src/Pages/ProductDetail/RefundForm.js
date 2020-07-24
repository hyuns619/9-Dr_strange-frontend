import React from "react";
import ScrollTopBtn from "Components/ScrollTopBtn";

class RefundForm extends React.Component {
  constructor() {
    super();
    this.state = {
      moreBtn: false,
    };
  }

  // +, - 버튼 클릭시 마다 moreBtn 상태 변경
  moreBtnClickHandler = () => {
    this.setState({
      moreBtn: !this.state.moreBtn,
    });
  };

  render() {
    const { moreBtn } = this.state;
    return (
      <div className="RefundForm p-r">
        <div className="underline" />
        <div className="refund_info_title p-a">
          <div className="refund_btn">
            <p>교환/환불 안내</p>
            <button
              className={moreBtn ? "btn_minus" : "btn_plus"}
              type="button"
              onClick={this.moreBtnClickHandler}
            >
              {moreBtn ? "﹣" : "﹢"}
            </button>
          </div>
        </div>

        {moreBtn ? (
          <section className="refund_info_list">
            <div className="exchange_guide">
              <h2>교환안내</h2>
              <ul className="gray-20-font info-list-style">
                <li>
                  제품 수령 후 7일 이내에 마이페이지 – 주문 배송조회 - 주문
                  상세에서 교환 신청 후 원하시는 사이즈 기입 부탁드립니다.
                  <br /> 수령지로 CJ택배(1588-1255) 반품 접수됩니다. 교환 제품은
                  상품 도착 후 최소 일주일 이상 소요되며 재고가 부족한 경우
                  발송이 어려울 수 있습니다.
                  <br />
                  ※ 네이버 페이 구매 고객의 경우, 네이버 페이 마이페이지에서
                  교환 신청 후 보내주시면 됩니다.
                  <br />※ 반품 주소 : 경기도 이천시 마장면 프리미엄 아울렛로
                  113-49 스마트 물류 닥터마틴
                </li>
                <li>
                  사이즈 교환만 가능하며, 다른 제품으로 교환을 원하시는 경우
                  해당 제품을 반품해주시고, 별도로 신규 주문해주셔야 합니다.
                </li>
                <li>
                  공식몰 회원일 경우 정상가 구매 제품 사이즈 교환 1회 무료
                  서비스를 제공합니다. (쿠폰 사용 포함, 세일 카테고리 제외,
                  네이버페이 구매 고객 제외)
                </li>
                <li>
                  세일 상품 교환의 경우, 왕복 택배비 6,000원을 아래 계좌로
                  송금해주시길 바랍니다.(제주 지역 별도 추가 배송비 6,000원)
                  <br />※ 하나은행 / 119-910011-45504 / 닥터마틴에어웨어코리아
                  <br />※ 동봉된 택배비는 처리되지 않으며 분실되는 경우 저희가
                  책임지지 않습니다.
                </li>
                <li>
                  제품 및 박스의 손상이 없도록 받아보신 그대로 보내주셔야
                  합니다. (반품 택배 발송시 사은품은 제외하고 발송 부탁드립니다.
                  교환 발송시 사은품은 별도 발송되지 않습니다.) 박스 및 택이
                  분실되거나, 사용 흔적/오염 등 고의로 손상된 제품은 당사에서
                  확인 후 반송 처리합니다.
                </li>
                <li>
                  접수 후 2주 이내 물품을 보내주셔야 합니다. 기간이 초과된
                  제품은 반송 처리될 수 있습니다. (왕복 배송비 고객 부담)
                </li>
                <li>
                  부득이한 사정으로 CJ택배가 아닌 타 택배를 이용하셔야 하는 경우
                  선불로 보내주시고 게시판에 남겨주세요.
                </li>
                <li>
                  물류센터 입고 후, 영업일 기준 7일 이내 기존 수령지로 교환
                  제품이 출고되며, 재고가 없으면 반품, 환불 처리될 수 있습니다.
                  교환받을 주소 및 수령자 정보를 변경할 경우에는1:1 게시판에
                  남겨주세요.
                </li>
                <li>
                  불량 제품의 경우, 1:1 게시판에 제품 사진, 주문 번호, 연락처를
                  남겨주시면 빠른 처리 도와드리겠습니다. 당사의 실수로 인한
                  오배송 및 불량상품의 택배비는 닥터마틴에서 전액 부담합니다.
                  <br />
                  단, 동일한 상품 (색상, 사이즈 포함)으로의 교환만 당사
                  부담이며, 원래 주문하셨던 상품이 아닌 경우에는 변심으로
                  간주되어 별도로 주문 부탁드립니다.
                </li>
              </ul>
            </div>

            <div className="refund_guide">
              <h2>취소안내</h2>
              <ul className="gray-20-font info-list-style">
                <li>
                  주문의 상태가 배송준비중일 경우 취소가 불가합니다.
                  <br />
                  교환, 환불을 원하실 경우 교환 및 환불 안내를 참고하시기
                  바랍니다.
                </li>
              </ul>

              <h2>환불안내</h2>
              <ul className="gray-20-font info-list-style">
                <li>
                  제품 수령 후 7일 이내에 마이페이지 – 주문 배송조회 – 주문
                  상세에서 반품 신청 해주셔야 합니다.
                  <br />
                  수령지로 CJ택배 (1588-1255) 반품 접수됩니다
                  <br />※ 반품 주소 : 경기도 이천시 마장면 프리미엄 아울렛로
                  113-49 스마트물류 닥터마틴
                </li>
                <li>
                  물류센터 입고 확인 후 1-3일 이내에, 왕복 배송비 (6,000원)
                  차감하여 환불됩니다. (제주 지역 별도 추가 배송비 6,000원)
                  <br />※ 동봉된 택배비는 처리되지 않으며 분실되는 경우 책임지지
                  않습니다.
                  <br />※ 네이버 페이 구매 고객의 경우, 네이버 페이
                  마이페이지에서 반품 신청 후 보내주시면 됩니다. 왕복 배송비
                  (6,000원)를 추가 결제 시 전액 환불됩니다.
                </li>
                <li>
                  제품 및 박스의 손상이 없도록 받아보신 그대로 보내주셔야
                  합니다. (사은품 동봉 필수) 박스 및 택이 분실되거나, 사용
                  흔적/오염 등 고의로 손상된 제품은 당사에서 확인 후 반송
                  처리합니다.
                </li>
                <li>
                  게시판 접수 후 2주 이내 물품을 보내주셔야 합니다. 기간이
                  초과된 제품은 반송 처리될 수 있습니다. (왕복 배송비 고객 부담)
                </li>
                <li>
                  부득이한 사정으로 CJ택배가 아닌 타 택배를 이용하셔야 하는 경우
                  선불로 보내주셔야 합니다.
                </li>
                <li>
                  불량 제품의 경우, 1:1 게시판에 제품 사진 첨부해주시면 빠른
                  처리 도와드리겠습니다.
                </li>
                <li>
                  카드 환불일 경우, 카드사의 승인/취소 처리 과정으로 7~14일
                  가량소요되며, 결제일은 개인차가 있을 수 있습니다. 대금 정산
                  이후 결제 취소되는 경우, 익월 청구 금액에서 차감되어 처리되며
                  명세서를 통해 확인할 수 있습니다.
                </li>
              </ul>
              <p>
                닥터마틴 고객센터 : 1544-6486
                <br />
                (월~금 10AM ~ 5PM / 점심시간 : 12:30~1:30)
                <br />
                주말 및 공휴일 휴무
              </p>
            </div>
          </section>
        ) : (
          ""
        )}

        <ScrollTopBtn
          className={moreBtn ? "ScrollTopBtn_click p-a" : "ScrollTopBtn p-a"}
          scrollPosition="#scroll_top"
        />
      </div>
    );
  }
}

export default RefundForm;
