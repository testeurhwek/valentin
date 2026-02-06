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
        placeSection.classList.add("hidden");
        valentineSection.classList.remove("hidden");
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
yesBtn.addEventListener("click", () => {
    valentineSection.classList.add("hidden");
    travelSection.classList.remove("hidden");
});

// STEP 3 → STEP 4
travelButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        travelMessage.textContent = `💖 Perfect! ${btn.textContent} it is ✨`;
        // Après 1 seconde → afficher final
        setTimeout(() => {
            travelSection.classList.add("hidden");
            finalSection.classList.remove("hidden");
        }, 1000);
    });
});


