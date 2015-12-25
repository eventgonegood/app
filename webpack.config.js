module.exports = {
    entry: "./resources/app/public/entry.js",
    output: {
        path: __dirname,
        filename: "./resources/app/public/bundle.js"
    },
    resolve: {
                 fallback: [__dirname + "/node_modules"]
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
