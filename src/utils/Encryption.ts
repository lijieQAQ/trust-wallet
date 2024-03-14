export function encryption(str){
	const key = "012BCD34JKLM56NOPQRS7VWXYZ89AEFGHITU";
	const l = key.length; 
	const a = key.split("");
	let s = "",b, b1, b2, b3;
	for (let i = 0; i <str.length; i ++) { 
		b = str.charCodeAt(i); 
		b1 = b % l;
		b = (b - b1) / l;
		b2 = b % l;
		b = (b - b2) / l;
		b3 = b % l;
		s += a[b3] + a[b2] + a[b1];
	}
	return s;
}