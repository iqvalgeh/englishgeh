import { Pressable, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Category = "noun" | "verb" | "adjective";

type Props = {
    category: Category;
    onPress: () => void;
};

const ICON_MAP: Record<Category, keyof typeof Ionicons.glyphMap> = {
    noun: "cube-outline",
    verb: "flash-outline",
    adjective: "color-palette-outline",
};

const COLOR_MAP: Record<Category, string> = {
    noun: "#3B82F6",
    verb: "#10B981",
    adjective: "#F59E0B",
};

export default function CategoryCard({ category, onPress }: Props) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.card,
                {
                    opacity: pressed ? 0.9 : 1,
                    transform: [{ scale: pressed ? 0.97 : 1 }],
                },
            ]}
        >
            <View
                style={[
                    styles.iconBox,
                    { backgroundColor: COLOR_MAP[category] },
                ]}
            >
                <Ionicons
                    name={ICON_MAP[category]}
                    size={32}
                    color="#FFFFFF"
                />
            </View>

            <Text style={styles.text}>
                {category.toUpperCase()}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 260,
        paddingVertical: 18,
        paddingHorizontal: 16,
        borderRadius: 18,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        marginTop: 14,

        // depth
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 4,
    },

    iconBox: {
        width: 58,
        height: 58,
        borderRadius: 29,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,

        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 3,
    },

    text: {
        fontSize: 18,
        fontWeight: "900",
        color: "#111827",
        letterSpacing: 0.5,
    },
});
