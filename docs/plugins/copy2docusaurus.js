const fs = require("fs");
const path = require("path");

/**
 * Copy files from the given source directory to the destination directory.
 * 
 * @param {Object} context - Object given by the Docusaurus
 * @param {Object} opts - The options object.
 * @param {string[]} opts.files - The files to copy.
 * @param {string} opts.output - The destination directory.
 */
function copyFiles(context, opts) {
	const { files = [], output = "docs/" } = opts;

	files.forEach(file => {
		const formattedOutput = "../" + output + file.replaceAll("../", "");
		fs.copyFile(
			path.join(__dirname, file),
			path.join(__dirname, formattedOutput),
			(err) => { if (err) throw err; });
	});
}

function copy2docusaurus(context, opts) {
	return {
		name: "copy2docusaurus",
		async loadContent() { return copyFiles(context, opts); },
	};
};

module.exports = copy2docusaurus;
