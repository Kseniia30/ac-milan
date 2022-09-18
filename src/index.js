import "./css/style.css"
import './css/history.css'
import './css/colours.css'
import './css/modal.css'
import './css/modalConfig.css'
import './css/honours.css'
import './css/players.css'
import './css/company.css'
import { refs } from "./js/refs"
import { toggleHistory, toggleColours, toggleHonours, togglePlayers, toggleCompany } from './js/openModal'
import { fetchFlag } from './js/fetchF'
import {historyMenu} from "./js/history"


refs.historyLink.addEventListener("click", toggleHistory)
refs.coloursLink.addEventListener("click", toggleColours)
refs.historyCloseBtn.addEventListener("click", toggleHistory)
refs.coloursCloseBtn.addEventListener("click", toggleColours)
refs.honoursLink.addEventListener("click", toggleHonours)
refs.honoursCloseBtn.addEventListener("click", toggleHonours)
refs.playersLink.addEventListener("click", togglePlayers)
refs.playersCloseBtn.addEventListener("click", togglePlayers)
refs.companyLink.addEventListener("click", toggleCompany)
refs.companyCloseBtn.addEventListener("click", toggleCompany)


