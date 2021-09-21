import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: bello-script;
    src: url(/fonts/bello-script.ttf) format("ttf");
}

  @font-face {
    font-family: Proxima Nova;
    src: url(/fonts/proxima-nova-regular.woff) format("woff");
}

  * {
    box-sizing: border-box;
    margin: 0;
}
`;

export default GlobalStyle;
