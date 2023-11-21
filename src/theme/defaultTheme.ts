import {
  extendTheme,
  theme as baseTheme,
  ThemeOverride,
  withDefaultColorScheme,
} from '@chakra-ui/react';

const brand: ThemeOverride['colors'] = {
  black: '#000',
  white: '#fff',
  yellow: baseTheme.colors.yellow[300],
};

const grey: ThemeOverride['colors'] = {
  background: baseTheme.colors.blackAlpha[200],
  lightAction: baseTheme.colors.blackAlpha[300],
  title: baseTheme.colors.blackAlpha[800],
  lightText: baseTheme.colors.blackAlpha[700],
  darkText: baseTheme.colors.blackAlpha[800],
};

const colors = {
  brand,
  grey,
};

export const defaultTheme = extendTheme(
  { ...baseTheme, colors },
  withDefaultColorScheme({ colorScheme: 'brand' }),
);
