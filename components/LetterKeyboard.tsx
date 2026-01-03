import { View, Pressable, Text, StyleSheet } from "react-native";

const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

export default function LetterKeyboard({
    onPress,
    onDelete, // 🆕
}: {
    onPress: (l: string) => void;
    onDelete?: () => void;
}) {
    return (
        <View style={styles.wrap}>
            {LETTERS.map((l) => (
                <Pressable
                    key={l}
                    onPress={() => onPress(l)}
                    style={({ pressed }) => [
                        styles.key,
                        {
                            opacity: pressed ? 0.8 : 1,
                            transform: [{ scale: pressed ? 0.92 : 1 }],
                        },
                    ]}
                >
                    <Text style={styles.text}>{l}</Text>
                </Pressable>
            ))}

            {/* ⌫ DELETE */}
            {onDelete && (
                <Pressable
                    onPress={onDelete}
                    style={({ pressed }) => [
                        styles.key,
                        styles.deleteKey,
                        {
                            opacity: pressed ? 0.8 : 1,
                            transform: [{ scale: pressed ? 0.92 : 1 }],
                        },
                    ]}
                >
                    <Text style={styles.deleteText}>⌫</Text>
                </Pressable>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },

    key: {
        width: 36,
        height: 36,
        margin: 4,
        borderRadius: 8,
        backgroundColor: "#E5E7EB",
        alignItems: "center",
        justifyContent: "center",

        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },

    deleteKey: {
        backgroundColor: "#FCA5A5", // merah muda lembut
    },

    text: {
        fontWeight: "800",
        fontSize: 14,
        color: "#1F2937",
        textTransform: "uppercase",
    },

    deleteText: {
        fontWeight: "900",
        fontSize: 16,
        color: "#7F1D1D",
    },
});
