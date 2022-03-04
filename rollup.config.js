import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

// const folder = "_ignore/Build/";
const folder = "dist/";
const umd = {
	input: "src/Impacto.js",
	output: {
		name: "Impacto",
		file: folder + "Impacto.umd.js", // Universal Module Definition
		format: "umd",
	},
	plugins: [
		resolve(),
		commonjs(),
		babel({
			exclude: ["node_modules/**"],
		}),
	],
};

export default [
	// umd,
	{
		input: "src/Impacto.js",
		output: [ // https://betterprogramming.pub/what-are-cjs-amd-umd-esm-system-and-iife-3633a112db62
			// { file: folder + "Impacto.esm.js", format: "esm" }, // ES Module
			{ file: folder + "Impacto.js", format: "cjs" }, // CommonJS
			// { file: folder + "Impacto.amd.js", format: "amd" }, // Asynchronous Module Definition
			// { file: folder + "Impacto.system.js", format: "system" }, // 
			// { file: folder + "Impacto.iife.js", format: "iife" }, // IIFE (vanilla) probably useless
		],
		plugins: [
			babel({
				exclude: ["node_modules/**"],
			}),
		],
	},
];
