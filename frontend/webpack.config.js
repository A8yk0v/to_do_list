const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//const webpack = require('webpack');
////const resolveFileProjectLib = require("./node_modules/@biocad/bcd-front-server/lib/utils/resolveFileProjectLib");
//const postcssNormalize = require('postcss-normalize');
//const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

// module.exports = (env) => {
//     // const isEnvDevelopment = process.env.REACT_APP_ENVIRONMENT === 'dev'
//     //     || (!!env && env.REACT_APP_ENVIRONMENT === 'dev');
//     // const isEnvProduction = !isEnvDevelopment;
//     // const clientEnv = {
//     //     'process.env': {
//     //         REACT_APP_ENVIRONMENT: JSON.stringify(process.env.REACT_APP_ENVIRONMENT || (isEnvDevelopment ? 'dev' : undefined)),
//     //         PUBLIC_URL: '""',
//     //         REACT_APP_VERSION: JSON.stringify(process.env.REACT_APP_VERSION)
//     //     }
//     // };
//
//     // const getStyleLoaders = (cssOptions) => {
//     //     const loaders = [
//     //         'style-loader',
//     //         {
//     //             loader: 'css-loader',
//     //             options: cssOptions,
//     //         },
//     //         {
//     //             loader: 'postcss-loader',
//     //             options: {
//     //                 ident: 'postcss',
//     //                 plugins: () => [
//     //                     require('postcss-flexbugs-fixes'),
//     //                     require('postcss-preset-env')({
//     //                         autoprefixer: {
//     //                             flexbox: 'no-2009',
//     //                         },
//     //                         stage: 3,
//     //                     }),
//     //                     postcssNormalize(),
//     //                 ],
//     //                 sourceMap: isEnvProduction && shouldUseSourceMap,
//     //             },
//     //         }
//     //     ].filter(Boolean);
//     //
//     //     return loaders;
//     // };
//
//     return {
//         entry: "./src/index.js",
//         output: {
//             path: path.join(__dirname, "/dist"),
//             filename: "./index_bundle.js"
//         },
//         devServer: {
//             contentBase: path.join(__dirname, "dist"),
//             compress: true,
//             port: 9000,
//             watchContentBase: true,
//             progress: true
//         },
//
//         module: {
//             rules: [
//                 {
//                     test: /\.m?js$/,
//                     exclude: /(node_modules|bower_components)/,
//                     use: {
//                         loader: "babel-loader",
//                         options: {
//                             presets: ["@babel/preset-env", "@babel/preset-react"],
//                             plugins: [
//                                 ["@babel/plugin-proposal-class-properties", {"loose": true}],
//                                 ["@babel/plugin-proposal-optional-chaining"],
//                                 ["@babel/plugin-proposal-pipeline-operator", {"proposal": "minimal"}]
//                             ]
//                         }
//                     }
//
//                 },
//                 {
//                     test: /\.(less|css)$/,
//                     use: [
//                         {
//                             loader: 'style-loader',
//                         },
//                         {
//                             loader: 'css-loader',
//                         },
//                         {
//                             loader: 'less-loader',
//                             options: {
//                                 strictMath: true,
//                                 noIeCompat: true,
//                                 globalVars: require( "C:\\Users\\abykov\\IdeaProjects\\to_do_list\\frontend\\node_modules\\@biocad\\bcd-front-ui\\styles\\lessVars.js" )
//                             }
//                         }
//                     ]
//                 },
//                 // {
//                 //     test: /\.css$/i,
//                 //     use: getStyleLoaders({ importLoaders: 1, sourceMap: isEnvProduction && shouldUseSourceMap }),
//                 //     sideEffects: true
//                 // },
//             ]
//         },
//         plugins: [
//             new HtmlWebpackPlugin({
//                 template: "./public/index.html"
//             }),
//             // new webpack.DefinePlugin(clientEnv),
//         ]
//     };
// };

module.exports = {
    // const isEnvDevelopment = process.env.REACT_APP_ENVIRONMENT === 'dev'
    //     || (!!env && env.REACT_APP_ENVIRONMENT === 'dev');
    // const isEnvProduction = !isEnvDevelopment;
    // const clientEnv = {
    //     'process.env': {
    //         REACT_APP_ENVIRONMENT: JSON.stringify(process.env.REACT_APP_ENVIRONMENT || (isEnvDevelopment ? 'dev' : undefined)),
    //         PUBLIC_URL: '""',
    //         REACT_APP_VERSION: JSON.stringify(process.env.REACT_APP_VERSION)
    //     }
    // };

    // const getStyleLoaders = (cssOptions) => {
    //     const loaders = [
    //         'style-loader',
    //         {
    //             loader: 'css-loader',
    //             options: cssOptions,
    //         },
    //         {
    //             loader: 'postcss-loader',
    //             options: {
    //                 ident: 'postcss',
    //                 plugins: () => [
    //                     require('postcss-flexbugs-fixes'),
    //                     require('postcss-preset-env')({
    //                         autoprefixer: {
    //                             flexbox: 'no-2009',
    //                         },
    //                         stage: 3,
    //                     }),
    //                     postcssNormalize(),
    //                 ],
    //                 sourceMap: isEnvProduction && shouldUseSourceMap,
    //             },
    //         }
    //     ].filter(Boolean);
    //
    //     return loaders;
    // };

    entry: "./src/index.js",
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "./index_bundle.js"
        },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true
    },

        module: {
            rules: [
                {
                    test: /\.(js|mjs|jsx|ts|tsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            plugins: [
                                ["@babel/plugin-proposal-class-properties", {"loose": true}],
                                ["@babel/plugin-proposal-optional-chaining"],
                                ["@babel/plugin-proposal-pipeline-operator", {"proposal": "minimal"}]
                            ]
                        }
                    }

                },
                {
                    test: /\.(less|css)$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                strictMath: true,
                                noIeCompat: true,
                                globalVars: require( "C:\\Users\\abykov\\IdeaProjects\\to_do_list\\frontend\\node_modules\\@biocad\\bcd-front-ui\\styles\\lessVars.js" )
                            }
                        }
                    ]
                },
                // {
                //     test: /\.css$/i,
                //     use: getStyleLoaders({ importLoaders: 1, sourceMap: isEnvProduction && shouldUseSourceMap }),
                //     sideEffects: true
                // },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            }),
            // new webpack.DefinePlugin(clientEnv),
        ]
};
