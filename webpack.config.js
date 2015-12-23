module.exports = {
    entry: "./resources/app/public/entry.js",
    output: {
        path: __dirname,
        filename: "./resources/app/public/bundle.js"
    },
    module: {
                loaders: [
                { test: /\.css$/, loader: "style!css!postcss" }
                ]
            },
    postcss: function () {
                 return [require('autoprefixer'), require('precss'), require('lost')];
             }
};
