import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { rollup } from "rollup";
import { loadConfigFile } from "rollup/loadConfigFile";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function run(configFile) {
	const configJs = await loadConfigFile(resolve(__dirname, configFile), {
		format: "es",
	});

	const { options, warnings } = configJs;

	if (warnings.count != 0) {
		console.log(`We currently have ${warnings.count} warnings`);
	}
	warnings.flush();

	for (const optionsObj of options) {
		console.log("start", optionsObj.input);
		const bundle = await rollup(optionsObj);

		await Promise.all(optionsObj.output.map(bundle.write));
		await bundle.close();
		console.log("end", optionsObj.input);
	}
}

(async () => {
	const configs = ["rollup.config-js.js", "rollup.config-ts.js"];

	for (let config of configs) {
		await run(config);
	}
})();
