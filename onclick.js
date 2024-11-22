document.getElementById('tent').addEventListener('click', () => {
    directToGame('geoguessr/geoguessr.html');
});

document.getElementById('pond').addEventListener('click', () => {
    directToGame('fishing/fishing.html');
});

function directToGame(gameFile) {
    window.location.href = gameFile;
}
