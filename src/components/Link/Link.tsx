import * as React from 'react';
import styled, { css, InterpolationValue } from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import Scrollchor from 'react-scrollchor';
import { NavLink } from 'react-router-dom';
import color from 'color';

import colors from '../../colors';
import {
  borderRadius,
  boxShadow,
  transition,
  mr,
  p,
  ph,
  pv,
  pl,
  pr,
  pt,
  pb,
  m,
  mv,
  mh,
  ml,
  mt,
  mb,
  StyledComponentProps,
} from '../../styles';
import Text, {
  Types as TextTypes,
  TypeToStyle as TextTypeToStyle,
} from '../Text';

export enum Types {
  TEXT = 'text',
  BUTTON_PRIMARY = 'buttonPrimary',
  BUTTON_DEFAULT = 'buttonDefault',
}

interface LinkProps extends StyledComponentProps {
  color?: string;
  textColor?: string;
  exact?: boolean;
  heavy?: boolean;
  title?: string;
  icon?: React.ReactNode;
  iconEnd?: boolean;
  disabled?: boolean;
  pending?: boolean;
  id?: string;
  href?: string;
  onClick?: (event: React.FormEvent) => void;
  onMouseDown?: () => void;
  isNavLink?: boolean;
  type: Types;
  className?: string;
  to?: string;
  inline?: boolean;
  fullWidth?: boolean;
  hasChildren?: boolean;
  target?: string;
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
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
  size?: 'tiny' | 'small' | 'default' | 'large';
  submit?: boolean;
}

const baseStyle = css<LinkProps>`
  background: none;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  text-align: left;
  -webkit-appearance: none;
  justify-content: center;

  &:hover {
    text-decoration: none;
  }

  ${props => props.fullWidth && 'width: 100%;'};
  ${props => props.disabled && 'transition: none'};
  ${props => props.disabled && 'cursor: auto'};
  ${props => props.inline && 'display: inline'};

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

  ${props =>
    !props.disabled &&
    `&:hover {
    cursor: pointer;
  }`};
`;

type TypeToStyle = { [TKey in Types]: InterpolationValue[] };

// @ts-ignore
export const TypeToStyle: TypeToStyle = {
  [Types.TEXT]: css`
    color: ${(props: LinkProps) => props.color || colors.primary};
    -webkit-font-smoothing: antialiased;
    text-decoration: none;

    &:hover,
    &.active {
      ${(props: LinkProps) => {
        if (props.disabled) {
          return '';
        } else if (props.isNavLink) {
          return `
            opacity: 1;
            color: ${colors.primary};
            border-bottom: 1px solid ${colors.primary};
  purple20: '#DFE3FD',
  purple20: '#DFE3FD',
          `;
        }

        return 'text-decoration: underline;';
      }};
    }

    ${(props: LinkProps) =>
      props.isNavLink &&
      `
      font-weight: bold;
      color: ${props.color || colors.purple};
      border-bottom: 1px solid rgba(0, 0, 0, 0);
      transition: color 0.24s;
      margin-top: 4px;
      opacity: 0.4;
    `};

    ${(props: LinkProps) =>
      props.heavy &&
      `
      font-weight: bold;
    `};

    ${(props: LinkProps) => {
      if (props.size === 'tiny') {
        return TextTypeToStyle[TextTypes.BODY_TINY].join('');
      } else if (props.size === 'small') {
        return TextTypeToStyle[TextTypes.BODY_SMALL].join('');
      } else if (props.size === 'default') {
        return TextTypeToStyle[TextTypes.BODY].join('');
      } else if (props.size === 'large') {
        return TextTypeToStyle[TextTypes.BODY_LARGE].join('');
      }
    }};
  `,

  [Types.BUTTON_PRIMARY]: css`
    color: ${(props: LinkProps) => props.textColor || colors.white};
    border: 1px solid ${(props: LinkProps) => props.color || colors.primary};
    background: ${(props: LinkProps) => props.color || colors.primary};
    ${transition(['box-shadow', 'background'])};
    ${borderRadius};
    opacity: ${(props: LinkProps) => (props.disabled ? 0.4 : 1)};

    ${(props: LinkProps) => {
      if (props.disabled) {
        return '';
      }
      let b = color(props.color || colors.primary).darken(0.05);

      // Soetimes
      if (b.hex) {
        // @ts-ignore
        b = b.hex();
      } else {
        // @ts-ignore
        b = b.hexString();
      }

      return `
        &:hover {
          ${boxShadow};
          background: ${b};
        }
      `;
    }};

    ${(props: LinkProps) => {
      if (props.size === 'default') {
        return `
          ${ph(2)(props)};
          ${pv(0.5)(props)};
          ${TextTypeToStyle[TextTypes.BODY].join('')};
        `;
      } else if (props.size === 'large') {
        return `
          ${ph(3)(props)};
          ${pv(1.5)(props)};
          ${TextTypeToStyle[TextTypes.BODY].join('')};
        `;
      }
    }};
  `,

  [Types.BUTTON_DEFAULT]: css`
    background: ${colors.white};
    border: 1px solid ${(props: LinkProps) => props.color || colors.primary};
    color: ${(props: LinkProps) => props.color || colors.primary};
    ${transition(['box-shadow'])};
    ${borderRadius};
    opacity: ${(props: LinkProps) => (props.disabled ? 0.4 : 1)};

    ${(props: LinkProps) =>
      !props.disabled &&
      `
      &:hover {
        ${boxShadow};
      }
    `};

    ${(props: LinkProps) => {
      if (props.size === 'default') {
        return `
          ${ph(2)(props)};
          ${pv(0.5)(props)};
          ${TextTypeToStyle[TextTypes.BODY].join('')};
        `;
      } else if (props.size === 'large') {
        return `
          ${ph(3)(props)};
          ${pv(1.5)(props)};
          ${TextTypeToStyle[TextTypes.BODY_LARGE].join('')};
        `;
      }
    }};
  `,
};

