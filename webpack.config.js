const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
	output: {
		path: path.join(__dirname, '/dist'),
		// the index bulde all /\.(js|jsx)$/ except node_modules into dist, remember link to index.html
		filename: 'index.bundle.js',
		assetModuleFilename: 'images/[hash][ext][query]',
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
					{
						loader: MiniCssExtractPlugin.loader,
						options: {publicPath: ''},
					},
					// conver css to style
					'css-loader',
					// postcss
					'postcss-loader',
					// convert scss file to css
					'sass-loader',
				],
			},
			// images
			{
				/**
				 * info: https://webpack.js.org/guides/asset-modules/
				 * type: 'asset' | 'asset/resource' | asset/inline'
				 */
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				// type: 'asset/resource', // as separated files
				type: 'asset', // webpack automatcially make dicision by itself which file should as resource or inline
				// Now webpack will automatically choose between resource and inline by following a default condition: a file with size less than 8kb will be treated as a inline module type and resource module type otherwise.
				// type: 'asset/inline',
				// in js directly, sth. like data:image/jpeg;base64 and will exceed the buldle size
				// if there is really small image, that is okay as it could save band with to load extra api for asset
				// which directly stay as js file
				// here we could set maxSize whether the file inline or resource
				// parser: {
				// 	dataUrlCondition: {
				// 		maxSize: 60 * 1024, // 30kb
				// 	},
				// },
			},
		],
	},
	plugins: [new MiniCssExtractPlugin(), new ESLintPlugin()],
	resolve: {
		extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
	},
}
