const path = require('path');

const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

module.exports = () => ({

    plugins: [

        new AngularCompilerPlugin({
            tsConfigPath: path.resolve(__dirname, 'tsconfig.json'),
            entryModule: path.resolve(__dirname, 'src/app/app.module#AppModule'),
            sourceMap: true,
        }),

    ],

});
