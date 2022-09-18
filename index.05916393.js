const e={historyBox:document.querySelector("#history"),historyLink:document.querySelector('[href="#history"]'),historyCloseBtn:document.querySelector(".history__close-btn"),coloursBox:document.querySelector("#colours"),coloursLink:document.querySelector("[href='#colours']"),coloursCloseBtn:document.querySelector(".colours__close-btn"),honoursBox:document.querySelector("#honours"),honoursLink:document.querySelector("[href='#honours']"),honoursCloseBtn:document.querySelector(".honours__close-btn"),playersBox:document.querySelector("#players"),playersLink:document.querySelector("[href='#players']"),playersCloseBtn:document.querySelector(".players__close-btn"),companyBox:document.querySelector("#company"),companyLink:document.querySelector("[href='#company']"),companyCloseBtn:document.querySelector(".company__close-btn")};function t(t){t.preventDefault(),e.historyBox.classList.toggle("is-hidden")}function o(t){t.preventDefault(),e.coloursBox.classList.toggle("is-hidden")}function n(t){t.preventDefault(),e.honoursBox.classList.toggle("is-hidden")}function r(t){t.preventDefault(),e.playersBox.classList.toggle("is-hidden")}function s(t){t.preventDefault(),e.companyBox.classList.toggle("is-hidden")}document.querySelectorAll(".name-of-country").forEach((e=>{fetch(`https://restcountries.com/v3.1/name/${e.textContent}?field=flags`).then((e=>e.json())).then((t=>{t.map((({flags:t})=>{e.innerHTML=`<img src="${t.png}" alt="flag" width="40" height="20" style="margin-right:10px">${e.textContent}`}))})).catch((e=>console.log(e)))}));const c=document.querySelector(".history__list"),l=[{href:"#foundation",text:"Foundation and early years (1899–1950)"},{href:"#return",text:"Return to victory and international affirmation (1950-1970)"},{href:"#10thscudetto",text:"10th Scudetto and decline (1970-1986)"},{href:"#Berlusconi",text:"Berlusconi's ownership and international glory (1986-2012)"},{href:"#changes",text:"Changes in ownership and decline (2012-2019)"},{href:"#recent",text:"Recent history (2019-present)"}].map((e=>`<li class="history__item">\n                <a href=${e.href} class="history__link">${e.text}</a>\n            </li>`)).join("");c.insertAdjacentHTML("beforeend",l),e.historyLink.addEventListener("click",t),e.coloursLink.addEventListener("click",o),e.historyCloseBtn.addEventListener("click",t),e.coloursCloseBtn.addEventListener("click",o),e.honoursLink.addEventListener("click",n),e.honoursCloseBtn.addEventListener("click",n),e.playersLink.addEventListener("click",r),e.playersCloseBtn.addEventListener("click",r),e.companyLink.addEventListener("click",s),e.companyCloseBtn.addEventListener("click",s);
//# sourceMappingURL=index.05916393.js.map
