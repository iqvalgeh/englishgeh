import { Audio } from "expo-av";

let correct: Audio.Sound | null = null;
let wrong: Audio.Sound | null = null;

export async function loadSounds() {
    if (!correct) {
        correct = new Audio.Sound();
        await correct.loadAsync(require("../assets/correct.mp3"));
        await correct.setVolumeAsync(0.5);
    }

    if (!wrong) {
        wrong = new Audio.Sound();
        await wrong.loadAsync(require("../assets/wrong.mp3"));
        await wrong.setVolumeAsync(0.5);
    }
}

export const playCorrect = async () => {
    if (!correct) return;
    await correct.replayAsync();
};

export const playWrong = async () => {
    if (!wrong) return;
    await wrong.replayAsync();
};

/* 🔥 CLEANUP */
export async function unloadSounds() {
    if (correct) {
        await correct.unloadAsync();
        correct = null;
    }

    if (wrong) {
        await wrong.unloadAsync();
        wrong = null;
    }
}
