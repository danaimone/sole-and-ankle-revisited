export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)',
  },
  primary: 'hsl(340deg 65% 47%)',
  secondary: 'hsl(240deg 60% 63%)',
};


export const BREAKPOINTS = {
  phoneMax: 600,
  tabletMax: 950,
  laptopMax: 1300,
  phoneMaxInREM: 600,
  tabletMaxInREM: 950,
  laptopMaxInREM: 1300,
}

export const QUERIES = {
  /* Default styling is for desktop in this application. */
  'phone': `(max-width: ${BREAKPOINTS.phoneMaxInREM}rem)`,
  'tablet': `(max-width: ${BREAKPOINTS.tabletMaxInREM}rem)`,
  'laptop': `(max-width: ${BREAKPOINTS.laptopMaxInREM}rem)`,
}

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};
