module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {loader: 'css-loader', options: {url: false}}
                ]
            }
        ]
    }
};
