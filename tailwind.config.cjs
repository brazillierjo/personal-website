/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#374151",
                secondary: {
                    100: "#ff4c60",
                    200: "#f43f5e",
                },
            },
        },
    },
    plugins: [],
};
