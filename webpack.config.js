const path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/Impacto.js",
	optimization: {
		minimize: false,
	},
	experiments: {
		outputModule: true,
	},
	output: {
		path: path.resolve("dist"),
		filename: "Impacto.js",
		libraryTarget: "module", // module/commonjs2 // https://webpack.js.org/configuration/output/#outputlibrarytarget
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				use: "babel-loader",
			},
		],
	},
	resolve: {
		extensions: [".js"],
	},
};
