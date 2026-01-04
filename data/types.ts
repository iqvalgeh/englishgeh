import { Ionicons } from "@expo/vector-icons";

export type WordItem = {
  word: string;
  icon?: keyof typeof Ionicons.glyphMap;
};
