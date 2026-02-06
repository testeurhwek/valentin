// Sections
const placeSection = document.getElementById("placeSection");
const valentineSection = document.getElementById("valentineSection");
const travelSection = document.getElementById("travelSection");
const finalSection = document.getElementById("finalSection");

// Place selection
const placeSelect = document.getElementById("placeSelect");
const continueBtn = document.getElementById("continueBtn");
const placeMessage = document.getElementById("placeMessage");

// Valentine
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// Travel
const travelButtons = document.querySelectorAll(".travelBtn");
const travelMessage = document.getElementById("travelMessage");

// STEP 1 → STEP 2
continueBtn.addEventListener("click", () => {
    if (placeSelect.value === "gammarth") {
        placeSection.style.display = "none";
        valentineSection.style.display = "block";
    } else if (placeSelect.value === "") {
        placeMessage.textContent = "👀 Choose a place first";
    } else {
        placeMessage.textContent = "😏 Not this one… try again";
    }
});

// No button escapes
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// STEP 2 → STEP 3
// STEP 2 → STEP 3 avec message spécial
yesBtn.addEventListener("click", () => {
    // Affiche le message romantique
    message.textContent = "Yaaaay 💕 you are my Valentine!";

    // Petit délai pour laisser le message s'afficher avant de passer à l'écran du pays
    setTimeout(() => {
        valentineSection.style.display = "none";
        travelSection.style.display = "block";
    }, 1500); // 1,5 secondes
});

// STEP 3 → STEP 4
travelButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        travelMessage.textContent = `💖 Perfect! ${btn.textContent} it is ✨`;
        setTimeout(() => {
            travelSection.style.display = "none";
            finalSection.style.display = "block";
        }, 1000);
    });
});



