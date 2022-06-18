const country = async (name) => {
    const url = `https://restcountries.com/v3.1/nme/${name}`

    try {
        const res = await fetch(url);

        if (!res.ok) {
            renderError(`Something  went wrong:${res.status}`);
            throw new Error();
        }

        const data = await res.json(res);

        console.log(data[0]);

    } catch (error) {

    }
}

const renderError = (err) => {
    const countriesDiv = document.querySelector('.countries');

    countriesDiv.innerHTML = `<h1 class= "text-danger">${err}</h1>
    <img src="http://egyptianstreets.com/wp-content/uploads/2017/07/404.jpg">`;
}

country(`turkey`);
country('germany');