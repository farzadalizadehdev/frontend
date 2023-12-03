const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
    },
    // resolve: {
    //     alias: {
    //         //   utilities: path.resolve(__dirname, './src/utilities/'),
    //         Components: path.resolve(__dirname, './src/components/'),
    //         Pages: path.resolve(__dirname, './src/components/pages'),
    //         //   hooks: path.resolve(__dirname, './src/hooks/'),
    //         Routes: path.resolve(__dirname, './src/routes/'),
    //     },
    // },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            ["@babel/preset-react", { "runtime": "automatic" }]
                        ]
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
    ],
    devServer: {
        hot: true,
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
};