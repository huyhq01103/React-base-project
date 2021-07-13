/* eslint-env node */
const fs = require("fs");
const path = require("path");

const pathToJSConfig = path.resolve(__dirname, "../jsconfig.json");
// eslint-disable-next-line no-sync
const config = JSON.parse(fs.readFileSync(pathToJSConfig, "utf-8"));

function toWebpackPath(acc, [key, [value]]) {
	const alias = key.replace("/*", "");
	const fullPath = path.resolve(__dirname, `../${value.replace("/*", "")}`);

	acc[alias] = fullPath;
	return acc;
}

const webpackPaths = Object.entries(config.compilerOptions.paths).reduce(
	toWebpackPath,
	{}
);

module.exports = webpackPaths;
