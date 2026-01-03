import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Animated,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Speech from "expo-speech";
import { useRef } from "react";

/* 🔊 INTERNAL PHONETIC */
const SOUND: Record<string, string> = {
    a: "a", b: "bee", c: "see", d: "dee", e: "e",
    f: "ef", g: "g", h: "aitch", i: "eye", j: "jay",
    k: "kay", l: "el", m: "m", n: "en", o: "oh",
    p: "pee", q: "q", r: "ar", s: "ess", t: "tee",
    u: "you", v: "vee", w: "double you",
    x: "ex", y: "why", z: "zee",
};

const LETTERS = Object.keys(SOUND);
const PRIMARY = "#ff00c8ff";

export default function Alphabet() {
    const router = useRouter();

    /* 🔹 ANIMASI */
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const rotateAnim = useRef(new Animated.Value(0)).current;
    const opacityAnim = useRef(new Animated.Value(1)).current;

    const speakLetter = (letter: string) => {
        Animated.parallel([
            Animated.sequence([
                Animated.timing(scaleAnim, {
                    toValue: 1.2,
                    duration: 120,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 120,
                    useNativeDriver: true,
                }),
            ]),
            Animated.sequence([
                Animated.timing(rotateAnim, {
                    toValue: 1,
                    duration: 120,
                    useNativeDriver: true,
                }),
                Animated.timing(rotateAnim, {
                    toValue: 0,
                    duration: 120,
                    useNativeDriver: true,
                }),
            ]),
            Animated.sequence([
                Animated.timing(opacityAnim, {
                    toValue: 0.6,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 1,
                    duration: 100,
                    useNativeDriver: true,
                }),
            ]),
        ]).start();

        Speech.stop();
        Speech.speak(SOUND[letter], {
            language: "en-US",
            rate: 0.55,
            pitch: 1.15,
        });
    };

    const rotate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "5deg"],
    });

    return (
        <LinearGradient
            colors={["#FDE2F3", "#EEF2FF"]}
            style={styles.container}
        >
            <View style={styles.card}>
                {/* HEADER */}
                <View style={styles.headerRow}>
                    <Pressable onPress={() => router.back()}>
                        <Ionicons
                            name="chevron-back"
                            size={22}
                            color={PRIMARY}
                        />
                    </Pressable>

                    <Text style={styles.title}>Alphabet</Text>
                    <View style={{ width: 22 }} />
                </View>

                <Text style={styles.subtitle}>
                    Tap huruf untuk mendengar pengucapannya 🔊
                </Text>

                {/* GRID */}
                <View style={styles.grid}>
                    {LETTERS.map((l) => (
                        <Pressable
                            key={l}
                            onPress={() => speakLetter(l)}
                            style={({ pressed }) => [
                                styles.letterCard,
                                { opacity: pressed ? 0.85 : 1 },
                            ]}
                        >
                            <Animated.Text
                                style={[
                                    styles.letter,
                                    {
                                        opacity: opacityAnim,
                                        transform: [
                                            { scale: scaleAnim },
                                            { rotate },
                                        ],
                                    },
                                ]}
                            >
                                {l.toUpperCase()}
                            </Animated.Text>
                        </Pressable>
                    ))}
                </View>
            </View>
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
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 6,
    },

    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },

    title: {
        flex: 1,
        textAlign: "center",
        fontSize: 24,
        fontWeight: "900",
        color: PRIMARY,
    },

    subtitle: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "600",
        color: "#6B7280",
        marginBottom: 16,
    },

    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },

    letterCard: {
        width: "21%",
        aspectRatio: 1,
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        margin: "2%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#FFE4F6",
        shadowColor: PRIMARY,
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },

    letter: {
        fontSize: 28,
        fontWeight: "900",
        color: PRIMARY,
    },
});
