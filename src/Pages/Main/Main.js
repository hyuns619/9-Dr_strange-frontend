import React from "react";
import { WaveLoading } from "react-loadingg";
import Nav from "Components/Nav/Nav";
import MainSlider from "./Main_Slider/MainSlider";
import ProductFilter from "./Main_HamburderList/ProductFilter";
import Footer from "Components/Footer/Footer";
import MainImageInfo from "./Main_ImageInfo/MainImageInfo";
import MainScrollEvent from "./Main_ScrollEvent/MainScrollEvent";
import ProductPreview from "Components/ProductPreview";
import {
  MAIN_INFO_EVENT1,
  MAIN_INFO_EVENT2,
  MAIN_INFO_EVENT3,
  MAIN_SCROLL_EVENT1,
  MAIN_SCROLL_EVENT2,
  MAIN_SCROLL_EVENT3,
  MAIN_SLIDER_IMG4_LEFT,
  MAIN_SLIDER_IMG4_RIGHT,
} from "config";
import "Pages/Main/Main.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      scale: 1,
      transformX: 0,
      womenData: [],
      menData: [],
      loading: false,
    };
  }

  // 첫 render 후에 scroll 이벤트 등록 & product main list data 받아오기
  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
    // fetch("http://10.58.5.123:8001/bestseller")
    fetch("http://localhost:3000/data/category.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          womenData: res.women,
          menData: res.men,
          loading: true,
        })
      );
  }

  // scroll 이벤트 사용 후에는 다시 unmount
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  // scroll을 내릴때 transform, opacity 변경하는 이벤트
  scrollHandler = () => {
    const scroll = window.scrollY;
    const eventOffset = [7000, 10500, 18400];

    // opacity, scale style
    for (let i in eventOffset) {
      if (scroll > eventOffset[i] && scroll < eventOffset[i] + 600) {
        this.setState({
          opacity: 1 - (scroll - eventOffset[i]) / 1000,
        });
      }
      if (scroll > eventOffset[i] + 800 && scroll < eventOffset[i] + 1500) {
        this.setState({
          scale: 1 + (scroll - (eventOffset[i] + 800)) / 6000,
        });
      }
      // style reset
      if (scroll > eventOffset[i] + 2300 && scroll < eventOffset[i] + 2400) {
        this.setState({
          opacity: 1,
          scale: 1,
        });
      }
    }

    // transformX style
    if (window.scrollY > 13600 && window.scrollY < 14800) {
      this.setState({
        transformX: (window.scrollY - 13600) / 10,
      });
    }
  };

  render() {
    const {
      loading,
      womenData,
      menData,
      opacity,
      scale,
      transformX,
    } = this.state;

    return loading ? (
      <section className="Main">
        <Nav />
        <MainSlider />
        <ProductFilter category={"베스트 셀러"} data={womenData} />
        <MainImageInfo
          category="콜라보레이션"
          img={MAIN_INFO_EVENT1}
          subcategory="DR. MARTENS X PLEASURES"
          firstLine="1460의 60주년을 기념하는 1460 리마스터드의 여섯 번째 콜라보레이션."
          secondLine="닥터마틴의 클래식한 실루엣에 PLEASURES의 LA 라벨의 감각을 더해 두 브랜드의 헤리티지와 음악 그리고 서브컬처를 담아냈습니다. 6월 27일 오전 8시에 만나보실 수 있습니다."
        />

        <ProductFilter category={"미드시즌오프"} data={menData} />
        <MainImageInfo
          category="센스 있는 여름 코디를 위한"
          img={MAIN_INFO_EVENT2}
          subcategory="남성 샌들 컬렉션"
          firstLine="이번 여름, 어디에나 잘 어울리는 남성 샌들로"
          secondLine="센스 있는 스타일을 완성해보세요."
        />
        <ProductFilter category={"신상품"} data={womenData} />
        <MainScrollEvent
          className="MainScrollEvent scroll_1"
          backImg={MAIN_SCROLL_EVENT1}
          opacity={opacity}
          scale={scale}
          transformX={transformX}
          firstTitle="발 끝까지 나를 사랑하는 방법"
          secondTitle="썸머 여성 샌들"
          firstLine="SS20 NEW 여성 샌들과 베스트 샌들을 만나보세요."
        />
        {womenData && (
          <article className="product_preview_form m-w-1140 m-auto">
            {/* <ProductPreview data={womenData[20]} />
            <ProductPreview data={womenData[24]} /> */}
            <ProductPreview data={womenData[0]} />
            <ProductPreview data={womenData[1]} />
          </article>
        )}
        <MainScrollEvent
          className="MainScrollEvent scroll_2"
          backImg={MAIN_SCROLL_EVENT2}
          opacity={opacity}
          scale={scale}
          transformX={transformX}
          firstTitle="WELCOME TO"
          secondTitle="DOCS MEMBERS"
          firstLine="누구나 신규 가입 시 닥스 머니 지급"
          secondLine="기존 회원 본인 인증해도 지급!"
        />
        <ProductFilter category={"추천 상품"} data={menData} />
        <MainScrollEvent
          className="MainScrollEventBlack"
          backImg={MAIN_SLIDER_IMG4_LEFT}
          backImg2={MAIN_SLIDER_IMG4_RIGHT}
          opacity={opacity}
          scale={scale}
          transformX={transformX}
          firstTitle="오리지널"
          secondTitle="1460"
          thirdTitle="부츠"
          firstLine="1960년 4월 1일,
          닥터마틴이 가장 처음 선보인
          8홀 부츠의 탄생을 기념하기 위해
          제품명 역시 출시 일자에서 따왔습니다."
          secondLine="이렇듯 1460은 닥터마틴의 역사를 상징하는 8홀 부츠로
          옐로우 스티치, 힐루프와 같은 닥터마틴의 DNA를
          고스란히 담고있는 아이코닉한 아이템입니다.
          특유의 매력적인 실루엣과 견고함은
          전 세계, 여러 세대에 걸쳐
          1460이 사랑받아온 이유입니다."
          thirdLine="지금의 닥터마틴이 있기까지
          그 시작부터 함께 했던 1460.
          누구도 흉내 낼 수 없는 헤리티지를 느껴 보세요."
        />
        {menData && (
          <article className="product_preview_form m-w-1140 m-auto">
            {/* <ProductPreview data={womenData[10]} />
            <ProductPreview data={womenData[15]} /> */}
            <ProductPreview data={womenData[2]} />
            <ProductPreview data={womenData[3]} />
          </article>
        )}
        <MainImageInfo
          category="HOW TO USE WONDER BALSAM"
          img={MAIN_INFO_EVENT3}
          subcategory="원더발삼 관리법"
          firstLine="원더 발삼은 가죽을 튼튼하고 유연하게 하며, 오랫동안 신을 수 있게 해줍니다."
          secondLine="단계별 관리 방법을 알아보세요!"
        />
        <MainScrollEvent
          className="MainScrollEvent scroll_3"
          backImg={MAIN_SCROLL_EVENT3}
          opacity={opacity}
          scale={scale}
          transformX={transformX}
          firstTitle="닥터마틴"
          secondTitle="반항적인"
          thirdTitle="자아 표현의 역사"
          firstLine="닥터마틴은 자신만의 개성을 지니고 하나의 정신을 공유하는
          진정성 있는 사람들과 자아 표현에 자부심을 지닌 사람들,
          그리고 보통 사람들과는 다른 사람들에게 어필합니다."
          secondLine="스타일의 관점에서 닥터마틴의 심플한 실루엣은
          소비자들로 하여금 부츠와 슈즈를 그들 자신만의
          유니크한 스타일을 표현할 수 있도록 만들었으며,
          실용성의 차원에서 닥터마틴의 뛰어난 내구성과 편안함은
          공연 또는 스트릿 패션이 용납 받지 못하는 세계에서
          가장 이상적인 존재로 자리잡게 했습니다
          끝으로 감성적인 측면에서 닥터마틴은
          반항적인 태도와 권한의 증표와도 같습니다."
        />
        <Footer />
      </section>
    ) : (
      <WaveLoading color={"#111"} size={"large"} />
    );
  }
}

export default Main;
