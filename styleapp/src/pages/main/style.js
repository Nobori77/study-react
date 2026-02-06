import styled from "styled-components";
import theme from "../../style/them";

const S = {}

S.H1 = styled.h1`
  color: green;
  font-size: 20px;
  
  font-weight:900;
`
S.SubTitle = styled.span`
  color: ${({theme}) => theme.PALLETE.primary.main};

  /* 테마의 h1 폰트사이즈를 적용시키기 */
  font-size: ${({theme}) => theme.FONT_SIZE.h1};
`


export default S;