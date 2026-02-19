export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta base Rana Walk
        'rw-navy':       '#013A57',
        'rw-teal':       '#066383',
        'rw-mint':       '#75CBB3',
        'rw-dark':       '#0F172A',
        'rw-coral':      '#EF4E54',
        'rw-sand':       '#C5A96A',
        'rw-mint-50':    '#E6FFFB',
        // Paleta producto GOLIATH
        'goliath-primary':   '#1A1A2E',
        'goliath-accent':    '#E94560',
        // Paleta producto VELOX
        'velox-primary':     '#0D0D0D',
        'velox-accent':      '#7B2DBF',
        'rw-velox':          '#7B2DBF',
        // Paleta producto LEOPARD
        'leopard-primary':   '#1C1C1C',
        'leopard-accent':    '#D4A017',
        // Paleta producto ORBIS
        'orbis-primary':     '#0A1628',
        'orbis-accent':      '#00B4D8',
        // Tecnologías
        'tech-leapcore':     '#75CBB3',
        'tech-sphere-teal':  '#066383',
      },
      fontFamily: {
        'display': ['"Big Shoulders Display"', 'sans-serif'],
        'body':    ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
