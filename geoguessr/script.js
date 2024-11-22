let score = 0;

let panorama;

const places = [
    [{ lat: 33.643889, lng: -117.841944 }, { building: 'Information and Computer Science' }],
    [{ lat: 33.643056, lng: -117.841944 }, { building: 'Donald Bren Hall' }],
    [{ lat: 33.643611, lng: -117.843333 }, { building: 'Frederick Reines Hall' }],
    [{ lat: 33.645833, lng: -117.845000 }, { building: 'Steinhaus Hall'}],
    [{ lat: 33.646111, lng: -117.843056 }, { building: 'Aldrich Park'}],
    ];

let currentPlace = places[Math.floor(Math.random() * places.length)];
let coordinates = currentPlace[0];
let building = currentPlace[1].building;

const reconfigure = () => {
    const index = places.indexOf(currentPlace);
    if (index > -1) {
        places.splice(index, 1);
    }
    
    if (places.length === 0) {
        document.getElementById('guess-prompt').innerText = "Game Over!";
        document.getElementById('score').innerText = `Your score was: ${score}`;
        document.getElementById('result').innerText = " Thanks for playing UCI Geoguessr!";
        document.getElementById('result').style.color = 'black';
        document.getElementById('street-view').style.display = 'none';
        document.getElementById('guess-form').style.display = 'none';
        document.getElementById('rule').style.display = 'none';
        return;
    }

    currentPlace = places[Math.floor(Math.random() * places.length)];
    coordinates = currentPlace[0];
    building = currentPlace[1].building;
    
    initialize();
};

function initialize() {
    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('street-view'),
        {
            position: coordinates,
            pov: { heading: 50, pitch: 0 },
            zoom: 1,
            disableDefaultUI: true,
            linksControl: false,
        }
    );
};

const handleSubmit = (event) => {
    event.preventDefault();

    const userGuess = document.getElementById('location').value.trim();
    const resultElement = document.getElementById('result');

    if (userGuess.toLowerCase() === building.toLowerCase()) {
        score += 1;
        resultElement.innerText = `Correct! The answer was ${building}.`;
        resultElement.style.color = "green";
    } 
    
    else {
        resultElement.innerText = `Wrong! The correct answer was ${building}.`;
        resultElement.style.color = "red";
    }
    
    document.getElementById('score').innerText = `Your current score is: ${score}`;
    document.getElementById('location').value = "";
    
    reconfigure();
};

document.getElementById('guess-form').addEventListener('submit', handleSubmit);

document.getElementById('Back').addEventListener('click', () => {
    directToGame('../website.html');
});

function directToGame(gameFile) {
    window.location.href = gameFile;
}