import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const PRIMARY = "#ff00c8ff";

const Pp = () => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#FDE2F3", "#EEF2FF"]}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* MAIN CARD */}
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

            <Text style={styles.title}>Privacy & Policy</Text>

            {/* spacer supaya title tetap center */}
            <View style={{ width: 36 }} />
          </View>

          <Text style={styles.date}>
            Last updated: November 02, 2024
          </Text>

          {/* CONTENT */}
          <Text style={styles.text}>
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
            {"\n\n"}
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of information
            in accordance with this Privacy Policy.
          </Text>

          <Text style={styles.section}>Interpretation and Definitions</Text>
          <Text style={styles.text}>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions.
          </Text>

          <Text style={styles.section}>Definitions</Text>
          <Text style={styles.text}>
            Account means a unique account created for You to access our Service.
            {"\n\n"}
            Affiliate means an entity that controls, is controlled by or is under
            common control with a party.
            {"\n\n"}
            Application refers to Englishgeh Grade Two with alias Englishgeh.
            {"\n\n"}
            Company refers to Englishgeh Grade Two.
            {"\n\n"}
            Country refers to: Indonesia.
            {"\n\n"}
            Device means any device that can access the Service such as a
            computer, cellphone, or tablet.
            {"\n\n"}
            Personal Data is any information that relates to an identifiable
            individual.
          </Text>

          <Text style={styles.section}>Use of Your Personal Data</Text>
          <Text style={styles.text}>
            The Company may use Personal Data for the following purposes:
            {"\n\n"}
            • To provide and maintain the Service{"\n"}
            • To manage Your Account{"\n"}
            • To contact You regarding updates{"\n"}
            • To improve our Service and user experience
          </Text>

          <Text style={styles.section}>Children’s Privacy</Text>
          <Text style={styles.text}>
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personal data from children.
          </Text>

          <Text style={styles.section}>Contact Us</Text>
          <Text style={styles.text}>
            If you have any questions about this Privacy Policy, you can contact
            us at:
          </Text>

          <Text style={styles.email}>iqvalef@gmail.com</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Pp;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },

  card: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 18,
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
    color: PRIMARY,
    textAlign: "center",
  },

  date: {
    marginBottom: 14,
    fontSize: 13,
    color: "#6B7280",
    textAlign: "center",
    fontWeight: "600",
  },

  /* CONTENT */
  section: {
    marginTop: 18,
    marginBottom: 6,
    fontSize: 18,
    fontWeight: "900",
    color: PRIMARY,
  },

  text: {
    fontSize: 15,
    lineHeight: 24,
    color: "#1F2937",
  },

  email: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "800",
    color: PRIMARY,
  },
});
