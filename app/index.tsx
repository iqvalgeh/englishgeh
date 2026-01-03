import {
    View,
    Text,
    Pressable,
    StyleSheet,
    Alert,
    BackHandler,
    Platform,
    Animated,
    Easing,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
    const router = useRouter();

    /* FLOAT ICON */
    const floatAnim = useRef(new Animated.Value(0)).current;

    /* MICRO ANIMATION BUTTON */
    const pressAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(floatAnim, {
                    toValue: -8,
                    duration: 1200,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(floatAnim, {
                    toValue: 0,
                    duration: 1200,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    const pressIn = () => {
        Animated.spring(pressAnim, {
            toValue: 0.94,
            useNativeDriver: true,
        }).start();
    };

    const pressOut = () => {
        Animated.spring(pressAnim, {
            toValue: 1,
            friction: 4,
            useNativeDriver: true,
        }).start();
    };

    const confirmExit = () => {
        Alert.alert(
            "Keluar Aplikasi",
            "Apakah kamu yakin ingin keluar dari aplikasi?",
            [
                { text: "Batal", style: "cancel" },
                {
                    text: "Keluar",
                    style: "destructive",
                    onPress: () => {
                        if (Platform.OS === "android") {
                            BackHandler.exitApp();
                        }
                    },
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
                {/* ICON */}
                <Animated.View
                    style={{ transform: [{ translateY: floatAnim }] }}
                >
                    <Ionicons
                        name="school"
                        size={88}
                        color="#ff00c8ff"
                        style={{ marginBottom: 12 }}
                    />
                </Animated.View>

                <Text style={styles.title}>English Geh</Text>
                <Text style={styles.subtitle}>
                    Tips: suara kadang delay, ditunggu aja ya 👍
                </Text>

                {/* PRIMARY BUTTON */}
                <Animated.View
                    style={{ transform: [{ scale: pressAnim }] }}
                >
                    <Pressable
                        onPressIn={pressIn}
                        onPressOut={pressOut}
                        onPress={() => router.push("/level-select")}
                    >
                        <LinearGradient
                            colors={["#ff00c8ff", "#ff5fd2"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.primaryButton}
                        >
                            <Ionicons name="play" size={22} color="#fff" />
                            <Text style={styles.primaryText}>
                                Mulai Belajar
                            </Text>
                        </LinearGradient>
                    </Pressable>
                </Animated.View>

                {/* SECONDARY */}
                <Pressable
                    onPress={() => router.push("/alphabet")}
                    style={styles.secondaryButton}
                >
                    <Ionicons
                        name="text"
                        size={18}
                        color="#ff00c8ff"
                        style={{ marginRight: 8 }}
                    />
                    <Text style={styles.secondaryText}>
                        Belajar Alfabet
                    </Text>
                </Pressable>

                <Pressable
                    onPress={() => router.push("/baru")}
                    style={styles.secondaryButton}
                >
                    <Ionicons
                        name="sparkles"
                        size={18}
                        color="#ff00c8ff"
                        style={{ marginRight: 8 }}
                    />
                    <Text style={styles.secondaryText}>
                        Get in Touch
                    </Text>
                </Pressable>

                <Text style={styles.footerText}>
                    Belajar spelling jadi seru 🎈
                </Text>
            </View>

            {/* EXIT */}
            <Pressable onPress={confirmExit} style={styles.exitButton}>
                <Ionicons name="exit-outline" size={16} color="#EF4444" />
                <Text style={styles.exitText}>Keluar App</Text>
            </Pressable>
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
        paddingVertical: 32,
        paddingHorizontal: 24,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 6,
    },

    title: {
        fontSize: 30,
        fontWeight: "900",
        color: "#1F2937",
        marginBottom: 6,
    },

    subtitle: {
        fontSize: 14,
        color: "#6B7280",
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "600",
    },

    primaryButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        paddingVertical: 16,
        paddingHorizontal: 44,
        borderRadius: 18,
        marginBottom: 16,
        elevation: 5,
    },

    primaryText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "800",
    },

    secondaryButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 14,
        width: "100%",
        borderRadius: 14,
        borderWidth: 2,
        borderColor: "#ff00c8ff",
        marginBottom: 12,
    },

    secondaryText: {
        color: "#ff00c8ff",
        fontWeight: "800",
        fontSize: 15,
    },

    footerText: {
        marginTop: 10,
        fontSize: 13,
        color: "#6B7280",
        fontWeight: "600",
    },

    exitButton: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 24,
        gap: 6,
    },

    exitText: {
        color: "#EF4444",
        fontWeight: "700",
        fontSize: 14,
    },
});
