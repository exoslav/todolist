const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
			}
		]
    },
    plugins: [
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