import styled, { css } from "styled-components";
import { border, flexCenter } from "../../style/common";

const S = {}

// css 변수
// ${} 템플릿 리터럴

const widthAndHeight = css`
  width: 200px;
  height: 200px;
`

S.StyledP = styled.p`
  color: blue;
  font-size: 20px;
  font-weight: 800;
`;

S.StyledDiv = styled.div`
  border: solid 1px black;
  background-color: green;
`

S.Strong = styled.strong`
  /* 콜백함수 */
  color: ${(props) => props.color};
`

S.Div = styled.div`
  ${widthAndHeight};
  border: solid ${(props) => props.box} black;
`

S.BoxWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: ${({dicection}) => dicection === "가로" ? "row" : "column"};
`
S.Box = styled.div`
  ${widthAndHeight};
  background-color: orange;
`
S.BoxContainr = styled.div`
  width: 500px;
  height: 500px;
  ${border};
  ${flexCenter};
`

export default S;
