const fs = require("fs");
const path = require("path");

function copyFiles(context, opts) {
	console.log("Start copy");

	const files = [
		"../../Awesome.md",
		"../../CHANGELOG.md",
	];

	files.forEach(file => {
		const output = "../docs/" + file.replaceAll("../", "");
		fs.copyFile(path.join(__dirname, file), path.join(__dirname, output), (err) => {
			if (err) throw err;
			console.log(`${file} was copied to ${output}`);
		});
	});
	// Let the user know what step we're on
	console.log("\u001B[32m", "✔️ All files copied", "\u001B[0m");
}

function copy2docusaurus(context, opts) {
	return {
		name: "copy2docusaurus",
		async loadContent() { return copyFiles(context, opts); },
	};
};
copyFiles();

module.exports = copy2docusaurus;
