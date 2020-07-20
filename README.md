# 💁🏻‍♀️ Introduction

- 영국 60년 정통 패션 브랜드 샌들, 슈즈, 부츠 등을 취급하는 세계적인 의류 기업 닥터마틴 클론 프로젝트
- 개발기간 : 2020.06.22 ~ 2020.07.03(약 2주)
- 개발인원 : 3 Front-end(강솔미, 전성현, 한수민), 3 Back-end(김동건, 반현랑, 정나온)
- [Front-end Github](https://github.com/wecode-bootcamp-korea/9-Dr_strange-frontend)
- [Back-end Github](https://github.com/wecode-bootcamp-korea/9-Dr_strange-backend)

# 📼 Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/x_OftNpGTy0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# 👩🏻‍💻 Technologies

- JavaScript(ES6)
- React.js (CRA, Class형 component 사용)
- Sass
- Git / Github

### React 라이브러리

- React-router-dom
- React-slick
- react-loadingg
- react-modal

# 🌱 Features

### 회원가입 / 로그인 페이지

- 아이디 및 패스워드 유효성 검사<br/>
  (아이디, 비밀번호 조건 확인 및 비밀번호, 비밀번호 확인 일치 여부 검사)

### 메인 페이지

- Nav, Footer 바
- 인 페이지 최상단 슬라이더
- 메인 페이지 내 카테고리 선택시 카테고리에 맞는 상품만 filter되는 슬라이더
- 메인 페이지 내 scroll 위치에 따라 이미지의 스타일이 변하는 event
- 햄버거 메뉴 (Nav 바와 연동되어 각 카테고리 버튼 클릭시 아래에 세부 카테고리 출력)

### 제품 리스트 페이지

- 제품이 정해진 레이아웃에 따라 (3-2-3-1) 재정렬되어 출력
- 부츠, 슈즈, 샌들 카테고리 클릭시 카테고리에 맞는 제품만 filter되어 출력
- 리스트 페이지에서 장바구니 버튼 클릭시 modal창 출력
- modal 창에서 사이즈, 수량 선택 후 장바구니 담기 클릭시 백엔드 서버로 유저 데이터 전송

### 제품 상세 페이지

- 사이즈, 수량 선택 후 장바구니 버튼 클릭시 백엔드 서버로 유저 데이터 전송
- 동적 라우팅을 이용하여 color 선택시 페이지 새로고침 없이 전환
- 상품 후기 펼쳐보기/접기 버튼 기능 및 더 보기 버튼으로 동적인 페이지 구현
- 페이지 우측에 해당 위치로 바로 이동하는 네비게이션 버튼 구현

### 장바구니 페이지

- 유저 정보 확인 후 백엔드 서버에 저장된 장바구니 데이터 불러와서 출력
- 삭제 버튼으로 장바구니 상품 삭제 기능

### 마이 페이지

- 유저 정보 확인 후 백엔드 서버에 저장된 유저 데이터 불러와서 출력

# ⭐️ 느낀점

- 팀의 코드 컨벤션을 철저히 지키지 못한점이 아쉬웠다. 2차 프로젝트때는 코드 컨벤션을 세세하게 정해서 잘 지키면서 프로젝트를 진행하고 싶다.
