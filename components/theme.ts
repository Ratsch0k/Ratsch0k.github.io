/**
 * Design tokens shared between the Tailwind config and the components that
 * need the raw values at runtime (canvas text measuring, SVG fills, inline
 * gradients).
 *
 * `tailwind.config.ts` is the only consumer that feeds these into Tailwind,
 * so this file is the single source of truth for them.
 */
export const colors = {
  primary: {
    lightest: '#c4d9ff',
    light: '#7ca4ef',
    DEFAULT: '#00398c',
    dark: '#14284f',
    contrast: '#FFFFFF',
    border: '#204d91',
  },
  secondary: {
    lightest: '#ffe5c3',
    light: '#FCAF58',
    DEFAULT: '#FF8C42',
    dark: '#d55200',
    contrast: '#FFFFFF',
  },
  background: {
    light: '#e3e3ff',
    dark: '#15162a',
  },
} as const;

export const fontFamily = {
  sans: ['Arial'],
} as const;

/**
 * Values taken from Tailwind's default theme. They are not part of our config,
 * but components need them at runtime, and importing Tailwind into the client
 * bundle just to read them is not worth it.
 */
export const screens = {
  lg: '1024px',
} as const;

export const fontSize = {
  sm: '0.875rem',
  '4xl': '2.25rem',
} as const;
