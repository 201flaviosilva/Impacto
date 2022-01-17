import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

export default [
	{
		input: "src/Impacto.js",
		output: {
			name: "impacto",
			file: pkg.browser,
			format: "umd",
		},
		plugins: [
			resolve(),
			commonjs(),
			babel({
				exclude: ["node_modules/**"],
			}),
		],
	},
	{
		input: "src/Impacto.js",
		output: [
			{ file: pkg.main, format: "cjs" },
			{ file: pkg.module, format: "es" },
			{ file: pkg.amd, format: "amd" },
		],
		plugins: [
			babel({
				exclude: ["node_modules/**"],
			}),
		],
	},
];
