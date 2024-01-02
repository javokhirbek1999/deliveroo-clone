module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", './screens/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
    theme: {
    extend: {
        spacing: {
            '-15px': '-15px'
        }
    },
    },
    plugins: [],
    // corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}