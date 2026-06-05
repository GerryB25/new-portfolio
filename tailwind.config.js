/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  important: true,
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      colors: {
        // Primary
        primary: 'var(--mat-sys-primary)',
        'on-primary': 'var(--mat-sys-on-primary)',
        'primary-container': 'var(--mat-sys-primary-container)',
        'on-primary-container': 'var(--mat-sys-on-primary-container)',
        'inverse-primary': 'var(--mat-sys-inverse-primary)',

        // Secondary
        secondary: 'var(--mat-sys-secondary)',
        'on-secondary': 'var(--mat-sys-on-secondary)',
        'secondary-container': 'var(--mat-sys-secondary-container)',
        'on-secondary-container': 'var(--mat-sys-on-secondary-container)',

        // Tertiary
        tertiary: 'var(--mat-sys-tertiary)',
        'on-tertiary': 'var(--mat-sys-on-tertiary)',
        'tertiary-container': 'var(--mat-sys-tertiary-container)',
        'on-tertiary-container': 'var(--mat-sys-on-tertiary-container)',

        // Error
        error: 'var(--mat-sys-error)',
        'on-error': 'var(--mat-sys-on-error)',
        'error-container': 'var(--mat-sys-error-container)',
        'on-error-container': 'var(--mat-sys-on-error-container)',

        // Background / surfaces
        background: 'var(--mat-sys-background)',
        'on-background': 'var(--mat-sys-on-background)',
        surface: 'var(--mat-sys-surface)',
        'on-surface': 'var(--mat-sys-on-surface)',
        'on-surface-variant': 'var(--mat-sys-on-surface-variant)',
        'surface-variant': 'var(--mat-sys-surface-variant)',
        'surface-dim': 'var(--mat-sys-surface-dim)',
        'surface-bright': 'var(--mat-sys-surface-bright)',
        'surface-container-lowest': 'var(--mat-sys-surface-container-lowest)',
        'surface-container-low': 'var(--mat-sys-surface-container-low)',
        'surface-container': 'var(--mat-sys-surface-container)',
        'surface-container-high': 'var(--mat-sys-surface-container-high)',
        'surface-container-highest': 'var(--mat-sys-surface-container-highest)',
        'inverse-surface': 'var(--mat-sys-inverse-surface)',
        'inverse-on-surface': 'var(--mat-sys-inverse-on-surface)',

        // Outline
        outline: 'var(--mat-sys-outline)',
        'outline-variant': 'var(--mat-sys-outline-variant)',
      },
    },
  },
  plugins: [],
};
