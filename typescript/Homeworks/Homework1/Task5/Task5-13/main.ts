interface Currencies {
    currency: SupportedCurrencies;
    value: number;
}
type SupportedCurrencies = 'USD' | 'EUR';

let exchange = (sumUAH:number, currencyValues:Currencies[], exchangeCurrency:SupportedCurrencies): number | string => {
    if (exchangeCurrency === 'USD') {
        for (const currency of currencyValues) {
            if (currency.currency === 'USD') {
                return sumUAH/currency.value;
            }
        }
        return 'Missing currency info';
    } else if (exchangeCurrency === 'EUR') {
        for (const currency of currencyValues) {
            if (currency.currency === 'EUR') {
                return sumUAH/currency.value;
            }
        }
        return 'Missing currency info';
    }
    return 'Missing currency info';
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))
