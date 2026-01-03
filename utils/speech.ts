import * as Speech from "expo-speech";
import { Platform } from "react-native";

const PHONETIC: Record<string, string> = {
  a: "ay",
  b: "bee",
  c: "see",
  d: "dee",
  e: "e",
  f: "ef",
  g: "jee",
  h: "aitch",
  i: "eye",
  j: "jay",
  k: "kay",
  l: "el",
  m: "em",
  n: "en",
  o: "oh",
  p: "pee",
  q: "q",
  r: "ar",
  s: "ess",
  t: "tee",
  u: "you",
  v: "vee",
  w: "double you",
  x: "ex",
  y: "why",
  z: "zee",
};

let timer: ReturnType<typeof setTimeout> | null = null;

export function stopSpeech() {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
  Speech.stop();
}

export function speakWord(word: string) {
  stopSpeech();
  Speech.speak(word, {
    language: "en-US",
    rate: Platform.OS === "android" ? 0.95 : 0.55,
    pitch: 1.1,
  });
}

/* 🔥 ANDROID SPELLING FIX */
export function speakLetters(word: string) {
  stopSpeech();

  const letters = word.toLowerCase().split("");
  let i = 0;

  const speakNext = () => {
    if (i >= letters.length) return;

    const text =
      Platform.OS === "android"
        ? PHONETIC[letters[i]] ?? letters[i]
        : letters[i];

    Speech.speak(text, {
      language: "en-US",
      rate: Platform.OS === "android" ? 1.05 : 0.5,
      pitch: 1.2,
    });

    i++;

    timer = setTimeout(
      speakNext,
      Platform.OS === "android" ? 420 : 600
    );
  };

  speakNext();
}
