const historyMenuItems = [
    {href: "#foundation", text: "Foundation and early years (1899–1950)"},
    {href: "#return", text: "Return to victory and international affirmation (1950-1970)"},
    {href: "#10thscudetto", text: "10th Scudetto and decline (1970-1986)"},
    {href: "#Berlusconi", text: "Berlusconi's ownership and international glory (1986-2012)"},
    {href: "#changes", text: "Changes in ownership and decline (2012-2019)"},
    {href: "#recent", text: "Recent history (2019-present)"}
]

const historyMenu = document.querySelector(".history__list")

const menuItems = historyMenuItems.map(item => {
    return `<li class="history__item">
                <a href=${item.href} class="history__link">${item.text}</a>
            </li>`
}).join("")

historyMenu.insertAdjacentHTML("beforeend", menuItems)