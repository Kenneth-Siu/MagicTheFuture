module.exports = {
    entry: {
        visualSpoiler: "./src/visualSpoiler/visualSpoiler.tsx",
        draftSim: "./src/draftSim/draftSim.tsx",
        primer: "./src/primer/primer.tsx",
        powerRankings: "./src/powerRankings/powerRankings.tsx",
        home: "./src/home/home.tsx"
    },
    output: {
        filename: "[name].bundle.js",
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
            { test: /\.png?$/, loader: "file-loader" },
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