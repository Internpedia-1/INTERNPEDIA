
function convert() {
    let temperature = document.getElementById('temperature').value;
    let scale = document.getElementById('scale').value;
    let result;

    if (temperature === '') {
        document.getElementById('result').innerText = 'Please enter a value.';
        return;
    }

    temperature = parseFloat(temperature);

    if (scale === 'CtoF') {
        result = (temperature * 9/5) + 32;
        document.getElementById('result').innerText = `${temperature} °C is equal to ${result.toFixed(2)} °F`;
    } else {
        result = (temperature - 32) * 5/9;
        document.getElementById('result').innerText = `${temperature} °F is equal to ${result.toFixed(2)} °C`;
    }
}
