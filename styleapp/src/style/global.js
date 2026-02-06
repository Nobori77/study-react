import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  /* 스타일 리셋 */
  ${reset}

  /* 폰트 */
  @font-face {
      font-family: 'Pretendard';
      src: url('/assets/fonts/Pretendard-Thin.woff2') format('woff2');
      font-weight: 100;
      font-display: swap;
  }

  @font-face {
      font-family: 'Pretendard';
      src: url('/assets/fonts/Pretendard-ExtraLight.woff2') format('woff2');
      font-weight: 200;
      font-display: swap;
  }

  @font-face {
      font-family: 'Pretendard';
      src: url('/assets/fonts/Pretendard-Light.woff2') format('woff2');
      font-weight: 300;
      font-display: swap;
  }

  @font-face {
      font-family: 'Pretendard';
      src: url('/assets/fonts/Pretendard-Regular.woff2') format('woff2');
      font-weight: 400;
      font-display: swap;
  }

  @font-face {
      font-family: 'Pretendard';
      src: url('/assets/fonts/Pretendard-Medium.woff2') format('woff2');
      font-weight: 500;
      font-display: swap;
  }

  @font-face {
      font-family: 'Pretendard';
      src: url('/assets/fonts/Pretendard-SemiBold.woff2') format('woff2');
      font-weight: 600;
      font-display: swap;
  }

  @font-face {
      font-family: 'Pretendard';
      src: url('/assets/fonts/Pretendard-Bold.woff2') format('woff2');
      font-weight: 700;
      font-display: swap;
  }

  @font-face {
      font-family: 'Pretendard';
      src: url('/assets/fonts/Pretendard-ExtraBold.woff2') format('woff2');
      font-weight: 800;
      font-display: swap;
  }

  @font-face {
      font-family: 'Pretendard';
      src: url('/assets/fonts/Pretendard-Black.woff2') format('woff2');
      font-weight: 900;
      font-display: swap;
  }
  * {
   box-sizing:border-box;
   text-shadow: 0 0 2px rgba(0, 0, 0, 0.03);
   letter-spacing: -0 .3px;
   font-family: 'pretendard';
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyle;