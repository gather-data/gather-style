const Colors = {
  navy: '#102C5C',
  purple: '#5D75F6',
  blue: '#85D1F2',
  red: '#F75353',
  beige: '#F5CE98',
  white: '#fff',

  // Not to be used directly
  navy80: 'rgba(36, 34, 50, 0.8)',
  navy60: 'rgba(36, 34, 50, 0.6)',
  navy40: 'rgba(36, 34, 50, 0.4)',
  purple80: 'rgba(93, 117, 246, 0.8)',
  purple60: 'rgba(93, 117, 246, 0.6)',
  purple20: 'rgba(93, 117, 246, 0.2)',
  purple10: 'rgba(93, 117, 246, 0.1)',
  purple5: 'rgba(93, 117, 246, 0.05)',
  white60: 'rgba(255, 255, 255, 0.6)',
  white20: 'rgba(255, 255, 255, 0.2)',

  primary: '',
  border: '',
  text: '',
  textWhiteFaded: '',
  shadow: '',
};

Colors.primary = Colors.purple;
Colors.border = Colors.purple20;
Colors.text = Colors.navy80;
Colors.textWhiteFaded = Colors.white60;
Colors.shadow = Colors.purple20;

export default Colors;
