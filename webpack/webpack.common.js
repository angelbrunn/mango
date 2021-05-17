const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// info - env files
require('dotenv').config();

module.exports = {
    entry: path.join(__dirname, '../src/index.jsx'),
    devtool: false,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: { compact: true }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|ico)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/icons/'
                        }
                    }
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    plugins: [
        new webpack.DefinePlugin({
            // LOARD ALL VARIALS INTO CONFIG - DEPENT ENV
            CONFIG: {
                ENV_MODE: JSON.stringify(process.env.ENV_MODE),
                PROJECT_NAME: JSON.stringify(process.env.PROJECT_NAME),
                PATH_MANGO_FOLDER: JSON.stringify(
                    process.env.PATH_MANGO_FOLDER
                ),
                PATH_ASSET_MANGO_FOLDER: JSON.stringify(
                    process.env.PATH_ASSET_MANGO_FOLDER
                ),
                URL_API: JSON.stringify(process.env.URL_API)
            }
        }),
        // THIS CLEAN THE DIST FOLDER - dont work
        new CleanWebpackPlugin({
            root: path.resolve(__dirname, '../'),
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/index.html'),
            filename: 'index.html',
            title: process.env.PROJECT_NAME,
            base_path: process.env.PATH_MANGO_FOLDER
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[hash].bundle.css',
            chunkFilename: '[hash].bundle.css'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, '../src/assets/favicon.ico'),
                    to: '../dist/assets/'
                },
            ]
        })
    ]
};
