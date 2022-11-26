mkdir -p src-ts
mkdir -p src-js

for i in {1..100}
do
	echo "
	export async function f$i() {console.log(\"hi $i\")}
	export const value = $i" > "src-ts/$i.ts"
	
	echo "
	export async function g$i() {
		console.log(\"hi $i\");
	}
	export const value = \"gg$i\"" > "src-js/$i.js"
done
