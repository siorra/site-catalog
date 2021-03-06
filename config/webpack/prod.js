require('regenerator-runtime/runtime');

let fs = require('fs');
let path = require('path');
let webpack = require('webpack');
// let postcssAssets = require('postcss-assets');
// let postcssNext = require('postcss-cssnext');
let stylelint = require('stylelint');
let ManifestPlugin = require('webpack-manifest-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
  bail: true,

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname), 'node_modules', 'app', 'app/redux'],
  },

  entry: {
    app: './src/client.tsx',
    vendor: [
      './src/vendor/main.ts',
      'react',
      'react-dom',
      'react-router',
      'react-helmet',
      'react-redux',
      'react-router-redux',
      'redux',
      'redux-connect',
      'redux-thunk'
    ]
  },

  output: {
    path: path.resolve('./build/public'),
    publicPath: '/public/',
    filename: 'js/[name].[chunkhash].js'
    // filename: 'js/[name].js'
  },

  module: {
    rules: [
    // {
    //   enforce: 'pre',
    //   test: /\.tsx?$/,
    //   loader: 'tslint-loader'
    // },

    {
      test: /\.(ts|tsx)$/,
      include: path.resolve('./src'),
      use: [
        {
          loader: 'ts-loader',
          options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true,
          },
        },
      ],
    },

    {
      test: /\.jsx$/,
      loader: 'babel-loader'
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    },
    {
      test: /\.scss$/,
      include: path.resolve('./src/app'),
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]'
          // , 'postcss-loader'
        ]
      })
    },
    {
      test: /\.scss$/,
      exclude: path.resolve('./src/app'),
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
        ]
      })
    },
    {
      test: /\.css$/,
      exclude: path.resolve('./src/app'),
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
        ]
      })
    },
    {
      test: /\.eot(\?.*)?$/,
      loader: 'file-loader?name=fonts/[hash].[ext]'
    },
    {
      test: /\.(woff|woff2)(\?.*)?$/,
      loader: 'file-loader?name=fonts/[hash].[ext]'
    },
    {
      test: /\.ttf(\?.*)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
    },
    {
      test: /\.svg(\?.*)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
    },
    {
      test: /\.(jpe?g|png|gif)$/i,
      loader: 'url-loader?limit=1000&name=images/[hash].[ext]'
    }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        tslint: {
          failOnHint: true
        },
        // postcss: function () {
        //   return [
        //     stylelint({
        //       files: '../../src/app/*.css'
        //     }),
        //     postcssNext(),
        //     postcssAssets({
        //       relative: true
        //     }),
        //   ];
        // },
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name].[chunkhash].js',
      minChunks: Infinity
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new ExtractTextPlugin('css/[name].[hash].css'),
    new ManifestPlugin({
      fileName: '../manifest.json'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('production')
      }
    })
    // ,
    // function() {
    //   this.plugin('done', function(statsData) {
    //     let stats = statsData.toJson();

    //     if (!stats.errors.length) {
    //       let htmlFileName = 'index.html';
    //       let html = fs.readFileSync(path.join(__dirname, htmlFileName), 'utf8');

    //       let htmlOutput = html.replace(
    //         /<script\s+src=(["'])(.+?)app\.js\1/i,
    //         '<script src=$1$2' + stats.assetsByChunkName.main[0] + '$1');

    //       fs.writeFileSync(
    //         path.join(__dirname, '%public%', htmlFileName),
    //         htmlOutput);
    //     }
    //   });
    // }
  ]
};

const copySync = (src, dest, overwrite) => {
  if (overwrite && fs.existsSync(dest)) {
    fs.unlinkSync(dest);
  }
  const data = fs.readFileSync(src);
  fs.writeFileSync(dest, data);
};

const createIfDoesntExist = dest => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }
};

createIfDoesntExist('./build');
createIfDoesntExist('./build/public');
copySync('./src/favicon.ico', './build/public/favicon.ico', true);

module.exports = config;
