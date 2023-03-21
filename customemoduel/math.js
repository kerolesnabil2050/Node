function add(x, y) {
	if (!Number.isInteger(x) || !Number.isInteger(y)) {
		return "accept numbers only";
	}
	return x + y;
}

function sub(x, y) {
	if (!Number.isInteger(x) || !Number.isInteger(y)) {
		return "accept numbers only";
	}
	return x - y;
}

function multi(x, y) {
	if (!Number.isInteger(x) || !Number.isInteger(y)) {
		return "accept numbers only";
	}
	return x * y;
}

function divide(x, y) {
	if (!Number.isInteger(x) || !Number.isInteger(y)) {
		return "accept numbers only";
	}
	return x / y;
}

module.exports = {
	add: add,
	sub: sub,
	multibly: multi,
	divide: divide,
};