const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
    mode: 'development',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        //path: path.resolve(__dirname, 'dist'), DEFECTO
        filename: 'main.js',
        //public_path: './dist/'
    },
    module: {
        rules: [
            // LOADERS
            {
                test: /\.css$/,
                /*use: [
                    { loader: 'style-loader' }, 
                    { loader: 'css-loader' }
                ]*/
                use: ExtractTextPlugin.extract({
                    //fallback: 'style-loader'
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css")
    ]
    //watch: true habilita los cambios en caliente
}

module.exports = config