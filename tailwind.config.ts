const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#3b82f6", // Vibrant modern blue accent
        dark: {
          900: "#09090b",
          800: "#18181b",
          700: "#27272a",
        },
      },
    },
  },
  plugins: [],
};
export default tailwindConfig;