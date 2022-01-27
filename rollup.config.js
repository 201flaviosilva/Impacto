import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

const umd = {
	input: "src/Impacto.js",
	output: {
		name: "impacto",
		file: "dist/Impacto.umd.js", // Universal Module Definition
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
			{ file: "dist/Impacto.esm.js", format: "es" }, // ES Module
			{ file: "dist/Impacto.cjs.js", format: "cjs" }, // CommonJS (Node)
			// { file: "dist/Impacto.amd.js", format: "amd" }, // Asynchronous Module Definition
			// { file: "dist/Impacto.system.js", format: "system" }, // 
			// { file: "dist/Impacto.iife.js", format: "iife" }, // IIFE (vanilla) probably useless
		],
		plugins: [
			babel({
				exclude: ["node_modules/**"],
			}),
		],
	},
];
