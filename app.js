const country = async (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`

    try {
        const res = await fetch(url);

        if (!res.ok) {
            renderError(`Something  went wrong:${res.status}`);
            throw new Error();
        }

        const data = await res.json(res);
        // console.log(data[0]);
        renderCountry(data[0]);

    } catch (error) {
        console.log(error);
    }
}

const renderError = (err) => {
    const countriesDiv = document.querySelector('.countries');

    countriesDiv.innerHTML = `<h1 class= "text-danger">${err}</h1>
    <img src="http://egyptianstreets.com/wp-content/uploads/2017/07/404.jpg">`;
}

const renderCountry = (country) => {
    console.log(country);

    const countriesDiv = document.querySelector('.countries');
    const {
        capital,
        name: {
            common
        },
        region,
        flags: {
            svg
        },
        languages,
        currencies
    } = country;
    console.log(capital, common, region, svg, Object.values(languages),
        Object.values(currencies)[0].name, Object.values(currencies)[0].symbol);


}

country(`turkey`);
country('germany');
country('usa');