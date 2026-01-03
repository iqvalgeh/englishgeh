import { View, Text, StyleSheet } from "react-native";

export default function WordSlots({
    word,
    answer,
}: {
    word: string;
    answer: string;
}) {
    return (
        <View style={styles.row}>
            {word.split("").map((_, i) => {
                const filled = Boolean(answer[i]);

                return (
                    <Text
                        key={i}
                        style={[
                            styles.slot,
                            filled && styles.filled,
                        ]}
                    >
                        {answer[i]?.toUpperCase() ?? ""}
                    </Text>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        marginVertical: 20,
        justifyContent: "center",
    },

    slot: {
        width: 34,
        height: 44,
        marginHorizontal: 6,
        fontSize: 26,
        fontWeight: "900",
        textAlign: "center",
        textAlignVertical: "center",

        borderBottomWidth: 3,
        borderColor: "#9CA3AF",
        color: "#111827",
    },

    filled: {
        borderColor: "#3B82F6",
    },
});
