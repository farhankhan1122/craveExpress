/** @type {import('tailwindcss').Config} */
module.exports = {
  // safelist: ["shimmer_card", "shimmer_container", "shimmer_card_video"],
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textcolor: "rgba(2, 6, 12, 0.92)",
        textlightcolor: "rgba(2, 6, 12, 0.6)",
        greentextcolor: "rgb(27, 166, 114)",
        imageBackground: "rgb(224, 238, 245)",
        buttonbordercolor: "rgba(2, 6, 12, 0.15)",
        
    },
    fontFamily: {
      custom: ['gilroyextrabold', 'sans-serif'],
    },
    boxShadow: {
      'custom': '0 15px 40px -20px rgba(40,44,63,.15)', // custom shadow
    }
    },
  },
  plugins: [],
}

