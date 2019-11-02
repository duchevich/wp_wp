const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const hostName  = 'http://domain.loc/';
const buildFolder  = 'D:\\OSPanel\\domains\\dwebdev.in.ua\\wp-content\\themes\\myTheme\\';

module.exports = {
	// mode: "development",
	context: path.resolve(__dirname, 'wp_theme'),
	entry: "./assets/js/main.js",
	output: {
        path: buildFolder + 'assets/js/',
        filename: "bundle.js"
	},
	resolve: {
		extensions: ['.js']
	},
	watch: false,
	module: {
		rules: [
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
			// {
			// 	test: /.\..\.(png|jpg|jpeg|gif|ico)$/,
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				outputPath: 'images',
			// 				name: '[name]-[sha1:hash:7].[ext]'
			// 			}
			// 		}
			// 	]
			// },

			// Loading fonts
			// {
			// 	test: /\.(ttf|otf|eot|woff|woff2)$/,
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				outputPath: 'fonts',
			// 				name: '[name].[ext]'
			// 			}
			// 		}
			// 	]
			// }
		]
	},
	plugins: [
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
};
