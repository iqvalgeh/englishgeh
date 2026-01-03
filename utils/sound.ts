import { Audio } from "expo-av";

let correct: Audio.Sound;
let wrong: Audio.Sound;

export async function loadSounds() {
    correct = new Audio.Sound();
    wrong = new Audio.Sound();

    await correct.loadAsync(require("../assets/correct.mp3"));
    await wrong.loadAsync(require("../assets/wrong.mp3"));

    // 🔥 TURUNKAN VOLUME FX
    await correct.setVolumeAsync(0.5);
    await wrong.setVolumeAsync(0.5);
}

export const playCorrect = async () => {
    await correct.replayAsync();
};

export const playWrong = async () => {
    await wrong.replayAsync();
};
