const componentConfig =[
    {
        _id:"001",
        css: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
        tailwindcss: `/** @type {import('tailwindcss').Config} */
        module.exports = {
          content: ["./src/**/*.{html,js}"],
          theme: {
            extend: {},
              screens: {
              "sm": { "max": "640px" },
              // => @media (min-width: 640px) { ... }
              "mdsm": "641px",
              // => @media (min-width: 768px) { ... }
              "md": "768px",
              // => @media (min-width: 768px) { ... }
              "lge": "960px",
              // => @media (min-width: 1024px) { ... }
              "lg": "1150px",
              // => @media (min-width: 1024px) { ... }
              "xl": "1280px",
              // => @media (min-width: 1280px) { ... }
              "2xl": "1536px",
              // => @media (min-width: 1536px) { ... }
            },
          },
          plugins: [],
        }
        `,


        
    }
]

export default componentConfig