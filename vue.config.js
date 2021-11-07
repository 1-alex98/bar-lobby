module.exports = {
    lintOnSave: true,
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                    @import "@/assets/styles/_variables.scss";
                    @import "@/assets/styles/_mixins.scss";
                    @import "@/assets/styles/_utils.scss";
                `,
            }
        }
    },
    configureWebpack: {
        devtool: process.env.NODE_ENV !== "production" ? "source-map" : false
    },
    pluginOptions: {
        electronBuilder: {
            mainProcessFile: "src/main.ts",
            mainProcessWatch: ["src/main", "src/main-window"],
            rendererProcessFile: "src/render.ts",
            preload: "src/preload.ts",
            builderOptions: {
                productName: "BAR Lobby",
                directories: {
                    buildResources: "build"
                }
            },
            // chainWebpackRendererProcess: (config) => {
            //     config.module
            //         .rule("base64-images")
            //         .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
            //         .use("url-loader")
            //         .loader("url-loader")
            //         .options({
            //             limit: 99999999
            //         })
            //         .end();
            // }
        },
        autoRouting: {
            pages: "src/views",
            chunkNamePrefix: "view-",
            importPrefix: "@/views/",
            nested: false,
            dynamicImport: false,
            outFile: "src/routes.ts",
        }
    }
};
