/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        darkMode: "class",
        extend: {
            colors: {
                primary: "#374151",
                primaryDark: "#1f2937",
                secondary: {
                    100: "#ff4c60",
                    200: "#f43f5e",
                },
                secondaryDark: {
                    100: "#d53f4c",
                    200: "#c53f4c",
                },
            },
        },
    },
    plugins: [],
};
