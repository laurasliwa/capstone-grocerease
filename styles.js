import { createGlobalStyle } from "styled-components";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    box-sizing: border-box;
  }

  body {

    font-family: ${nunito.style.fontFamily}, system-ui;
    background-color: #FFFAF4;
  }
`;
