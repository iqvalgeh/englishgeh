import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const PRIMARY = "#ff00c8ff";

const faqData = [
  {
    question: "Is this application safe? / Apakah aplikasi ini aman?",
    answer: "Yes. It's very safe. / Sangat aman.",
  },
  {
    question:
      "Does this application need internet? / Apakah aplikasi ini butuh internet?",
    answer: "No. It doesn't. / Tidak.",
  },
  {
    question:
      "Does this application collect my data? / Apakah aplikasi ini mengambil dataku?",
    answer: "No. It doesn't. / Tidak.",
  },
  {
    question:
      "Is this application easy to use? / Apakah aplikasi ini mudah digunakan?",
    answer: "Yes. It is. / Ya.",
  },
  {
    question:
      "Does this application help me learn English/Indonesian? / Apakah aplikasi ini membantu dalam belajar bahasa Inggris/Bahasa Indonesia?",
    answer: "Yes, it is very helpful. / Ya, sangat membantu.",
  },
];

const Faq = () => {
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

          <Text style={styles.title}>FAQ</Text>

          {/* spacer supaya title tetap center */}
          <View style={{ width: 36 }} />
        </View>

        {/* LIST */}
        <FlatList
          data={faqData}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.faqCard}>
              <Text style={styles.question}>
                • {item.question}
              </Text>
              <Text style={styles.answer}>
                → {item.answer}
              </Text>
            </View>
          )}
        />
      </View>
    </LinearGradient>
  );
};

export default Faq;

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
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 6,
  },

  /* HEADER */
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
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

  /* FAQ ITEM */
  faqCard: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: "#FFE4F6",
    shadowColor: PRIMARY,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  question: {
    fontSize: 15,
    fontWeight: "800",
    color: "#1F2937",
    marginBottom: 6,
  },

  answer: {
    fontSize: 14,
    color: PRIMARY,
    marginLeft: 6,
    fontWeight: "600",
  },
});
