// Plugin based in: https://gist.github.com/slorber/0bf8c8c8001505f0f99a062ac55bf442

const fs = require("fs");
const path = require("path");
const glob = require("glob");
const jsdoc2md = require("jsdoc-to-markdown");

const ignoreFiles = [
	"**/node_modules/**",
	"**/cypress/**",
	"**/__tests__/**",
	"**/*.test.js",
	"**/*_spec.js",
];

/**
 * Runs through packages folders looking for JSDoc and generates markdown docs
 * 
 * @param {Object} context - Object given by the Docusaurus
 * @param {Object} opts - The options object.
 * @param {string[]} opts.input - The input directories.
 * @param {string} opts.output - The destination directory.
 */
function generateDocs(context, opts) {
	const { input = "../../src/", output = "docs/API/" } = opts;

	// Use glob to get all js/ts files
	const pathPattern = path.join(__dirname, input + "**/*.js");
	const filePaths = glob.sync(pathPattern, { ignore: ignoreFiles, });

	filePaths.forEach(filePath => {
		const relativePath = path.relative(process.cwd(), filePath);
		const { base: fileName } = path.parse(filePath);
		const formatInput = input.replace("../", "");

		const markdown = jsdoc2md.renderSync({
			files: relativePath,
			configure: path.join(__dirname, "../../jsdoc.conf.json"),
			"heading-depth": 1,
		});

		const writeDir = path.join(
			__dirname,
			`../${output}${relativePath.replace(fileName, "").replace(formatInput, "")}`,
		);

		if (markdown) {
			if (!fs.existsSync(writeDir)) fs.mkdirSync(writeDir, { recursive: true }); // check if the directory exists and create the directory
			fs.writeFileSync(`${writeDir}/${fileName}.md`, markdown);	// write the markdown file
		}
	});
}

function jsdoc2docusaurus(context, opts) {
	return {
		name: "jsdoc2docusaurus",
		async loadContent() { return generateDocs(context, opts); },
	};
};

module.exports = jsdoc2docusaurus;
