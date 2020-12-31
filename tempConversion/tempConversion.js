const ftoc = function(fah) {
	let cel;
	cel = (fah - 32) * (5/9);
	return Math.round(cel * 10) / 10;
}

const ctof = function(cel) {
	let fah;
	fah  = cel * (9/5) + 32;
	return Math.round(fah * 10) / 10;

}

module.exports = {
  ftoc,
  ctof
}
