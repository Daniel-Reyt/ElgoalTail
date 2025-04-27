var locales = {
    ["en"]: {
        LANDINGPAGE: {
            TITLE: "Welcome on ElgoalTail"
        },
        PRIVACY: {
            HTML: `
            <h1>Privacy Policy</h1> <p><strong>Last Updated: April 27, 2025</strong></p> <p>Welcome!</p> <p>We respect your privacy and are committed to protecting it. This Privacy Policy describes what data we collect, how we use it, and your rights regarding it.</p> <h2>1. Data We Collect</h2> <p>When you use our game, we only collect the following information:</p> <ul> <li>Your Epic Games player name</li> <li>Your Epic Games friends list</li> </ul> <p>That's it. We do not collect your email address, location, personal identifiers, or any other sensitive information.</p> <h2>2. How We Use Your Data</h2> <p>We use this data solely to:</p> <ul> <li>Display your player name in the game</li> <li>Enable social features such as finding your Epic Games friends in our MMORPG and playing together</li> </ul> <p>We do not sell, rent, or share your data with third parties for commercial purposes.</p> <h2>3. Sharing Your Data</h2> <p>Your information will not be shared with anyone unless it is necessary to:</p> <ul> <li>Comply with a legal obligation</li> <li>Protect the safety of our players and our platform</li> </ul> <h2>4. Data Retention</h2> <p>We retain your data only as long as necessary to provide our services. You can request the deletion of your information at any time.</p> <h2>5. Your Rights</h2> <p>You have the right to:</p> <ul> <li>Access your data</li> <li>Request its correction or deletion</li> <li>Object to its processing</li> </ul> <h2>6. Contact Us</h2> <p>For any questions regarding this Privacy Policy, you can contact us at: <strong>elgoaltailcontact@gmail.com</strong>.</p>
            `
        },
        TEAM: {
            TITLE: "ElgoalTail's Team"
        },
        WIKI: {
            TITLE: "ElgoalTail's Wiki"
        }
    },
    ["fr"]: {
        LANDINGPAGE: {
            TITLE: "Bienvenue sur ElgoalTail"
        },
        PRIVACY: {
            HTML: `
                <h1>Politique de Confidentialité</h1>
                <p><strong>Dernière mise à jour : 27 Avril 2025</strong></p>

                <p>Bienvenue !</p>

                <p>Nous respectons votre vie privée et nous nous engageons à la protéger. Cette Politique de Confidentialité
                    décrit
                    quelles données nous collectons, comment nous les utilisons, et vos droits à ce sujet.</p>

                <h2>1. Données que nous collectons</h2>
                <p>Lorsque vous utilisez notre jeu, nous collectons uniquement les informations suivantes :</p>
                <ul>
                    <li>Votre nom de joueur Epic Games</li>
                    <li>Votre liste d'amis Epic Games</li>
                </ul>
                <p>C'est tout. Nous ne collectons pas votre adresse e-mail, votre localisation, vos identifiants personnels ou
                    toute
                    autre information sensible.</p>

                <h2>2. Comment nous utilisons vos données</h2>
                <p>Nous utilisons ces données uniquement pour :</p>
                <ul>
                    <li>Afficher votre nom de joueur dans le jeu</li>
                    <li>Permettre les fonctionnalités sociales comme retrouver vos amis Epic Games dans notre MMORPG et jouer
                        ensemble</li>
                </ul>
                <p>Nous ne vendons, ne louons, ni ne partageons vos données avec des tiers à des fins commerciales.</p>

                <h2>3. Partage de vos données</h2>
                <p>Vos informations ne seront partagées avec personne, sauf si cela est nécessaire pour :</p>
                <ul>
                    <li>Respecter une obligation légale</li>
                    <li>Protéger la sécurité de nos joueurs et de notre plateforme</li>
                </ul>

                <h2>4. Conservation des données</h2>
                <p>Nous conservons vos données uniquement le temps nécessaire pour fournir nos services. Vous pouvez demander la
                    suppression de vos informations à tout moment.</p>

                <h2>5. Vos droits</h2>
                <p>Vous avez le droit de :</p>
                <ul>
                    <li>Accéder à vos données</li>
                    <li>Demander leur correction ou leur suppression</li>
                    <li>Vous opposer à leur traitement</li>
                </ul>

                <h2>6. Nous contacter</h2>
                <p>Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à l'adresse
                    suivante : <strong>elgoaltailcontact@gmail.com</strong>.</p>
            `
        },
        TEAM: {
            TITLE: "L'équipe ElgoalTail"
        },
        WIKI: {
            TITLE: "Wiki ElgoalTail"
        }
    },
}
window.addEventListener('load', function () {
    document.getElementById('localeSelected').innerHTML = ''
    let locale = (navigator && navigator.language) || "en";
    let availibleLocales = ['fr', 'en']
    for (let i = 0; i < availibleLocales.length; i++) {
        if (availibleLocales[i] == locale) {
            document.getElementById('localeSelected').innerHTML += `
                <option value="${availibleLocales[i].toLowerCase()}" selected="true">${availibleLocales[i].toUpperCase()}</option>
            `
        } else {
            document.getElementById('localeSelected').innerHTML += `
                <option value="${availibleLocales[i].toLowerCase()}"><img src="https://flagicons.lipis.dev/flags/4x3/${availibleLocales[i].toLowerCase()}.svg" class="langue_icon">${availibleLocales[i].toUpperCase()}</option>
            `
        }
    }
    var path = window.location.pathname;
    var page = path.split("/").pop().split('.')[0];
    if (page == '') page = 'index';
    console.log(page)
    translate(locale, page)
    document.getElementById('localeSelected').addEventListener('change', function (event) {
        locale = document.getElementById('localeSelected').value
        translate(locale, page)
    })
})

function translate(p_l, page) {
    switch (page) {
        case 'index':
            document.getElementById('landingpage_title').innerText = locales[p_l].LANDINGPAGE.TITLE
            break;
        case 'team':
            document.getElementById('team_title').innerText = locales[p_l].TEAM.TITLE
            break;
        case 'wiki':

            break;
        case 'privacy':
            document.getElementById('privacy_content').innerHTML = locales[p_l].PRIVACY.HTML
            break;
    }
}