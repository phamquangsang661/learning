

const onClickCountry = (country) => async () => {
    const country_code = country.country_code
    const url = `https://api-country-production.up.railway.app/country/cities?country_code=` + country_code
    const cities = await (await fetch(url)).json()
    console.log(cities)
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
    fetch('https://restcountries.com/v3.1/all').then(res => {
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

const fetchCountryV2 = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const country = await res.json()

    const countries = country.map(item => {
        return {
            name: item.altSpellings?.[3] || item.altSpellings?.[1] || item.altSpellings[0],
            country_code: item.cca2
        }
    })
    console.log("B")
    fetchCountryToView(countries)
}

const abc = () => {
    return new Promise((resolve) => { resolve(true) }).then((_value) => 1);
}
console.log("HERE")
abc().then(value => console.log(value))

const cdf = async () => {
    const a = await new Promise((resolve) => { resolve(true) }).then((_value) => {
        console.log("Complete promise a")
        return 1
    });
    console.log("SEPARATED")
    const b = await new Promise((resolve) => { resolve(true) }).then((_value) => {
        console.log("Complete promise b: ", a)
        return a + 1
    });
    console.log("SEPARATED")
    const c = new Promise((resolve) => { resolve(true) }).then((_value) => {
        console.log("Complete promise b: ", b)
    });
}


cdf()
fetchCountryV2()
console.log("A")
let count = 10;
const timeCount = setInterval(() => {
    count -= 1;
    console.log(count)
    if (count == 0) {
        clearInterval(timeCount)
    }
}, 1000)
const now = new Date(Date.now())


setInterval(() => {
    const now = new Date(Date.now())
    const timeConvert = `${now.getFullYear()}/${now.getMonth()}/${now.getDate()} ${now.getHours()}:${now.getMinutes()} ${now.getSeconds()}`
    document.getElementById('now').innerHTML = timeConvert
}, 1000)