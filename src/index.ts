import Text, {
    Types as TextTypes,
    TypeToStyle as TextTypeToStyle,
} from './components/Text';
import Link, {
    Types as LinkTypes,
    TypeToStyle as LinkTypeToStyle,
} from './components/Link';
import configureGlobal from './configureGlobal';
import colors from './colors';

export * from './components/Layout';
export * from './styles';

export {
    Text,
    TextTypes,
    configureGlobal,
    Link,
    LinkTypes,
    colors,
    TextTypeToStyle,
    LinkTypeToStyle,
};
