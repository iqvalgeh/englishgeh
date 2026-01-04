import { ScrollView, Text, View, Pressable, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import IconWordCard from "../../../components/IconWordCard";
import { nouns } from "../../../data/nouns";
import { verbs } from "../../../data/verbs";
import { adjectives } from "../../../data/adjectives";
import type { WordItem } from "../../../data/types";

type Category = "noun" | "verb" | "adjective";

const PRIMARY = "#ff00c8ff";

export default function Learn() {
  const { category, level } = useLocalSearchParams<{
    category: Category;
    level: string;
  }>();

  const router = useRouter();
  const index = Number(level) - 1;

  const dataMap: Record<Category, WordItem[][]> = {
    noun: nouns,
    verb: verbs,
    adjective: adjectives,
  };

  const words: WordItem[] | undefined = dataMap[category]?.[index];

  if (!words) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFound}>Data tidak ditemukan</Text>
      </View>
    );
  }

  return (
    <LinearGradient colors={["#FDE2F3", "#EEF2FF"]} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          {/* HEADER */}
          <View style={styles.headerRow}>
            <Pressable
              onPress={() => router.back()}
              style={({ pressed }) => [
                styles.backCircle,
                { opacity: pressed ? 0.6 : 1 },
              ]}
            >
              <Ionicons name="chevron-back" size={20} color={PRIMARY} />
            </Pressable>

            <Text style={styles.title}>
              {category.toUpperCase()} • Level {level}
            </Text>

            <View style={{ width: 36 }} />
          </View>

          {/* ACTION */}
          <View style={styles.actionRow}>
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/game/[category]/[level]",
                  params: { category, level },
                })
              }
              style={({ pressed }) => [
                styles.playButton,
                { opacity: pressed ? 0.85 : 1 },
              ]}
            >
              <Ionicons name="play" size={16} color="#fff" />
              <Text style={styles.playText}>Mulai Soal</Text>
            </Pressable>
          </View>

          {/* GRID */}
          <View style={styles.grid}>
            {words.map((w) => (
              <IconWordCard
                key={w.word}
                word={w.word}
                icon={w.icon}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F8FF",
  },

  notFound: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
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
    marginBottom: 12,
  },

  backCircle: {
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
    fontSize: 22,
    fontWeight: "900",
    color: PRIMARY,
  },

  /* ACTION */
  actionRow: {
    alignItems: "center",
    marginBottom: 18,
  },

  playButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 12,
    paddingHorizontal: 22,
    backgroundColor: PRIMARY,
    borderRadius: 16,
    shadowColor: PRIMARY,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },

  playText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 14,
  },

  /* GRID */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: "#FFE4F6",
  },
});
