const PALETTE = {
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  primary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
  },
  light: '#ffffff',
  lightGray: '#D8D7DB',
  gray: '#C3BEC0',
  darkGray: '#5C5E5B',
  dark: '#131410',
  accent: '#39ff14',
  error: '#',
};

export const COLORS = {
  container: {
    background: PALETTE.slate[100],
    borderColor: PALETTE.slate[200],
  },
  avatar: {
    background: PALETTE.slate[300],
  },
  status: {
    online: PALETTE.primary[300],
    offline: PALETTE.slate[300],
  },
  header: {
    title: PALETTE.slate[700],
    subheading: PALETTE.slate[500],
  },
  fonts: {
    heading: PALETTE.darkGray,
    muted: PALETTE.slate[500],
  },
  badge: {
    primary: {
      background: PALETTE.slate[300],
      text: PALETTE.slate[900],
    },
  },
  loader: {
    primary: PALETTE.primary[600],
    slate: PALETTE.slate[600],
  },
  input: {
    backgroundColor: PALETTE.slate[200],
    borderColor: PALETTE.slate[400],
    iconColor: PALETTE.slate[600],
  },
  button: {
    primary: {
      backgroundColor: PALETTE.gray,
      color: PALETTE.darkGray,
    },
  },
  background: PALETTE.lightGray,
  body: PALETTE.dark,
  border: PALETTE.gray,
  inputBg: PALETTE.light,
  accent: PALETTE.accent,
};

export const FONT_SIZE = {
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
};

export const SPACING = {
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
};
