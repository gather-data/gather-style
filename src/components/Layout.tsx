import styled from 'styled-components';
import { Page, Row, Column } from 'hedron';

import { pb } from '../styles';

function unit(multiple) {
  if (typeof multiple === 'string') {
    return multiple;
  }

  return `${(multiple * 8) / 16}rem`;
}

const width = '1200px';
const smallWidth = '960px';

export {
  Page,
  Row,
  Column,
  unit,
  width as pageWidth,
  smallWidth as pageSmallWidth,
};
