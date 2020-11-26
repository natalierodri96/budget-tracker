

const WebpackPwaManifest=require("webpack-pwa-manifest");

const path=require("path");

const config = {
    mode: "production",
    entry: {
        index:"./public/index.js",
        detail:".public.offline.js",
    },
    output:{
        path:__dirname + "/public/dist",
        filename: "index.bundle.js"
    },
    plugins: [
        new WebpackPwaManifest({
            name:"Budget-Tracker",
            short_name:"Budget-Tracker",
            background_color:#ffffff ,
            theme_color: #ffffff,
            start_url: "/",
            icons: [
                {
                    src: path.resolve("/public/icons/icon-192x192.png"),
                    sizes:[96,128,192,256,384,512],
                },
            ]

        })
    ],
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presents:["@babel/present-env"]
                    }
                }
            }
        ]
    }
};
module.exports=config; 