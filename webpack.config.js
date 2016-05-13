/**
 * Created by Lever on 16/5/12.
 */
module.exports = {
    // entry: ['./components/header.js','./components/footer.js','./components/appInfo.js','./components/incInfo.js','./components/applyUse.js','./components/index.js','./components/app.js'],
    entry: './components/app.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.js[x]?$/, exclude: /node_modules/, loader: 'es3ify!babel-loader?presets[]=es2015&presets[]=react'}
        ]
    }
};