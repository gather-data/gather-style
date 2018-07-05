import hexRgb from 'hex-rgb';
import color from 'color';

const Colors = {
  navy: '#242232',
  purple: '#5D75F6',
  blue: '#85D1F2',
  red: '#F75353',
  beige: '#F5CE98',
  white: '#fff',

  // Not to be used directly
  navy80: '#504E5B',
  navy60: color('#242232')
    .lighten(0.4)
    .hexString(),
  purple60: '#9EACFA',
  purple20: '#DFE3FD',
  purple10: '#DFE3FD',

  primary: '',
  border: '',
  text: '',
  shadow: '',
};

Colors.primary = Colors.purple;
Colors.border = Colors.purple20;
Colors.text = Colors.navy80;
Colors.shadow = Colors.purple20;

export function withAlpha(color: string, alpha: number) {
  return `rgba(${hexRgb(color).join(', ')}, ${alpha})`;
}

export default Colors;
