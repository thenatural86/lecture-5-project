document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').onsubmit = function(){

        // send get request to URL
        fetch('https://api.exchangeratesapi.io/latest?base=USD')
        // put response into json format
        .then(response => response.json())
        .then(data => {
            console.log(data.rates);
            const currency = document.querySelector('#currency').value.toUpperCase();
            // get the rate from data
            const rate = data.rates[currency]
            // display

            if (rate !== undefined){
                document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}.`
            } else {
                document.querySelector('#result').innerHTML = 'Invalid Currency.' 
            } 
        });
        return false
    }
});