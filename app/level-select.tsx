import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import CategoryCard from "../components/CategoryCard";
import { resetProgress } from "../utils/progress";

const CATEGORIES = ["noun", "verb", "adjective"] as const;
const PRIMARY = "#ff00c8ff";

export default function LevelSelect() {
    const router = useRouter();

    const confirmReset = () => {
        Alert.alert(
            "Reset Progress",
            "Apakah kamu yakin ingin menghapus semua progres?",
            [
                { text: "Batal", style: "cancel" },
                {
                    text: "Reset",
                    style: "destructive",
                    onPress: resetProgress,
                },
            ]
        );
    };

    return (
        <LinearGradient
            colors={["#FDE2F3", "#EEF2FF"]}
            style={styles.container}
        >
            <View style={styles.card}>
                <Text style={styles.title}>Pilih Kategori</Text>

                <View style={styles.categoryWrapper}>

                    {CATEGORIES.map((c) => (
                        <CategoryCard
                            key={c}
                            category={c}
                            onPress={() =>
                                router.push({
                                    pathname: "/category/[category]",
                                    params: { category: c },
                                })
                            }
                        />
                    ))}
                </View>

                {/* ⬅ KEMBALI */}
                <Pressable
                    onPress={() => router.replace("/")}
                    style={({ pressed }) => [
                        styles.backButton,
                        { opacity: pressed ? 0.6 : 1 },
                    ]}
                >

                    <Ionicons
                        name="chevron-back"
                        size={18}
                        color={PRIMARY}
                    />
                    <Text style={styles.backText}>Kembali</Text>
                </Pressable>

                {/* 🔴 RESET */}
                <Pressable
                    onPress={confirmReset}
                    style={({ pressed }) => [
                        styles.resetButton,
                        { opacity: pressed ? 0.6 : 1 },
                    ]}
                >
                    <Ionicons
                        name="close-circle"
                        size={18}
                        color="#EF4444"
                        style={{ marginRight: 6 }}
                    />
                    <Text style={styles.resetText}>
                        Reset Progress
                    </Text>
                </Pressable>
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
        maxWidth: 360,
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        paddingVertical: 28,
        paddingHorizontal: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 6,
    },

    title: {
        fontSize: 26,
        fontWeight: "900",
        color: PRIMARY,
        marginBottom: 20,
    },
    categoryWrapper: {
        width: "100%",
        alignItems: "center",
        gap: 12,
    },

    backButton: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },

    backText: {
        marginLeft: 4,
        color: PRIMARY,
        fontWeight: "700",
        fontSize: 14,
    },

    resetButton: {
        marginTop: 28,
        flexDirection: "row",
        alignItems: "center",
    },

    resetText: {
        color: "#EF4444",
        fontWeight: "700",
        fontSize: 14,
    },
});
