import { View, Text, Pressable, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { speakWord, stopSpeech } from "../../../utils/speech";
import { loadSounds, playCorrect, playWrong } from "../../../utils/sound";
import { unlock } from "../../../utils/progress";

import WordSlots from "../../../components/WordSlots";
import LetterKeyboard from "../../../components/LetterKeyboard";

import { nouns } from "../../../data/nouns";
import { verbs } from "../../../data/verbs";
import { adjectives } from "../../../data/adjectives";

type Category = "noun" | "verb" | "adjective";

const PRIMARY = "#ff00c8ff";
const SUCCESS = "#10B981";

export default function GameScreen() {
    const { category, level } = useLocalSearchParams<{
        category?: Category;
        level?: string;
    }>();

    const router = useRouter();
    const audioLock = useRef(false);

    if (!category || !level) return null;

    const levelIndex = Number(level) - 1;

    const dataMap: Record<Category, any[]> = {
        noun: nouns,
        verb: verbs,
        adjective: adjectives,
    };

    const words = dataMap[category]?.[levelIndex];
    if (!words) return null;

    const [i, setI] = useState(0);
    const [answer, setAnswer] = useState("");
    const [showCongrats, setShowCongrats] = useState(false);

    const word = words[i].word;

    useEffect(() => {
        loadSounds();
        return () => stopSpeech();
    }, []);

    useEffect(() => {
        const id = setTimeout(() => {
            stopSpeech();
            speakWord(word);
        }, 300);
        return () => clearTimeout(id);
    }, [word]);

    const submit = async () => {
        if (audioLock.current) return;

        audioLock.current = true;
        stopSpeech();

        if (answer === word) {
            await playCorrect();

            if (i === words.length - 1) {
                await unlock(category, Number(level));
                setShowCongrats(true);
                return;
            }

            setI((p) => p + 1);
            setAnswer("");
            setTimeout(() => (audioLock.current = false), 250);
        } else {
            await playWrong();
            setAnswer("");
            setTimeout(() => {
                audioLock.current = false;
                speakWord(word);
            }, 350);
        }
    };

    const repeatSound = () => {
        stopSpeech();
        speakWord(word);
    };

    const goBack = () => {
        stopSpeech();
        router.back();
    };

    return (
        <LinearGradient
            colors={["#FDE2F3", "#EEF2FF"]}
            style={styles.container}
        >
            <View style={styles.card}>
                {/* HEADER */}
                <View style={styles.header}>
                    <Pressable onPress={goBack} style={styles.backCircle}>
                        <Ionicons
                            name="chevron-back"
                            size={20}
                            color={PRIMARY}
                        />
                    </Pressable>

                    <Text style={styles.title}>
                        {category.toUpperCase()} • Level {level}
                    </Text>

                    <View style={{ width: 36 }} />
                </View>

                {/* ICON */}
                <Ionicons
                    name={(words[i].icon ?? "image-outline") as any}
                    size={96}
                    color={PRIMARY}
                    style={{ marginBottom: 12 }}
                />

                {/* ACTIONS */}
                <View style={styles.actionRow}>
                    <Pressable
                        onPress={repeatSound}
                        style={styles.actionButton}
                    >
                        <Ionicons
                            name="volume-high-outline"
                            size={18}
                            color="#fff"
                        />
                        <Text style={styles.actionText}>Ulangi</Text>
                    </Pressable>
                </View>

                {/* WORD */}
                <View style={styles.innerCard}>
                    <WordSlots word={word} answer={answer} />
                </View>

                {/* KEYBOARD */}
                <View style={styles.innerCard}>
                    <LetterKeyboard
                        onPress={(l) =>
                            answer.length < word.length &&
                            setAnswer((a) => a + l)
                        }
                        onDelete={() =>
                            setAnswer((a) => a.slice(0, -1))
                        }
                    />
                </View>

                {/* SUBMIT */}
                <Pressable onPress={submit} style={styles.submit}>
                    <Text style={styles.submitText}>Submit</Text>
                </Pressable>
            </View>

            {/* 🎉 CONGRATS */}
            {showCongrats && (
                <View style={styles.overlay}>
                    <View style={styles.congratsCard}>
                        <Ionicons
                            name="trophy-outline"
                            size={48}
                            color={SUCCESS}
                        />
                        <Text style={styles.congratsTitle}>
                            🎉 Selamat!
                        </Text>
                        <Text style={styles.congratsText}>
                            Kamu berhasil menyelesaikan level ini
                        </Text>

                        <Pressable
                            onPress={() =>
                                router.replace("/level-select")
                            }
                            style={styles.congratsButton}
                        >
                            <Text style={styles.congratsButtonText}>
                                Kembali Pilih
                            </Text>
                        </Pressable>
                    </View>
                </View>
            )}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },

    card: {
        width: "100%",
        maxWidth: 380,
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        paddingVertical: 24,
        paddingHorizontal: 16,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 6,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },

    backCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#FFE4F6",
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        flex: 1,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "900",
        color: PRIMARY,
    },

    actionRow: {
        flexDirection: "row",
        marginBottom: 12,
    },

    actionButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 14,
        backgroundColor: PRIMARY,
    },

    actionText: {
        color: "#fff",
        fontWeight: "700",
    },

    innerCard: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        padding: 12,
        marginVertical: 8,
        borderWidth: 2,
        borderColor: "#FFE4F6",
    },

    submit: {
        marginTop: 16,
        paddingVertical: 14,
        paddingHorizontal: 48,
        backgroundColor: SUCCESS,
        borderRadius: 18,
        shadowColor: SUCCESS,
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 5,
    },

    submitText: {
        color: "#fff",
        fontWeight: "900",
        fontSize: 16,
        letterSpacing: 0.5,
    },

    /* OVERLAY */
    overlay: {
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center",
    },

    congratsCard: {
        backgroundColor: "#fff",
        padding: 24,
        borderRadius: 20,
        alignItems: "center",
        width: "80%",
    },

    congratsTitle: {
        fontSize: 22,
        fontWeight: "900",
        marginTop: 10,
        color: "#1F2937",
    },

    congratsText: {
        textAlign: "center",
        marginVertical: 8,
        color: "#6B7280",
    },

    congratsButton: {
        marginTop: 16,
        paddingVertical: 12,
        paddingHorizontal: 28,
        backgroundColor: PRIMARY,
        borderRadius: 14,
    },

    congratsButtonText: {
        color: "#fff",
        fontWeight: "800",
    },
});
