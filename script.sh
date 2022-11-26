for i in {1..100}
do
	echo "
	export async function f$i() {console.log(\"hi $i\")}
	export const value = $i" > "src/$i.ts"
done
