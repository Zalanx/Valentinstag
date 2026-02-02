const answers_no = {
    english: [
        "Nein",
        "Bist du sicher?",
        "Sehr sicher?? :(",
        "wirklich???",
        "Dein Ernst?",
        "Zufrieden mit der entscheidung?",
        "Aua?",
        "Können wir nicht drüber reden?",
        "Ich frage zum letzten mal!",
        "Ok wow das tat weh!",
        "Jetzt bist du nurnoch gemein!",
        "Wiesoo?",
        "Bitte!",
        "Hör doch auf!",
        "Ok, dann von vorne..."
    ],
};

answers_yes = {
    "english": "Ja <3",
}

let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 100;
let clicks = 0;

const secondQuestion = document.querySelector(".second-question");
const second_yes = document.getElementById('second-yes-button');
const second_no = document.getElementById('second-no-button');
const secondMessage = document.getElementById('second-success-message');

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [60, 70, 50, 55, 25]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
    // Button einfach verschwinden lassen
    no_button.style.display = "none"; 

    // Optional: den Ja-Button zurücksetzen, falls nötig
    yes_button.innerHTML = answers_yes[language];
    yes_button.style.height = "150px";
    yes_button.style.width = "150px";
    size = 50;
}
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";

    secondQuestion.classList.add("show");
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

second_yes.addEventListener('click', () => {
    // Nachricht anzeigen
    secondMessage.style.display = "block";
    
    // Banner optional ändern
    banner.src = "public/images/happycat.gif";
    refreshBanner();

    // Buttons ausblenden
    secondQuestion.querySelector('.second-buttons').style.display = "none";

    // Heutiges Datum anzeigen
    const dateText = document.getElementById('date-text');
    const today = new Date();

    // Datum formatieren z.B. "2. Februar 2026"
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateText.textContent = `${today.toLocaleDateString('de-DE', options)}`;
});




second_no.addEventListener('click', () => {
    // Alles andere ausblenden
    document.querySelector('.container').style.display = "none";  // optional alles ausblenden
    document.querySelector('.second-question').style.display = "none";
    document.querySelector('.message').style.display = "none";

    // Final Image anzeigen
    const finalContainer = document.querySelector('.final-image');
    finalContainer.style.display = "block";
    
    const finalImg = document.getElementById('final-img');
    finalImg.src = "public/images/sadcat.gif"; // Hier dein gewünschtes Bild
});

const funButton = document.getElementById('fun-button');
const happyContainer = document.querySelector('.happy-container');
const happyGif = document.getElementById('happy-gif');

funButton.addEventListener('click', () => {
    // Trauriges Bild + Button ausblenden
    document.querySelector('.final-image').style.display = "none";

    // Happy Container einblenden
    happyContainer.style.display = "block";

    // Happy GIF setzen
    happyGif.src = "public/images/yippiecat.gif"; // hier dein großes Happy-GIF
});

