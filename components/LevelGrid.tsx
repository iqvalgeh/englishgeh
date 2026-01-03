import { View, Text, Pressable, StyleSheet } from "react-native";

type Props = {
    unlockedLevel: number;
    onPressLevel: (level: number) => void;
};

export default function LevelGrid({ unlockedLevel, onPressLevel }: Props) {
    return (
        <View style={styles.grid}>
            {Array.from({ length: 7 }).map((_, i) => {
                const level = i + 1;
                const locked = level > unlockedLevel;

                return (
                    <Pressable
                        key={level}
                        disabled={locked}
                        onPress={() => onPressLevel(level)}
                        style={({ pressed }) => [
                            styles.card,
                            locked && styles.locked,
                            !locked && pressed && styles.pressed,
                        ]}
                    >
                        <Text style={styles.levelText}>
                            {locked ? "🔒" : `Level ${level}`}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 20,
    },

    card: {
        width: "40%",
        margin: "4%",
        paddingVertical: 24,
        borderRadius: 18,
        backgroundColor: "#ff00c8ff",
        alignItems: "center",

        shadowColor: "#3B82F6",
        shadowOpacity: 0.35,
        shadowRadius: 10,
        elevation: 5,
    },

    pressed: {
        opacity: 0.85,
        transform: [{ scale: 0.96 }],
    },

    locked: {
        backgroundColor: "#9CA3AF",
        shadowOpacity: 0,
        elevation: 0,
    },

    levelText: {
        color: "#FFFFFF",
        fontWeight: "900",
        fontSize: 16,
        letterSpacing: 0.5,
    },
});
