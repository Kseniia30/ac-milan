const namesOfCountry = document.querySelectorAll('.name-of-country')

function fetchFlag() {
    namesOfCountry.forEach(name => {
        fetch(`https://restcountries.com/v3.1/name/${name.textContent}?field=flags`)
            .then(res => res.json())
            .then(data => {
                data.map(({ flags }) => {
                    name.innerHTML = `<img src="${flags.png}" alt="flag" width="40" height="20" style="margin-right:10px">${name.textContent}`
                })
            })
            .catch(error => console.log(error))
    })
}

fetchFlag()
