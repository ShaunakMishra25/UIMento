/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      screens: {
        xs: "375px", /* small phones — iPhone SE */
        sm: "640px", /* large phones */
        md: "768px", /* tablets portrait */
        lg: "1024px", /* tablets landscape, laptops */
        xl: "1280px", /* desktops */
        "2xl": "1536px", /* large desktops */
      },
      spacing: {
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-top": "env(safe-area-inset-top)",
      },
    },
  },
};

export default config;
