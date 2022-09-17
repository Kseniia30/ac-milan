import { refs } from "./refs"

function toggleHistory(evt) {
    evt.preventDefault()
    refs.historyBox.classList.toggle("is-hidden")
}

function toggleColours(evt) {
    evt.preventDefault()
    refs.coloursBox.classList.toggle("is-hidden")
}

function toggleHonours(evt) {
    evt.preventDefault()
    refs.honoursBox.classList.toggle("is-hidden")
}

function togglePlayers(evt) {
    evt.preventDefault()
    refs.playersBox.classList.toggle("is-hidden")
}

function toggleCompany(evt) {
    evt.preventDefault()
    refs.companyBox.classList.toggle("is-hidden")
}

export {toggleHistory, toggleColours, toggleHonours, togglePlayers, toggleCompany }