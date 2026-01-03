import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const PRIMARY = "#ff00c8ff";

export default function Baru() {
    const router = useRouter();

    return (
        <LinearGradient
            colors={["#FDE2F3", "#EEF2FF"]}
            style={styles.container}
        >
            <View style={styles.card}>
                {/* HEADER */}
                <View style={styles.headerRow}>
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

                    <Text style={styles.title}>📘 Informasi</Text>

                    <View style={{ width: 36 }} />
                </View>

                <Text style={styles.subtitle}>
                    Tentang Englishgeh
                </Text>

                {/* MENU */}
                <MenuButton
                    icon="person-circle-outline"
                    label="About Developer"
                    onPress={() => router.push("/text/Ad")}
                />

                <MenuButton
                    icon="help-circle-outline"
                    label="Frequently Asked Question"
                    onPress={() => router.push("/text/Faq")}
                />

                <MenuButton
                    icon="lock-closed-outline"
                    label="Privacy & Policy"
                    onPress={() => router.push("/text/Pp")}
                />

                <MenuButton
                    icon="star-outline"
                    label="Rating & Feedback"
                    onPress={() => router.push("/text/Rf")}
                />

                <MenuButton
                    icon="document-text-outline"
                    label="Term & Condition"
                    onPress={() => router.push("/text/Tc")}
                />
            </View>
        </LinearGradient>
    );
}

/* 🔹 REUSABLE MENU BUTTON */
function MenuButton({
    icon,
    label,
    onPress,
}: {
    icon: any;
    label: string;
    onPress: () => void;
}) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.menuCard,
                {
                    opacity: pressed ? 0.9 : 1,
                    transform: [{ scale: pressed ? 0.97 : 1 }],
                },
            ]}
        >
            <Ionicons
                name={icon}
                size={22}
                color={PRIMARY}
            />

            <Text style={styles.menuText}>{label}</Text>

            <Ionicons
                name="chevron-forward-outline"
                size={18}
                color="#9CA3AF"
            />
        </Pressable>
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
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 6,
    },

    /* HEADER */
    headerRow: {
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
        fontSize: 26,
        fontWeight: "900",
        color: PRIMARY,
        textAlign: "center",
    },

    subtitle: {
        marginTop: 6,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 14,
        fontWeight: "600",
        color: "#6B7280",
    },

    /* MENU CARD */
    menuCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 18,
        marginBottom: 14,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 3,
    },

    menuText: {
        flex: 1,
        marginLeft: 12,
        fontSize: 15,
        fontWeight: "800",
        color: "#1F2937",
    },
});
