

const onClickCountry = (country) => () => {
    alert(JSON.stringify(country))
}

const fetchCountryToView = (countries) => {
    const listCountryNode = document.getElementById('list-city')
    countries.map((country) => {
        const countryNode = document.createElement('button')
        countryNode.className = "city"
        countryNode.innerHTML = country.name;
        countryNode.onclick = onClickCountry(country);
        listCountryNode.appendChild(countryNode)
    })
}

const fetchCountry = () => {
    fetch('https://restcountries.com/v3.1/name/v').then(res => {
        res.json().then(country => {
            const countries = country.map(item => {
                return {
                    name: item.altSpellings?.[3] || item.altSpellings?.[1] || item.altSpellings[0],
                    country_code: item.cca2
                }
            })
            fetchCountryToView(countries)
        })
    })
}

fetchCountry()