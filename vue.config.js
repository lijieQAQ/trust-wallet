/* eslint-disable @typescript-eslint/no-var-requires */
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const ExtensionReloader = require("webpack-ext-reloader");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development";
// copy file to dist
const copyFiles = [
  {
    from: path.resolve("src/manifest.json"),
    to: path.resolve("dist"),
  },
  {
    from: "src/_locales",
    to: path.join(__dirname, "dist/_locales/"),
    force: true,
  },
  {
    from: "src/style/tailwind.js",
    to: path.join(__dirname, "dist/tailwind.js"),
    force: true,
  },
  {
    from: path.resolve("assets"),
    to: path.resolve("dist/assets"),
  },
];

// dev hot reload
// https://github.com/SimplifyJobs/webpack-ext-reloader
const hotReload = isDev
  ? [
      new ExtensionReloader({
        reloadPage: true,
        manifest: path.resolve(__dirname, "src/manifest.json"),
      }),
    ]
  : [];

module.exports = {
  productionSourceMap: false,
  pages: {
    popup: {
      entry: `src/popup/index.ts`,
      template: `pages/popup.html`,
      filename: `pages/popup.html`,
    },
    options: {
      entry: `src/options/index.ts`,
      template: `pages/options.html`,
      filename: `pages/options.html`,
    },
  },
  configureWebpack: {
    mode: isDev ? "development" : "production",
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        url: require.resolve("url"),
        buffer: require.resolve("buffer/"),
        util: require.resolve("util/"),
        stream: require.resolve("stream-browserify/"),
        crypto: require.resolve("crypto-browserify/"),
        https: require.resolve("https-browserify/"),
        http: require.resolve("stream-http/"),
      },
    },
    entry: {
      content: "./src/content/index.ts",
      background: "./src/background/index.ts",
    },
    output: {
      filename: "[name].js",
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser",
      }),
      new CopyWebpackPlugin({
        patterns: copyFiles,
      }),
      ...hotReload,
    ],
  },
  css: {
    extract: false,
  },
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
  },
};
