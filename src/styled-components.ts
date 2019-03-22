import * as React from 'react';
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

interface ThemeInterface {
  spacing: number;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider, ThemeInterface };
export default styled;
