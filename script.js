const form = document.getElementById("memoryForm");
const formSection = document.getElementById("formSection");
const valentineSection = document.getElementById("valentineSection");

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const date = document.getElementById("meetDate").value;
    const place = document.getElementById("meetPlace").value;

    if (!date || !place) return;

    formSection.classList.add("hidden");
    valentineSection.classList.remove("hidden");

    message.textContent = `💕 Since ${date}, at ${place}...`;
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
    message.textContent = "💍 You just made me the happiest person 💖";
});

