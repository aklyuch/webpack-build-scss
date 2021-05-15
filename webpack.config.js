const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
    entry: './src/app.js',
    mode: 'production',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080,
        index: 'index.html'
    },
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: env.production ? MiniCssExtractPlugin.loader : "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    },

                    ]
            },
            {
                test: /\.hbs/,
                use: 'handlebars-loader'
            },
            {
                test: /\.(svg|gif|png|eot|woff|ttf)$/,
                include: path.resolve(__dirname, 'img'),
                use: [
                    'url-loader',
                ],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.hbs'),
            title: ''
        })
    ],
});
