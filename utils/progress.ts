import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "@progress";

export type Progress = {
    noun: number;
    verb: number;
    adjective: number;
};

const DEFAULT_PROGRESS: Progress = {
    noun: 1,
    verb: 1,
    adjective: 1,
};

/* ================= LOAD ================= */

export async function loadProgress(): Promise<Progress> {
    const json = await AsyncStorage.getItem(KEY);
    if (!json) return DEFAULT_PROGRESS;

    try {
        const parsed = JSON.parse(json);
        return {
            noun: parsed.noun ?? 1,
            verb: parsed.verb ?? 1,
            adjective: parsed.adjective ?? 1,
        };
    } catch {
        return DEFAULT_PROGRESS;
    }
}

/* ================= UNLOCK ================= */

export async function unlock(
    category: "noun" | "verb" | "adjective",
    finishedLevel: number
) {
    const progress = await loadProgress();

    const nextLevel = finishedLevel + 1;

    // 🔥 JANGAN TURUNKAN, HANYA BOLEH NAIK
    if (nextLevel > progress[category]) {
        progress[category] = nextLevel;
        await AsyncStorage.setItem(KEY, JSON.stringify(progress));
    }
}

/* ================= RESET ================= */

export async function resetProgress() {
    await AsyncStorage.setItem(KEY, JSON.stringify(DEFAULT_PROGRESS));
}
