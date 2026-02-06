import styled, { css } from "styled-components";

// 컴포넌트에 사용되는 테마를 변수로 정의
const variantCSS = {
  main: css`
    background-color: ${({theme}) => theme.PALLETE.primary["main"]};
  `,
  sub: css`
    background-color: ${({theme}) => theme.PALLETE.primary["sub"]};
  `,
  white: css`
    background-color: ${({theme}) => theme.PALLETE["white"]};
  `,
  error: css`
    background-color: ${({theme}) => theme.PALLETE["error"]};
  `,
}

const colorCSS = {
  main: css`
    color: ${({theme}) => theme.PALLETE.primary["main"]};
  `,
  sub: css`
    color: ${({theme}) => theme.PALLETE.primary["sub"]};
  `,
  white: css`
    color: ${({theme}) => theme.PALLETE["white"]};
  `,
  error: css`
    color: ${({theme}) => theme.PALLETE["error"]};
  `,
}

const sizeCSS = {
  small: css`
    width: 64px;
    height: 32px;
    padding: 16px 0;
  `,
  medium: css`
    width: 96px;
    height: 48px;
    padding: 16px 0;
  `,
  large: css`
    width: 128px;
    height: 64px;
    padding: 16px 0;
  `,
  full: css`
    width: 100%;
    aspect-ratio: 8/1;
    padding: 16px 0;
  `
}

const fontCSS = {
  h1: css`
    font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
    line-height: ${({theme}) => theme.FONT_LINE["h1"]};
  `,
  h2: css`
    font-size: ${({theme}) => theme.FONT_SIZE["h2"]};
    line-height: ${({theme}) => theme.FONT_LINE["h2"]};
  `,
  h3: css`
    font-size: ${({theme}) => theme.FONT_SIZE["h3"]};
    line-height: ${({theme}) => theme.FONT_LINE["h3"]};
  `,
  h4: css`
    font-size: ${({theme}) => theme.FONT_SIZE["h4"]};
    line-height: ${({theme}) => theme.FONT_LINE["h4"]};
  `,
  h5: css`
    font-size: ${({theme}) => theme.FONT_SIZE["h5"]};
    line-height: ${({theme}) => theme.FONT_LINE["h5"]};
  `,
  h6: css`
    font-size: ${({theme}) => theme.FONT_SIZE["h6"]};
    line-height: ${({theme}) => theme.FONT_LINE["h6"]};
  `,
  h7: css`
    font-size: ${({theme}) => theme.FONT_SIZE["h7"]};
    line-height: ${({theme}) => theme.FONT_LINE["h7"]};
  `,
}

const shapeCSS = {
  small: css`
    border-radius: 10px;
  `,
  large: css`
    border-radius: 20px;
  `,
  big: css`
    border-radius: 40px;
  `,
  round: css`
    border-radius: 50%;
  `,
}

// 컴포넌트 동적 스타일
const Button = styled.button`
  ${({variant}) => variantCSS[variant]}
  ${({shape}) => shapeCSS[shape]}
  ${({size}) => sizeCSS[size]}
  ${({font}) => fontCSS[font]}
  ${({color}) => colorCSS[color]}
`

export default Button;