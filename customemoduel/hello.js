function welcome(name, birthDate) {
	today = new Date();
    bd = new Date(birthDate);

    diff_ms = today - bd;

    age = Math.floor(diff_ms / (1000*60*60*24*365))

    if (age < 13) {
        return `Only age older than 13 permitted`;
    }
    return `Welcome ${name}, Your Age is ${age}`;
}

module.exports = welcome;