const path = require('path')

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
                use: [
                    { loader: 'style-loader' }, 
                    { loader: 'css-loader' }
                ]
            }
        ]
    }
}

module.exports = config