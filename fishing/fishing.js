const petrs = [
    "donald_duck_petr.png",
    "joker_petr.png",
    "kermit_petr.png",
    "normal_petr.png",
    "shrek_petr.png"
];

document.addEventListener("DOMContentLoaded", () => {
    // Displays a random petr sticker
    document.getElementById('fish-button').addEventListener('click', () => {
        
        // // Selects a random petr
        const randomIndex = Math.floor(Math.random() * petrs.length);
        const randomPetr = petrs[randomIndex];

        // // Projects chosen petr on screen
        const petr_img = document.getElementById('petr-img');
        petr_img.src = `images/petrs/${randomPetr}`;
        petr_img.style.display = 'block';

        // Slides bobber down from top
        const imageContainer = document.querySelector('.image-container');
        imageContainer.style.top = '-35%'; 

        // Restarts animation for next petr
        petr_img.classList.remove('appear');
        void petr_img.offsetWidth; // Force reflow to restart CSS transition
        petr_img.classList.add('appear');
    });
}); 