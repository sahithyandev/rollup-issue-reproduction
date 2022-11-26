import typescript from "@rollup/plugin-typescript";

export default function () {
	const files = [];
	for (let i = 1; i <= 100; i++) {
		files.push(`src-ts/${i}.ts`);
	}

	return files.map((file) => {
		/**
		 * @type {import("rollup").RollupOptions}
		 */
		return {
			input: file,
			output: {
				dir: "dist-ts",
				format: "cjs",
			},
			plugins: [typescript()],
		};
	});
}
