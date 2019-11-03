const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const hostName  = 'http://wordpress.test.loc/';
const buildFolder  = 'D:\\OSPanel\\domains\\wordpress.test.loc\\wp-content\\themes\\myTheme\\';

module.exports = {
	mode: "production",
	context: path.resolve(__dirname, 'wp_theme'),
	entry: {
		main: [
			'./assets/js/main.js', 
			'./assets/style/main.scss'
		],
	},
	output: {
        path: buildFolder + 'assets/bundles/',
        filename: "bundle.js"
	},
	resolve: {
		extensions: ['.js', '.scss']
	},
	watch: false,
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
				//   'postcss-loader',
					'sass-loader',
				],
			},
			// {
			// 	test: /\.js$/,
			// 	exclude: /node_modules/,
			// 	use: [
			// 		{
			// 			loader: 'babel-loader'
			// 		}
			// 	]
			// },

			// Loading images
			{
				test: /\.(png|jpg|jpeg|gif|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'img',
							name: '[name].[ext]'
						}
					}
				]
			},

			// Loading fonts
			{
				test: /\.(ttf|otf|eot|woff|woff2|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'fonts',
							name: '[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new CaseSensitivePathsPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// all options are optional
			filename: '[name].css',
			chunkFilename: '[id].css',
			ignoreOrder: false, // Enable to remove warnings about conflicting order
		  }),
		new CopyPlugin([
			{
				from: './style.css',
				to: buildFolder,
			},
			{
				from: './screenshot.png',
				to: buildFolder,
			},
			{
				from: './**/*.php',
				to: buildFolder,
			},
			{
				from: './assets/fonts',
				to: buildFolder + 'assets/fonts/',
			},
			{
				from: './assets/video',
				to: buildFolder + 'assets/video/',
			},
			{
				from: './assets/img',
				to: buildFolder + 'assets/img/',
			},
		]),
	],
	devtool: 'source-map',
	devServer: {
		contentBase: hostName,
		// compress: true,
		// port: 9000
	}
};
