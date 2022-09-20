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

const historyInfoPoints = [
    {
        id: "foundation",
        topText: "Foundation and early years (1899–1950)",
        text: "AC Milan was founded as Milan Foot-Ball and Cricket Club in 1899 by English expatriate Herbert Kilpin. The club claims 16 December of that year as their foundation date, but historical evidence seems to suggest that the club was actually founded a few days earlier, most likely on 13 December. However, with the club's charter being lost, the exact date remains open to debate. In honour of its English origins, the club has retained the English spelling of the city's name, as opposed to the Italian spelling Milano, which it was forced to bear under the fascist regime. Milan won its first Italian championship in 1901, interrupting a three-year hegemony of Genoa, and a further two in succession in 1906 and 1907. The club proved successful in the first decade of its existence, with several important trophies won, including, among others, the Medaglia del Re three times, the Palla Dapples 23 times and the FGNI tournament five times, a competition organized by the Italian Gymnastics Federation but not officially recognized by the Italian Football Federation. In 1908, Milan experienced a split caused by internal disagreements over the signing of foreign players, which led to the forming of another Milan-based team, F.C. Internazionale Milano. Following these events, Milan did not manage to win a single domestic title until 1950–51,with some exceptions represented by the 1915-16 Coppa Federale and the 1917-18 Coppa Mauro, two tournaments played during the First World War which, especially the former, received a lot of attention and proved to be highly competitive, despite them not being officially recognized by the Italian federation.",
        firstSrc: "https://cdn2.picryl.com/photo/2013/06/05/italian-football-champion-1901-66e6e8-small.jpg",
        firstAlt: "Italian_Football_Champion_1901",
        secondSrc: "https://raw.githubusercontent.com/Kseniia30/ac-milan/main/src/img/history/kilpin.jpg",
        secondAlt: "Herbert Kilpin",
        thirdSrc: "../img/history/Ac_milan_team_1907.jpg",
        thirdAlt: "milan_team_1907",
    },
    // {
    //     id: "return",
    //     topText: "Return to victory and international affirmation (1950-1970)",
    //     text: "In the 1950s saw the club return to the top of Italian football, headed by the famous Gre-No-Li Swedish trio Gunnar Gren, Gunnar Nordahl and Nils Liedholm. This was one of the club's most successful periods domestically, with the Scudetto going to Milan in 1951, 1955, 1957 and 1959. This decade witnessed also the first European successes of Milan, with the triumphs in the 1951 and 1956 Latin Cup. Milan was also the first Italian club to take part to the newly born European Cup in the 1955-56 season, and reached the final two years later, when they were defeated by Real Madrid. The 1960s began with the debut of Milan's legend Gianni Rivera in 1960: he will remain with the club for the rest of his career for the following 19 seasons. In 1961, Nereo Rocco was appointed as new coach of the club, which under his leadership won immediately a scudetto in 1961-62, followed, in the next season, by Milan's first European Cup triumph, achieved after beating Benfica in the final. This success was repeated in 1969, with a 4–1 win over Ajax in the final, which was followed by the Intercontinental Cup title the same year. During this period Milan also won its first Coppa Italia, with victory over Padova in the 1967 final, and two European Cup Winners' Cups: in 1967–68 and 1972–73.",
    //     firstSrc: "./img/history/team_1949-50.jpg",
    //     firstAlt: "team_1949-50",
    //     secondSrc: "./img/history/Storia-Cesare-Maldini.jpg",
    //     secondAlt: "Cesare-Maldini",
    //     thirdSrc: "./img/history/Finale_Europa_Cup_II_.jpg",
    //     thirdAlt: "Finale_Europa_Cup_II",
    // },
    // {
    //     id: "10thscudetto",
    //     topText: "10th Scudetto and decline (1970-1986)",
    //     text: "Domestically, the 1970s were characterized by the pursue of the 10th Serie A title, which grants the winner the Scudetto star. For three years in a row, in 1971, 1972 and 1973, Milan ended up second in the league, after some memorable duels with Inter and Juventus. Finally, the achievement was reached in 1979. The same year saw the retirement of Gianni Rivera and the debut of Franco Baresi, at his first full season with the club. After this success, the team went into a period of decline. The club in 1980 was involved in the Totonero scandal and as punishment was relegated to Serie B for the first time in its history. The scandal was centred around a betting syndicate paying players and officials to fix the outcome of matches. Milan achieved promotion back to Serie A at the first attempt, winning the 1980–81 Serie B title, but were again relegated a year later as the team ended its 1981–82 campaign in third-last place. In 1983, Milan won the Serie B title for the second time in three seasons to return to Serie A, where they achieved a sixth-place finish in 1983–84.",
    //     firstSrc: "./img/history/Alberto_Bigon.jpg",
    //     firstAlt: "Alberto_Bigon",
    //     secondSrc: "./img/history/Aldo_Maldera.jpg",
    //     secondAlt: "Aldo_Maldera",
    //     thirdSrc: "./img/history/finalClassification1978–79SerieA.jpg",
    //     thirdAlt: "final Classification 1978–79 SerieA",
    // },
    // {
    //     id: "Berlusconi",
    //     topText: "Berlusconi's ownership and international glory (1986-2012)",
    //     text: "On 20 February 1986, entrepreneur Silvio Berlusconi (who owns Fininvest and Mediaset) acquired the club and saved it from bankruptcy after investing vast amounts of money, appointing rising manager Arrigo Sacchi at the helm of the Rossoneri and signing Dutch internationals Ruud Gullit, Marco van Basten and Frank Rijkaard. The Dutch trio added an attacking impetus to the team, and complemented the club's Italian internationals  Paolo Maldini, Franco Baresi, Alessandro Costacurta and Roberto Donadoni. Under Sacchi, Milan won its first Scudetto in nine years in the 1987–88 season. The following year, the club won its first European Cup in two decades, beating Romanian club Steaua București 4–0 in the final. Milan retained their title with a 1–0 win over Benfica a year later and was the last team to win back-to-back European Cups until Real Madrid's win in 2017. The Milan team of 1988–1990, nicknamed the Immortals in the Italian media, has been voted the best club side of all time in a global poll of experts conducted by World Soccer magazine. After Sacchi left Milan in 1991, he was replaced by the club's former player Fabio Capello whose team won three consecutive Serie A titles between 1992 and 1994, a spell which included a 58-match unbeaten run in Serie A (which learned the team the label the Invincibles), and back-to-back UEFA Champions League final appearances in 1993, 1994 and 1995. A year after losing 1–0 to Marseille in the 1993 Champions League final, Capello's team reached its peak in one of Milan's most memorable matches of all time, the famous 4–0 win over Barcelona in the 1994 Champions League final. Capello's side went on to win the 1995–96 league title before he left to manage Real Madrid in 1996. In 1998–99, after a two-year period of decline, Milan lifted its 16th championship in the club's centenary season. Milan's next period of success came under another former player, Carlo Ancelotti. After his appointment in November 2001, Ancelotti took Milan to the 2003 Champions League final, where they defeated Juventus on penalties to win the club's sixth European Cup. The team then won the Scudetto in 2003–04 before reaching the 2005 Champions League final, where they were beaten by Liverpool on penalties despite leading 3–0 at half-time. Two years later, the two teams met again in the 2007 Champions League final, with Milan winning 2–1 to lift the title for a seventh time. The team then won its first FIFA Club World Cup in December 2007. In 2009, after becoming Milan's second longest serving manager with 420 matches overseen,Ancelotti left the club to take over as manager at Chelsea.During this period, the club was involved in the Calciopoli scandal, where five teams were accused of fixing matches by selecting favourable referees. A police inquiry excluded any involvement of Milan managers, but the Italian Football Federation (FIGC) unilaterally decided that it had sufficient evidence to charge Milan vice-president Adriano Galliani. As a result, Milan was initially punished with a 15-point deduction and was banned from the 2006–07 UEFA Champions League. An appeal saw that penalty reduced to eight points, which allowed the club to retain its Champions League participation. Following the aftermath of Calciopoli, local rivals Internazionale dominated Serie A, winning four Scudetti.  However, with the help a strong squad boasting players such as Zlatan Ibrahimović, Robinho and Alexandre Pato joining many of the veterans of the club's mid-decade European successes, Milan recaptured the Scudetto in the 2010–11 Serie A season, their first since the 2003–04 season, and 18th overall.",
    //     firstSrc: "./img/history/team_1997-98.jpg",
    //     firstAlt: "team_1997-98",
    //     secondSrc: "./img/history/paolo_maldini.jpg",
    //     secondAlt: "Paolo_Maldini",
    //     thirdSrc: "./img/history/Berlusconi-Trophy.jpg",
    //     thirdAlt: "Berlusconi&ACMilan",
    // },
    //     {
    //     id: "changes",
    //     topText: "Changes in ownership and decline (2012-2019)",
    //     text: "However, after the Scudetto the club declined in performance. Milan failed to qualify to European competitions for a few years, and the only trophy won was the 2016 Supercoppa Italiana,achieved under Vincenzo Montella's coaching after defeating Juventus in the penalty shoot-out. On 5 August 2016, a new preliminary agreement was signed with the Chinese investmentmanagement company Sino-Europe Sports Investment Management Changxing Co., to which Fininvest sold a 99.93%stake of Milan for about €520 million, plus the refurbishment of the club financial debt of €220 million. On 13April 2017, the deal was completed and Rossoneri Sport Investment Lux became the new direct parent company ofthe club. In order to finalise the deal, American hedge fund Elliott Management Corporation provided Liwith a loan of €303 million (€180 million to complete the payment to Fininvest and €123 million issueddirectly to the club). On 10 July 2018, Li failed to keep up with his loan repayment plan, neglecting todeposit a €32 million instalment on time in order to refinance the €303 million loan debt owed to theAmerican hedge fund. As a result, In July 2018, chairman Li Yonghong's investment vehicle Rossoneri Champion Inv.Lux. was removed as the shareholder of Rossoneri Sport Inv. Lux., the direct parent company of theclub, making the investment vehicle majority controlled by Elliott Management Corporation the sole shareholderof Rossoneri Sport Inv. Lux. On 27 November 2017, Montella was sacked due to poor results and replaced by former playerGennaro Gattuso. Milan qualified for the 2018–19 UEFA Europa League group stage after finishing 6th in the2017–18 Serie A season, but were banned by UEFA from European competition due to violations of Financial FairPlay regulations for failure to break-even. Milan appealed to the Court of Arbitration for Sportand was overturned on 20 July 2018. In Gattuso's first full season in charge, Milan exceeded expectations and spent much of thecampaign in the top 4. Despite winning their final 4 games, Milan missed out on the Champions League by one point.After Milan's failure to qualify for the Champions League, Gattuso resigned as manager. On 19 June 2019,Milan hired former Sampdoria manager Marco Giampaolo on a 2-year contract. On 28 June 2019, Milan was excluded from the 2019–20UEFA Europa League for violating Financial Fair Play regulations for the years 2014–2017 and 2015–2018.",
    //     firstSrc: "./img/history/milan-allegri.jpg",
    //     firstAlt: "milan-allegri",
    //     secondSrc: "./img/history/Montella.jpg",
    //     secondAlt: "milan-montella",
    //     thirdSrc: "./img/history/forma-milana-na-sezon-2018-2019.jpg",
    //     thirdAlt: "uniform_2018-19",
    // },
    // {
    //     id: "recent",
    //     topText: "Recent history (2019-present)",
    //     text: "After just 4 months in charge, Giampaolo was sacked after losing 4 of his first 7 games which was exacerbated by poor performances and a lack of supporter confidence. Stefano Pioli was hired as his  replacement. After the restart of the Serie A campaign due to the COVID-19 outbreak, Milan went on a 10  match unbeaten streak, winning 7 in the process including matches against Juventus, Lazio and Roma. This  streak led to Milan abandoning their plans of hiring Ralf Rangnick as their new manager and sporting  director, and instead extended Pioli's contract for a further 2 years.  Following a stellar start in the 2020–21 Serie A, which was a continuation of the second half of the  previous season, Milan under Pioli in his first full season were led to a second-place finish in the league which was the highest finish for the team since the 2011–12 Serie A. This result allowed Milan to qualify for the 2021–22 UEFA Champions League for the following season, which would become their first appearance in the UEFA Champions League in seven years since their last appearance in the 2013–14 UEFA Champions League. Milan secured their 19th Italian championship title on the last round of the 2021–22 season, with a club-record tally of 86 points. It was their first league title since the 2010–11 season. In the Serie A Awards, Rafael Leão was named as the league's Most valuable player, Mike Maignan as the best goalkeeper and Pioli as coach of the season. On 1 June 2022, RedBird Capital Partners agreed to acquire A.C. Milan at $1.3 billion, meanwhile Elliott Management Corporation would keep a minority stake.",
    //     firstSrc: "./img/history/Storia-Pioli.jpg",
    //     firstAlt: "Pioli",
    //     secondSrc: "./img/history/2021-2219thScudetto.jpg",
    //     secondAlt: "theChampions",
    //     thirdSrc: "./img/history/19thscudetto.jpg",
    //     thirdAlt: "19thscudetto",
    // }
]

const historyInfoBox = document.querySelector(".history__main-box")

const historyMainItems = historyInfoPoints.map(point => {
    return `<li>
                <h2 class="history__top-text" id=${point.id}>${point.topText}</h2>
                <p class="history__text">${point.text}</p>
                <ul class="history__gallery">
                    <li class="history__gallery-item">
                        <img src=${point.firstSrc} alt=${point.firstAlt}
                            class="history__gallery-img">
                    </li>
                    <li class="history__gallery-item">
                        <img src=${point.secondSrc} alt=${point.secondAlt} class="history__gallery-img">
                    </li>
                    <li class="history__gallery-item">
                        <img src=${point.thirdSrc} alt=${point.thirdAlt} class="history__gallery-img">
                    </li>
                </ul>`
}).join("")

historyInfoBox.insertAdjacentHTML("beforeend", historyMainItems)