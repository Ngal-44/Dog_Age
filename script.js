function convertDogAge() {
    const dogAge = document.getElementById('dogAge').value;
    let humanAge;

    if (dogAge <= 2) {
        humanAge = dogAge * 10.5;
    } else {
        humanAge = (2 * 10.5) + ((dogAge - 2) * 4);
    }

    document.getElementById('result').textContent = `Your dog's age in human years is approximately: ${humanAge} years.`;
}