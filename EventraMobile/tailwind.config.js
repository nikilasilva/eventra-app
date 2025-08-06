/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#7041D3",
                // Define shades for gradients or secondary uses
                primaryLight: "#9D7FEA",
                secondary: {
                    100: "#E2E2D5",
                    200: "#888281",
                },
                // Standard black and white
                black: "#000000",
                white: "#FFFFFF",
                primaryText: "#F1F1F1",
                secondaryText: "#B3B3B3",
                text: {
                    error: "#EF4444",
                    success: "#22C55E",
                    info: "#22D3EE",
                },
                darkGray: "#1A1A1A",

                // You can also add grays for text, borders, etc.
                gray: {
                    100: "#CDCDE0",
                },
            },
            fontFamily: {
                pjsregular: ["PlusJakartaSans-Regular", "sans-serif"],
                pjsmedium: ["PlusJakartaSans-Medium", "sans-serif"],
                pjssemibold: ["PlusJakartaSans-SemiBold", "sans-serif"],
                pjsbold: ["PlusJakartaSans-Bold", "sans-serif"],
                pjsextrabold: ["PlusJakartaSans-ExtraBold", "sans-serif"],
                lalezarregular: ["Lalezar-Regular", "sans-serif"],
            }
        },
    },
    plugins: [],
}