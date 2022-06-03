// Plugin based in: https://gist.github.com/slorber/0bf8c8c8001505f0f99a062ac55bf442

const fs = require("fs");
const path = require("path");
const glob = require("glob");
const jsdoc2md = require("jsdoc-to-markdown");

/**
 * Runs through packages folders looking for JSDoc and generates markdown docs
 */
function generateDocs(context, opts) {
	console.log("Generating package docs");
	// Use glob to get all js/ts files
	const pathPattern = path.join(__dirname, "../../src/**/*.js");
	const filePaths = glob.sync(pathPattern, {
		ignore: [
			"**/node_modules/**",
			"**/cypress/**",
			"**/__tests__/**",
			"**/*.test.js",
			"**/*_spec.js",
		],
	});

	for (const file of filePaths) {
		const { base: fileName } = path.parse(file);

		const relativePath = path.relative(process.cwd(), file);
		const markdown = jsdoc2md.renderSync({
			files: relativePath,
			configure: path.join(__dirname, "../../jsdoc.conf.json"),
			"heading-depth": 1,
		});

		console.log(relativePath);

		const writeDir = path.join(
			__dirname,
			`../docs/API/${relativePath.replace(fileName, "").replace("../src/", "")}`,
		);

		if (markdown) {
			// check if the directory exists and create the directory
			if (!fs.existsSync(writeDir)) fs.mkdirSync(writeDir, { recursive: true });

			// write the markdown file
			fs.writeFileSync(`${writeDir}/${fileName}.md`, markdown);
		}
	}

	// Let the user know what step we're on
	console.log("\u001B[32m", "✔️ Package docs generated", "\u001B[0m");
}

function jsdoc2docusaurus(context, opts) {
	return {
		name: "jsdoc2docusaurus",
		async loadContent() { return generateDocs(context, opts); },
	};
};
// generateDocs();

module.exports = jsdoc2docusaurus;
