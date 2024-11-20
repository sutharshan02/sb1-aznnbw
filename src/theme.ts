export const theme = {
  colors: {
    primary: {
      50: '#e6f0ff',
      100: '#b3d1ff',
      500: '#0066CC',
      600: '#0052a3',
      700: '#003d7a',
      800: '#002952',
      900: '#001429'
    },
    secondary: {
      500: '#00B67A',
      600: '#009161',
      700: '#006d49',
      800: '#004830',
      900: '#002418'
    },
    dark: {
      100: '#1a1a1a',
      200: '#2d2d2d',
      300: '#404040',
      400: '#525252',
      500: '#666666',
      600: '#808080',
      700: '#999999',
      800: '#b3b3b3',
      900: '#cccccc'
    },
    light: {
      50: '#ffffff',
      100: '#fafafa',
      200: '#f5f5f5',
      300: '#e5e5e5',
      400: '#d4d4d4'
    }
  },
  gradients: {
    primary: 'from-[#0066CC] to-[#00B67A]',
    dark: 'from-dark-200 to-dark-100'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease'
  }
} as const;