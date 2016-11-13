module.exports = {
    entry: "./src/visualSpoiler.tsx",
    output: {
        filename: "visualSpoilerBundle.js",
        path: __dirname + "/dist"
    },

    devtool: "source-map",

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.jpg?$/, loader: "file-loader" },
            { test: /\.json$/, loader: "json" }
        ],

        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};