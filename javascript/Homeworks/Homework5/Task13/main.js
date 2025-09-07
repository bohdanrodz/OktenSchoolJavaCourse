let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    if (exchangeCurrency === 'USD') {
        for (const currency of currencyValues) {
            if (currency.currency === 'USD') {
                return sumUAH/currency.value;
            }
        }
    } else if (exchangeCurrency === 'EUR') {
        for (const currency of currencyValues) {
            if (currency.currency === 'EUR') {
                return sumUAH/currency.value;
            }
        }
    } else {
        console.log('Wrong currency');
    }
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))
