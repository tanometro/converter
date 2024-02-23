const url = 'https://community-neutrino-currency-conversion.p.rapidapi.com/convert';

const convertMeasures = async () => {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '0e21fdf111mshfc7b56e4ddf9af8p104953jsn71950e132a0c',
            'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
        },
        body: new URLSearchParams({
            'from-value': '10',
            'from-type': 'NZD',
            'to-type': 'GBP'
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

export default convertMeasures;