/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
              * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                  border: 0;
                  outline: 0;
                  user-select: none;
                  box-sizing: border-box;
                  font-family: Gmarket Sans TTF;
                  font-style: normal;
                  outline: none;
                  }  
                :root {
                --white: #ffffff;
                --black: #000000;
                --red: #ff0000;
                --green: #00ff00;
                --main50: #ebfef4;
                --main100: #a0facb;
                --main200: #e5e7eb;
                --main300: #63f2b0;
                --main400: #43e5a0;
                --main500: #01c87a;
                --main600: #00a364;
                --main700: #008253;
                --main800: #006743;
                --main900: #005439;
            }

            body {
                width: 100%;
                height: 100%;
                box-sizing: border-box;
            }
        `}
  />
);

export default GlobalStyles;
