const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
	output: {
		path: path.join(__dirname, '/dist'),
		// the index bulde all /\.(js|jsx)$/ except node_modules into dist, remember link to index.html
		filename: 'index.bundle.js',
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 9000,
	},
	devtool: 'source-map',
	module: {
		// load babel
		rules: [
			{
				// what type of files for
				test: /\.(js|jsx|ts|tsx)$/,
				// exclude files
				exclude: /node_modules/,
				// what loader for translate the test files
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.s?css$/,
				use: [
					// This will create a inline style at page head tag
					// 'style-loader',
					// here will extract css to a separated main.css by default, remember link to index.html
					MiniCssExtractPlugin.loader,
					// conver css to style
					'css-loader',
					// postcss
					'postcss-loader',
					// convert scss file to css
					'sass-loader',
				],
			},
		],
	},
	plugins: [new MiniCssExtractPlugin(), new ESLintPlugin()],
	resolve: {
		extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
	},
}
