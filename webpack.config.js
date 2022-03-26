const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();
const srcPath = 'src';

module.exports = env => {
  console.log(`🛠️ Webpack running in ${env} mode 🛠️`);

  return {
    entry: {
     	main: `./${srcPath}/index.tsx`
    },
    resolve: {
      	extensions: ['.tsx', '.ts', '.js'],
		modules: [path.resolve('./src'), 'node_modules']
    },
    output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].[chunkhash].js',
		publicPath: '/'
    },
    devtool: env.dev ? 'eval-source-map' : 'source-map',
    devServer: {
      	open: true,
		port: 8080,
		historyApiFallback: true,
    },
    module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				loader: "ts-loader",
				options: {
                    getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
                }
			},
			{
				test: /\.txt$/i,
				use: {
					loader: 'raw-loader',
					options: {
						esModule: false
					}
				}
			  },
			// {
			// 	test: /\.(tsx|ts|js)x?$/,
			// 	exclude: /node_modules/,
			// 	use: {
			// 	  	loader: "babel-loader",
			// 	  	options: {
			// 			presets: [
			// 				"@babel/preset-env",
			// 				"@babel/preset-react",
			// 				"@babel/preset-typescript",
			// 			],
			// 	  	},
			// 	},
			// },
			// {
			// 	test: /\.(sass|scss|css)$/,
			// 	use: [
			// 		{ loader: MiniCssExtractPlugin.loader },
			// 		{
			// 			loader: 'css-loader',
			// 			options: env.dev ? {
			// 				modules: false,
			// 				sourceMap: true
			// 			} : {}
			// 		},
			// 		{
			// 			loader: 'postcss-loader',
			// 			options: { sourceMap: env.dev }
			// 		},
			// 		{
			// 			loader: 'sass-loader',
			// 			options: { sourceMap: env.dev }
			// 		},
			// 	]
      		// }
		]
    },
    plugins: [
		// new MiniCssExtractPlugin({
		// 	filename: env.dev ? 'style.css' : 'style.[contenthash].css'
		// }),
		new HtmlWebpackPlugin({
			inject: false,
			hash: !env.dev,
			template: `./${srcPath}/index.html`,
			filename: 'index.html'
		}),
		new webpack.DefinePlugin({
			_DEV_: !!env.dev
		}),
		new Dotenv({ path: '.env' })
    ]
  }
};