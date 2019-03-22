import Text, {
  Types as TextTypes,
  TypeToStyle as TextTypeToStyle,
} from './components/Text';
import Link, {
  Types as LinkTypes,
  TypeToStyle as LinkTypeToStyle,
} from './components/Link';
import GlobalStyle from './GlobalStyle';
import colors from './colors';

export * from './components/Layout';
export * from './styles';

export {
  Text,
  TextTypes,
  GlobalStyle,
  Link,
  LinkTypes,
  colors,
  TextTypeToStyle,
  LinkTypeToStyle,
};