const StyledRouterLink = styled(Link)`
  ${baseStyle};
  ${props => TypeToStyle[props.type]};
`;

const StyledRouterNavLink = styled(NavLink)`
  ${baseStyle};
  ${props => TypeToStyle[props.type]};
`;

const StyledAnchor = styled.a`
  ${baseStyle};
  ${props => TypeToStyle[props.type]};
`;

const StyledButton = styled.button`
  ${baseStyle};
  ${props => TypeToStyle[props.type]};
`;

const StyledScrollchor = styled(Scrollchor)`
  ${baseStyle};
  ${props => TypeToStyle[props.type]};
`;

interface IconProps {
  hasChildren?: boolean;
  iconEnd?: boolean;
}

const StyledIcon = styled.span<IconProps>`
  ${props => (props.hasChildren && props.iconEnd ? ml(1) : mr(1.5))};
`;

class StyledLink extends React.Component<LinkProps> {
  static defaultProps = {
    type: Types.TEXT,
    size: 'default',
  };

  _handleOnClick() {
    const { disabled, onClick } = this.props;
    if (disabled) {
      return;
    }

    if (onClick) {
      onClick();
    }
  }

  _handleOnMouseDown() {
    const { disabled, onMouseDown } = this.props;
    if (disabled) {
      return;
    }

    if (onMouseDown) {
      onMouseDown();
    }
  }

  render() {
    const {
      color,
      children,
      className,
      disabled,
      href,
      icon,
      iconEnd,
      id,
      onClick,
      onMouseDown,
      pending,
      isNavLink,
      type,
      to,
      inline,
      exact,
      fullWidth,
      target,
      size,
      title,
      heavy,
      textColor,
      submit,
      p: styledP,
      pv: styledPv,
      ph: styledPh,
      pl: styledPl,
      pr: styledPr,
      pt: styledPt,
      pb: styledPb,
      m: styledM,
      mv: styledMv,
      mh: styledMh,
      ml: styledMl,
      mr: styledMr,
      mt: styledMt,
      mb: styledMb,
    } = this.props;

    let newChildren = children;
    let iconToUse = icon;

    const propsToPass = {
      className,
      type,
      color,
      disabled,
      inline,
      fullWidth,
      target,
      p: styledP,
      pv: styledPv,
      ph: styledPh,
      pl: styledPl,
      pr: styledPr,
      pt: styledPt,
      pb: styledPb,
      m: styledM,
      mv: styledMv,
      mh: styledMh,
      ml: styledMl,
      mr: styledMr,
      mt: styledMt,
      mb: styledMb,
      exact,
      size,
      textColor,
      heavy,
      isNavLink,
      title,
    };

    let NavComponent = StyledRouterLink;
    if (isNavLink) {
      // I don't know how to make this valid
      // @ts-ignore
      NavComponent = StyledRouterNavLink;
      propsToPass.exact = exact;
      propsToPass.isNavLink = isNavLink;
      propsToPass.title = title;
    }

    if (iconToUse) {
      if (iconEnd) {
        newChildren = React.Children.toArray(children).concat([
          <StyledIcon iconEnd key="icon" hasChildren={Boolean(children)}>
            {iconToUse}
          </StyledIcon>,
        ]);
      } else {
        newChildren = [
          <StyledIcon key="icon" hasChildren={Boolean(children)}>
            {iconToUse}
          </StyledIcon>,
          // I don't know how to make this valid
          // @ts-ignore
        ].concat(React.Children.toArray(children));
      }
    }

    if (id) {
      return (
        <StyledScrollchor to={id} {...propsToPass}>
          {newChildren}
        </StyledScrollchor>
      );
    }

    if (href) {
      return (
        <StyledAnchor href={href} {...propsToPass}>
          {newChildren}
        </StyledAnchor>
      );
    }

    if (((onClick || onMouseDown) && !to) || submit) {
      return (
        <StyledButton
          onClick={onClick}
          onMouseDown={onMouseDown}
          type={submit ? 'submit' : 'button'}
          {...propsToPass}
        >
          {newChildren}
        </StyledButton>
      );
    }

    if (!to) {
      throw new Error('Link has not been provided a `to` prop');
    }

    return (
      <NavComponent to={to} {...propsToPass}>
        {newChildren}
      </NavComponent>
    );
  }
}

export default StyledLink;
