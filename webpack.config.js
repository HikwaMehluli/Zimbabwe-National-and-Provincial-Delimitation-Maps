const path = require('path');

module.exports = {
    entry: './src/js/_entry.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist/js'),
    },
    // Resolves bare imports from src/js/
    resolve: {
        modules: [path.resolve(__dirname, 'src/js'), 'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // style-loader + css-loader for tippy.css
            },
        ],
    },
};