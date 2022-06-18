const country = async (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`

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

const renderError = () => {

}

country(`turkey`);
country('germany');