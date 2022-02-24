import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

const forder = "_ignore/Build/";
// const forder = "dist/";
const umd = {
	input: forder + "Impacto.js",
	output: {
		name: "Impacto",
		file: forder + "Impacto.umd.js", // Universal Module Definition
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
			{ file: forder + "Impacto.esm.js", format: "esm" }, // ES Module
			{ file: forder + "Impacto.cjs.js", format: "cjs" }, // CommonJS
			// { file: forder + "Impacto.amd.js", format: "amd" }, // Asynchronous Module Definition
			// { file: forder + "Impacto.system.js", format: "system" }, // 
			// { file: forder + "Impacto.iife.js", format: "iife" }, // IIFE (vanilla) probably useless
		],
		plugins: [
			babel({
				exclude: ["node_modules/**"],
			}),
		],
	},
];
