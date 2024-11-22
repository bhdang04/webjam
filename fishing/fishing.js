const petrs = [
    ["donald_duck_petr.png", "Donald Duck Petr"],
    ["joker_petr.png", "Joker Petr"],
    ["kermit_petr.png", "Kemrit Petr"],
    ["normal_petr.png", "Normal Petr"],
    ["shrek_petr.png", "Shrek Petr"]
];

document.addEventListener("DOMContentLoaded", () => {
    // Displays a random petr sticker
    document.getElementById('fish-button').addEventListener('click', () => {
        const petr_img = document.getElementById('petr-img');
        const bobber = document.getElementById('bobber');
        const prize_backdrop = document.getElementById('prize-backdrop');
        const prize_message = document.getElementById('prize-message');

        // // Selects a random petr
        const randomIndex = Math.floor(Math.random() * petrs.length);
        const randomPetr = petrs[randomIndex];

        // // Projects chosen petr on screen
        petr_img.src = `images/petrs/${randomPetr[0]}`;
        petr_img.style.display = 'block';

        // Restarts animation for next petr
        petr_img.classList.remove('appear');
        void petr_img.offsetWidth; 
        petr_img.classList.add('appear');

        // Restarts animation for bobber
        bobber.classList.remove('fish');
        void bobber.offsetWidth; 
        bobber.classList.add('fish');

        // Restarts animation for prize backdrop
        prize_backdrop.classList.remove('appear');
        void prize_backdrop.offsetWidth; 
        prize_backdrop.classList.add('appear');

        // Restarts animation for prize message
        prize_message.innerText = `You got... ${randomPetr[1]}!`
        prize_message.classList.remove('appear');
        void prize_message.offsetWidth; 
        prize_message.classList.add('appear');
    });
}); 