/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./public/index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'base-blue': '#6486FF',
        'base-black': '#05050F',
        'base-dark': '#0F0F2A',
        'button-red': '#FF6464',
        'light-purple': '#C751FF',
      },
      borderRadius: {
        base: '8px',
      },
    },
  },
};
