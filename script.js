const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.onclick = function() {
        if (card.style.border === "5px solid gold") {
            card.style.border = "1px solid #ddd";
        } else {
            card.style.border = "5px solid gold";
        }
    };
});

const allCards = document.querySelectorAll('.card');

allCards.forEach(card => {
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.alignItems = "center";
    card.style.textAlign = "center";
});