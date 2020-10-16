module.exports = {
    mode: 'production',
    entry: {
        index: './es6/index.js',
    },
    output: {

        /**
         * Output location/name of assets.
         */
        filename: '[name].js',
        path: __dirname
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            /**
             * Use babel to transpile JS.
             */
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            }
        ]
    }
};
