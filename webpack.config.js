const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require ('copy-webpack-plugin')

module.exports = () => {
    const isProduction = process.env.NODE_ENV === 'production';
    const conf = {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'none' : 'source-map',
        watch: !isProduction,
        devServer: {
          contentBase: path.join(__dirname, 'static'),
          compress: false,
          port: 9000,
          open: true
        },
      
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'main.js',
        },
        resolve: {
            modules: [path.resolve(__dirname, './src'), 'node_modules'],
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.m?jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                      }
                    }
                  },
                  {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                  },
                  {
                    test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    loader: 'file-loader?name=fonts/[name].[ext]'
                  },
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
              title: 'HW2',
              template: 'index.html',
              filename: 'index.html'
            }),
        ]
    };
    return conf;
};