import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const PRIMARY = "#ff00c8ff";

const Ad = () => {
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

          <Text style={styles.title}>About</Text>

          {/* spacer agar title tetap center */}
          <View style={{ width: 36 }} />
        </View>

        {/* CONTENT */}
        <Text style={styles.heading}>About This Application</Text>
        <Text style={styles.text}>
          This application is built for learning English and Indonesian
          in the easiest way, suitable for elementary children up to adults.
        </Text>

        <Text style={styles.heading}>About The Developer</Text>
        <Text style={styles.text}>Get in touch with me at</Text>

        <Text style={styles.email}>iqvalef@gmail.com</Text>
      </View>
    </LinearGradient>
  );
};

export default Ad;

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
    marginBottom: 18,
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

  heading: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1F2937",
    marginTop: 14,
    marginBottom: 6,
    textAlign: "center",
  },

  text: {
    fontSize: 15,
    color: "#374151",
    textAlign: "center",
    lineHeight: 22,
  },

  email: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: "800",
    color: PRIMARY,
  },
});
