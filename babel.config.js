module.exports = (api) => {
    api.cache(true);
    const presets = [
        [
            "@babel/preset-env", {
                targets: {
                    "ie": "10",
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "67",
                    "safari": "11.1"
                },
                useBuiltIns: 'usage',
            }
        ]
    ];
    const plugins = [
        ['@babel/plugin-transform-runtime', {
            "corejs": { version: 2 }
        }]
    ];
    return {
        presets,
        plugins
    }
}