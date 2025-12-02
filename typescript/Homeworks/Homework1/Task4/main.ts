interface Currencies {
    currency: string;
    value: number;
}

type SupportedCurrency = 'USD' | 'EUR';

function exchange(sumUAH: number, currencyValues: Currencies[], exchangeCurrency:SupportedCurrency): number | string{
    if(exchangeCurrency === 'USD'){
        for (const currency of currencyValues) {
            if(currency.currency === 'USD'){
                return sumUAH / currency.value;
            }
        }
        return "User didn't provide full currency values"
    } else if (exchangeCurrency === 'EUR'){
        for (const currency of currencyValues) {
            if(currency.currency === 'EUR'){
                return sumUAH / currency.value;
            }
        }
        return "User didn't provide full currency values"
    } else {
        return 'Wrong exchange currency'
    }
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));
