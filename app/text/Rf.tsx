import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const PRIMARY = "#ff00c8ff";

const Rf = () => {
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
            onPress={() => router.replace("/")}
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

          <Text style={styles.title}>Rating & Feedback</Text>

          {/* spacer biar title tetap center */}
          <View style={{ width: 36 }} />
        </View>

        {/* CONTENT */}
        <Text style={styles.text}>
          Giving Rating and Feedback 👋
        </Text>

        <Text style={styles.subText}>
          Your feedback is very valuable!
        </Text>

        <Text style={styles.text}>
          Send your feedback to:
        </Text>

        <Text style={styles.email}>
          iqvalef@gmail.com 📝
        </Text>

        <Text style={styles.reminder}>
          Don’t forget to give a 5-star rating on Google Play!
        </Text>

        <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
      </View>
    </LinearGradient>
  );
};

export default Rf;

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
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 6,
  },

  /* HEADER */
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 16,
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
    fontSize: 22,
    fontWeight: "900",
    color: PRIMARY,
    textAlign: "center",
  },

  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    textAlign: "center",
    marginTop: 6,
  },

  subText: {
    fontSize: 15,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 14,
  },

  email: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "800",
    color: PRIMARY,
  },

  reminder: {
    marginTop: 16,
    fontSize: 14,
    color: "#374151",
    textAlign: "center",
  },

  stars: {
    marginTop: 12,
    fontSize: 26,
    color: "#FFD700",
  },
});
