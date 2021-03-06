import { createGlobalStyle } from 'styled-components';

import Text, { Types, TypeToStyle } from './components/Text';

import cornerstone from './assets/fonts/cornerstone.ttf';
import rubikRegular from './assets/fonts/rubikRegular.ttf';
import rubikItalic from './assets/fonts/rubikItalic.ttf';
import rubik500 from './assets/fonts/rubik500.ttf';
import rubik500Italic from './assets/fonts/rubik500Italic.ttf';
import firaMonoRegular from './assets/fonts/firaMonoRegular.ttf';

/*eslint-disable */
// @ts-ignore
const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: cornerstone;
      src: url('${cornerstone}');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: Rubik;
      src: url('${rubikRegular}');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: Rubik;
      src: url('${rubikItalic}');
      font-weight: normal;
      font-style: italic;
    }

    @font-face {
      font-family: Rubik;
      src: url('${rubik500}');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: Rubik;
      src: url('${rubik500Italic}');
      font-weight: bold;
      font-style: italic;
    }

    @font-face {
      font-family: firaMonoRegular;
      src: url('${firaMonoRegular}');
    }

    html {
      box-sizing: border-box;
      font-size: 16px;
      height: 100%;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      min-height: 100%;
      position: relative;
      background: #fff;
      // This is the height of the footer
      /* padding-bottom: 11rem; */
      ${TypeToStyle[Types.BODY]};
    }

    input:not([type=checkbox]), textarea {
      -webkit-appearance: none;
      /* -webkit-border-radius: 0; */
    }

    .root {
      height: 100%;
    }
  `;
/*eslint-enable */

export default GlobalStyle;
