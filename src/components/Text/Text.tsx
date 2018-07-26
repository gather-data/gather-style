import * as React from 'react';
import styled, {
  css,
  StyledComponentClass,
  InterpolationValue,
} from 'styled-components';

import Colors from '../../colors';
import {
  p,
  pv,
  ph,
  pl,
  pr,
  pt,
  pb,
  m,
  mv,
  mh,
  ml,
  mr,
  mt,
  mb,
  maxWidth,
} from '../../styles';

export enum Types {
  BODY_TINY = 'bodyTiny',
  BODY_SMALL = 'bodySmall',
  BODY = 'body',
  BODY_LARGE = 'bodyLarge',
  HEADING_1 = 'heading1',
  HEADING_2 = 'heading2',
  HEADING_3 = 'heading3',
  HEADING_4 = 'heading4',
}

const TypeToTag = {
  [Types.BODY_TINY]: 'p',
  [Types.BODY_SMALL]: 'p',
  [Types.BODY]: 'p',
  [Types.BODY_LARGE]: 'p',
  [Types.HEADING_1]: 'h1',
  [Types.HEADING_2]: 'h2',
  [Types.HEADING_3]: 'h3',
  [Types.HEADING_4]: 'h4',
};

type TypeToStyle = { [TKey in Types]: InterpolationValue[] };

interface props {
  heavy?: boolean;
}

// @ts-ignore
export const TypeToStyle: TypeToStyle = {
  [Types.BODY_TINY]: css`
    font-size: ${12 / 16}rem;
    line-height: 1.5em;
    font-family: Rubik, Helvetica, sans-serif;
    line-height: 1.3;
  `,
  [Types.BODY_SMALL]: css`
    font-size: ${14 / 16}rem;
    line-height: 1.3;
    font-family: Rubik, Helvetica, sans-serif;
  `,
  [Types.BODY]: css`
    font-size: ${16 / 16}rem;
    line-height: ${28 / 16}rem;
    font-family: Rubik, Helvetica, sans-serif;
  `,
  [Types.BODY_LARGE]: css`
    font-size: ${16 / 16}rem;
    font-family: Rubik, Helvetica, sans-serif;
    line-height: 1.3;
  `,
  [Types.HEADING_1]: css`
    font-size: ${48 / 16}rem;
    line-height: 1.05em;
    font-family: Rubik, Helvetica, sans-serif;
    font-weight: ${(props: props) =>
      props.heavy !== undefined ? (props.heavy ? 'bold' : 'normal') : 'bold'};
  `,
  [Types.HEADING_2]: css`
    font-size: ${36 / 16}rem;
    line-height: 1.25em;
    font-family: Rubik, Helvetica, sans-serif;
    font-weight: ${(props: props) =>
      props.heavy !== undefined ? (props.heavy ? 'bold' : 'normal') : 'bold'};
  `,
  [Types.HEADING_3]: css`
    font-size: ${28 / 16}rem;
    line-height: 1.25em;
    font-family: Rubik, Helvetica, sans-serif;
    font-weight: ${(props: props) =>
      props.heavy !== undefined ? (props.heavy ? 'bold' : 'normal') : 'bold'};
  `,
  [Types.HEADING_4]: css`
    font-size: ${20 / 16}rem;
    line-height: 1.22222222em;
    font-family: Rubik, Helvetica, sans-serif;
    font-weight: ${(props: props) =>
      props.heavy !== undefined ? (props.heavy ? 'bold' : 'normal') : 'bold'};
  `,
};

export interface TextProps {
  type: Types;
  className?: string;
  tag?: string;
  color?: string;
  align?: string;
  uppercase?: boolean;
  inline?: boolean;
  flex1?: boolean;
  p?: number;
  pv?: number;
  ph?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  m?: number;
  mv?: number;
  mh?: number;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  maxWidth?: number;
  heavy?: boolean;
  truncate?: boolean;
  italic?: boolean;
}

const Text: React.SFC<TextProps> = ({
  children,
  className,
  tag,
  heavy,
  type = Types.BODY,
}) => {
  const tagToUse = tag || TypeToTag[type];

  return React.createElement(tagToUse, { className }, children);
};

const StyledText = styled(Text)`
  // Reset all default margin
  margin: 0;

  -webkit-font-smoothing: antialiased;

  color: ${props => props.color || Colors.text};
  ${props => props.align && `text-align: ${props.align}`};
  ${props => props.uppercase && 'text-transform: uppercase'};
  ${props => props.inline && 'display: inline'};
  ${props => props.flex1 && 'flex: 1'};

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

  ${props => props.maxWidth && maxWidth(props.maxWidth)};

  font-weight: ${props => (props.heavy ? 'bold' : 'normal')};
  ${props => TypeToStyle[props.type]};

  ${props =>
    props.truncate &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `};

  ${props =>
    props.italic &&
    `
    font-style: italic;
  `};
`;

StyledText.defaultProps = {
  type: Types.BODY,
};

export default StyledText;
