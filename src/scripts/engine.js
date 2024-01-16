const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const checkedKeys = document.querySelector(".keys-check input")

let mapedKeys = [];

let audio = new Audio()

function playTune(key) {
    audio.src = `src/audios/${key}.wav`;
    audio.play();

    const activeKey = document.querySelector(`[data-key="${key}"]`);

    activeKey.classList.add("active");
    setTimeout(() => {
        activeKey.classList.remove("active");
    }, 200);
};

function handleVolume(e) {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach((key) =>
    key.classList.toggle("hide"))
}

pianoKeys.forEach((key) => { 
    mapedKeys.push(key.textContent);
    key.addEventListener("click", () => playTune(key.textContent))
});

document.addEventListener("keydown", (k) => {
    if(mapedKeys.includes(k.key)) {
        playTune(k.key)
    }
})

volumeSlider.addEventListener("input", handleVolume);

checkedKeys.addEventListener("click", showHideKeys);