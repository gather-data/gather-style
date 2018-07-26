import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';

import { ThemeInterface } from './styled-components';
import Colors from './colors';

const boxShadow = `
  box-shadow: 0 4px 8px 0 ${Colors.shadow},0 2px 3px 0 ${Colors.shadow};
`;
const boxShadowBig = `
  box-shadow: 0 5px 15px ${Colors.shadow}, 0 15px 35px ${Colors.shadow};
`;
const borderRadius = `
  border-radius: 4px;
`;
const border = `
  border: 1px solid ${Colors.border};
`;
const row = `{
  display: flex;
  flex-flow: row;
}`;

export interface StyledComponentProps {
  theme?: ThemeInterface;
}

const SPACING = 8;

const m = (size: number) => (props: StyledComponentProps) =>
  `padding: ${(SPACING * size) / 16}rem`;
const mv = (top: number, bottom?: number) => (props: StyledComponentProps) =>
  `margin-top: ${(SPACING * top) / 16}rem; margin-bottom: ${(SPACING *
    (bottom || top)) /
    16}rem`;
const mh = (left: number, right?: number) => (props: StyledComponentProps) =>
  `margin-left: ${(SPACING * left) / 16}rem;
  margin-right: ${(SPACING * (right || left)) / 16}rem`;
const ml = (size: number) => (props: StyledComponentProps) =>
  `margin-left: ${(SPACING * size) / 16}rem`;
const mt = (size: number) => (props: StyledComponentProps) =>
  `margin-top: ${(SPACING * size) / 16}rem`;
const mr = (size: number) => (props: StyledComponentProps) =>
  `margin-right: ${(SPACING * size) / 16}rem`;
const mb = (size: number) => (props: StyledComponentProps) =>
  `margin-bottom: ${(SPACING * size) / 16}rem`;

const p = (size: number) => (props: StyledComponentProps) =>
  `padding: ${(SPACING * size) / 16}rem`;
const pv = (top: number, bottom?: number) => (props: StyledComponentProps) =>
  `padding-top: ${(SPACING * top) / 16}rem; padding-bottom: ${(SPACING *
    (bottom || top)) /
    16}rem;`;
const ph = (left: number, right?: number) => (props: StyledComponentProps) =>
  `padding-left: ${(SPACING * left) / 16}rem; padding-right: ${(SPACING *
    (right || left)) /
    16}rem;`;
const pl = (size: number) => (props: StyledComponentProps) =>
  `padding-left: ${(SPACING * size) / 16}rem`;
const pt = (size: number) => (props: StyledComponentProps) =>
  `padding-top: ${(SPACING * size) / 16}rem`;
const pr = (size: number) => (props: StyledComponentProps) =>
  `padding-right: ${(SPACING * size) / 16}rem`;
const pb = (size: number) => (props: StyledComponentProps) =>
  `padding-bottom: ${(SPACING * size) / 16}rem`;

const t = (size: number) => (props: StyledComponentProps) =>
  `top: ${(SPACING * size) / 16}rem`;
const b = (size: number) => (props: StyledComponentProps) =>
  `bottom: ${(SPACING * size) / 16}rem`;
const r = (size: number) => (props: StyledComponentProps) =>
  `right: ${(SPACING * size) / 16}rem`;
const l = (size: number) => (props: StyledComponentProps) =>
  `left: ${(SPACING * size) / 16}rem`;

const height = (size: number) => (props: StyledComponentProps) =>
  `height: ${(SPACING * size) / 16}rem`;
const minHeight = (size: number) => (props: StyledComponentProps) =>
  `min-height: ${(SPACING * size) / 16}rem`;
const maxHeight = (size: number) => (props: StyledComponentProps) =>
  `max-height: ${(SPACING * size) / 16}rem`;
const width = (size: number) => (props: StyledComponentProps) =>
  `width: ${(SPACING * size) / 16}rem`;
const minWidth = (size: number) => (props: StyledComponentProps) =>
  `min-width: ${(SPACING * size) / 16}rem`;
const maxWidth = (size: number) => (props: StyledComponentProps) =>
  `max-width: ${(SPACING * size) / 16}rem`;
const transition = (elements: Array<string>, time = '0.150s') => () =>
  `transition: ${elements
    // .map(element => `${element} ${time} cubic-bezier(0.1, 0.7, 0.1, 1)`)
    .map(element => `${element} ${time} cubic-bezier(0.4, 0, 0.2, 1)`)
    .join(',')}`;

interface FlexProps {
  justifyContent: string;
  alignItems: string;
  flow: string;
  flex1: boolean;
  p: number;
  pv: number;
  ph: number;
  pl: number;
  pr: number;
  pt: number;
  pb: number;
  m: number;
  mv: number;
  mh: number;
  mt: number;
  mb: number;
  mr: number;
  ml: number;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'center'};
  flex-flow: ${props => props.flow || 'row'};
  ${props => props.flex1 && `flex: 1`};

  ${props => props.p && p(props.p)};
  ${props => props.pv && pv(props.pv)};
  ${props => props.ph && ph(props.ph)};
  ${props => props.pl && pl(props.pl)};
  ${props => props.pr && pr(props.pr)};
  ${props => props.pt && pt(props.pt)};
  ${props => props.pb && pb(props.pb)};

  ${props => props.m && m(props.m)};
  ${props => props.mv && mv(props.mv)};
  ${props => props.mh && mh(props.mh)};
  ${props => props.ml && ml(props.ml)};
  ${props => props.mr && mr(props.mr)};
  ${props => props.mt && mt(props.mt)};
  ${props => props.mb && mb(props.mb)};
`;

export {
  m,
  mv,
  mh,
  ml,
  mt,
  mr,
  mb,
  p,
  pv,
  ph,
  pl,
  pt,
  pr,
  pb,
  t,
  b,
  r,
  l,
  width,
  height,
  minHeight,
  minWidth,
  maxWidth,
  maxHeight,
  transition,
  Flex,
  boxShadow,
  boxShadowBig,
  borderRadius,
  border,
  row,
};
