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
  phoneMaxInREM: 37.5,
  tabletMaxInREM: 59.375,
  laptopMaxInREM: 81.25,
}

export const QUERIES = {
  /* Default styling is for desktop in this application. */
  'phoneAndSmaller': `(max-width: ${BREAKPOINTS.phoneMaxInREM}rem)`,
  'tabletAndSmaller': `(max-width: ${BREAKPOINTS.tabletMaxInREM}rem)`,
  'laptopAndSmaller': `(max-width: ${BREAKPOINTS.laptopMaxInREM}rem)`,
}

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const THEME = {
  QUERIES,
  WEIGHTS,
  COLORS
}
