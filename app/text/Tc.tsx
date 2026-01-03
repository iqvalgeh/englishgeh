import React from "react";
import {
  ScrollView,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Tc = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
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
                color="#ff00c8ff"
              />
            </Pressable>

            <Text style={styles.title}>Terms & Conditions</Text>
            <View style={{ width: 36 }} />
          </View>

          <Text style={styles.date}>
            Last updated: November 17, 2024
          </Text>

          {/* CONTENT */}
          <Text style={styles.text}>
            Please read these terms and conditions carefully before using Our Service.{"\n\n"}
            Interpretation and Definitions{"\n\n"}
            Interpretation{"\n\n"}
            The words of which the initial letter is capitalized have meanings defined under the following conditions.{"\n\n"}
            Contact Us{"\n\n"}
            If you have any questions about these Terms and Conditions, You can contact us:{"\n"}
            • By email: iqvalef@gmail.com{"\n\n"}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tc;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F6F8FF",
  },

  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 30,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
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
    fontSize: 22,
    fontWeight: "900",
    color: "#ff00c8ff",
    textAlign: "center",
  },

  date: {
    marginBottom: 16,
    fontSize: 13,
    color: "#6B7280",
    textAlign: "center",
    fontWeight: "600",
  },

  text: {
    fontSize: 15,
    lineHeight: 24,
    color: "#1F2937",
  },
});
