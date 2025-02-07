import 'styled-components';
import { ThemeTypes } from '@agency-platform/themes';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypes {}
}
