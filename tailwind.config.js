/** @type {import('tailwindcss').Config} */
export default {
    content : [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}", // adapte selon la structure de ton projet
    ],
    theme : {
        extend: {
            colors: {
                amber: {
                    50: '#fffbf0',
                    100: '#fef3c7',
                    200: '#fde68a',
                    300: '#fcd34d',
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                    700: '#b45309',
                    800: '#92400e',
                    900: '#78350f',
                },
                orange: {
                    100: '#fff7ed',
                    200: '#ffedd5',
                    300: '#fed7aa',
                    400: '#fdba74',
                    500: '#fb923c',
                    600: '#f97316',
                    700: '#ea580c',
                    800: '#c2410c',
                    900: '#9a3412',
                }
            },
            animation: {
                pulse: 'pulse 3s ease-in-out infinite',
            }
        }
    },
    plugins : [],
}
