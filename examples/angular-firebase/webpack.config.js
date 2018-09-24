const path = require('path');

const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rxPaths = require('rxjs/_esm2015/path-mapping');

/** {Configuration} **/
module.exports = {

    entry: {
        'main': './src/main.ts',
    },

    resolve: {

        alias: rxPaths(),

    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    '@ngtools/webpack',
                ]
            },

            // inline component scss
            {
                test: /\.component\.scss$/,
                use: [
                    'to-string-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },

            // extract global scss
            {
                test: /\.scss$/,
                exclude: [/\.component\.scss$/],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader?sourceMap',
                    'sass-loader?sourceMap',
                ],
            },
        ],
    },

    plugins: [

        new AngularCompilerPlugin({
            tsConfigPath: path.resolve(__dirname, 'tsconfig.json'),
            entryModule: path.resolve(__dirname, 'src/app/app.module#AppModule'),
            sourceMap: true,
        }),

        new MiniCssExtractPlugin(),

    ],

};