import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
    speakWord,
    speakLetters,
    stopSpeech,
} from "../utils/speech";

type Props = {
    word: string;
    icon?: string;
};

export default function IconWordCard({ word, icon }: Props) {
    const handleSpeakWord = () => {
        stopSpeech();
        speakWord(word);
    };

    const handleSpell = () => {
        stopSpeech();
        speakLetters(word);
    };

    return (
        <View style={styles.card}>
            {/* ICON + UCAP KATA */}
            <Pressable
                onPress={handleSpeakWord}
                style={({ pressed }) => [
                    styles.main,
                    {
                        opacity: pressed ? 0.85 : 1,
                        transform: [{ scale: pressed ? 0.97 : 1 }],
                    },
                ]}
            >
                <View style={styles.iconCircle}>
                    <Ionicons
                        name={(icon ?? "image-outline") as any}
                        size={34}
                        color="#FFFFFF"
                    />
                </View>

                <Text style={styles.text}>{word}</Text>
            </Pressable>

            {/* 🔤 EJA HURUF */}
            <Pressable
                onPress={handleSpell}
                style={({ pressed }) => ({
                    opacity: pressed ? 0.7 : 1,
                })}
            >
                <Text style={styles.spell}>🔤 Eja</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "28%",
        margin: "2%",
        paddingVertical: 14,
        borderRadius: 16,
        backgroundColor: "#FFFFFF",
        alignItems: "center",

        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 3,
    },

    main: {
        alignItems: "center",
    },

    iconCircle: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: "#ff00c8ff",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 6,

        shadowColor: "#3B82F6",
        shadowOpacity: 0.35,
        shadowRadius: 6,
        elevation: 4,
    },

    text: {
        marginTop: 4,
        fontWeight: "800",
        fontSize: 14,
        color: "#111827",
        textAlign: "center",
    },

    spell: {
        marginTop: 6,
        fontSize: 12,
        color: "#10B981",
        fontWeight: "800",
    },
});
