const path = require('path')

const config = {
    mode: 'development',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        //path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }
}

module.exports = config