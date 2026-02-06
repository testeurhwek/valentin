const placeSelect = document.getElementById("placeSelect");
const continueBtn = document.getElementById("continueBtn");
const placeSection = document.getElementById("placeSection");
const valentineSection = document.getElementById("valentineSection");
const placeMessage = document.getElementById("placeMessage");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

continueBtn.addEventListener("click", () => {
    const place = placeSelect.value;

    if (place === "gammarth") {
        placeSection.classList.add("hidden");
        valentineSection.classList.remove("hidden");
    } else if (place === "") {
        placeMessage.textContent = "👀 Choose a place first";
    } else {
        placeMessage.textContent = "😏 Hmm… that’s not the right one. Try again.";
    }
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
    message.textContent = "💍 Best choice ever 💖";
});


