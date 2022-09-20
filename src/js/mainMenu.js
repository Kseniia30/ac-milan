const mainMenuItems = [
    { href: "#history", text: "History" },
    { href: "#colours", text: "Colours and badge" },
    { href: "#honours", text: "Honours" },
    { href: "#players", text: "Players" },
    { href: "#company", text: "AC Milan as a company" },
]

const mainMenu = document.querySelector(".main-box__list")

const mainMenuValues = mainMenuItems.map(value => {
    return `<li class="main-box__item">
                        <a href=${value.href} class="main-box__link">${value.text}</a>
                    </li>`
}).join("")

mainMenu.insertAdjacentHTML("beforeend", mainMenuValues)