export default function () {
	const files = [];
	for (let i = 1; i <= 100; i++) {
		files.push(`src-js/${i}.js`);
	}

	return files.map((file) => {
		/**
		 * @type {import("rollup").RollupOptions}
		 */
		return {
			input: file,
			output: {
				dir: "dist-js",
				format: "cjs",
			},
		};
	});
}
