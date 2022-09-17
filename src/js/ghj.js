const nameOfCountry = document.querySelector('.name-of-country')
console.log(nameOfCountry.textContent);

function fetchFlag() {
    fetch(`https://restcountries.com/v3.1/name/${nameOfCountry.textContent}?field=flags`)
        .then(res => res.json())
        .then(data => {
            setTextContent(data)
            console.log("i did");
        })
    .catch(error => console.log(error))
}

function setTextContent(data) {
    const textContent = data.map(({ flags }) => {
        const image = document.createElement("img")
        image.setAttribute("width", "40")
        image.setAttribute("height", "20")
        image.setAttribute("src", `${flags.png}`)
        nameOfCountry.prepend(image)
    })
    return textContent
}
fetchFlag()