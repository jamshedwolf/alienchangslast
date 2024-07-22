/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    extend: {
        keyframes: {
            'slide-in': {
                '0%': { transform: 'translateY(100%)' },
                '100%': { transform: 'translateY(0)' },
            },
        },
        animation: {
            'slide-in': 'slide-in 0.5s ease-in-out',
        },
    },
    theme: {
        extend: {
            zIndex: {
                '100': '100',
            },
        },
    },
    plugins: [require('daisyui')],
}