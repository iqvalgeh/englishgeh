import { View, Text, StyleSheet, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import LevelGrid from "../../components/LevelGrid";
import { loadProgress } from "../../utils/progress";
import { useEffect, useState } from "react";

type Category = "noun" | "verb" | "adjective";

const PRIMARY = "#ff00c8ff";

export default function CategoryLevels() {
    const { category } =
        useLocalSearchParams<{ category?: Category; }>();
    const router = useRouter();

    const [unlocked, setUnlocked] = useState(1);

    useEffect(() => {
        if (!category) return;
        loadProgress().then((p) => {
            setUnlocked(p[category] ?? 1);
        });
    }, [category]);

    if (!category) return null;

    return (
        <LinearGradient
            colors={["#FDE2F3", "#EEF2FF"]}
            style={styles.container}
        >
            <View style={styles.card}>
                {/* HEADER */}
                <View style={styles.header}>
                    <Pressable
                        onPress={() => router.back()}
                        style={({ pressed }) => [
                            styles.backButton,
                            { opacity: pressed ? 0.6 : 1 },
                        ]}
                    >
                        <Ionicons
                            name="chevron-back"
                            size={22}
                            color={PRIMARY}
                        />
                    </Pressable>

                    <Text style={styles.title}>
                        {category.toUpperCase()}
                    </Text>

                    <View style={{ width: 36 }} />
                </View>

                <Text style={styles.subtitle}>
                    Choose your level
                </Text>

                {/* LEVEL GRID */}
                <View style={styles.gridWrapper}>
                    <LevelGrid
                        unlockedLevel={unlocked}
                        onPressLevel={(level) =>
                            router.push({
                                pathname:
                                    "/learn/[category]/[level]",
                                params: {
                                    category,
                                    level: String(level),
                                },
                            })
                        }
                    />
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
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 6,
    },

    /* HEADER */
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6,
    },

    backButton: {
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
        fontSize: 24,
        fontWeight: "900",
        color: PRIMARY,
        letterSpacing: 1,
    },

    subtitle: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "600",
        color: "#6B7280",
        marginBottom: 16,
    },

    gridWrapper: {
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        paddingVertical: 12,
        borderWidth: 2,
        borderColor: "#FFE4F6",
    },
});
