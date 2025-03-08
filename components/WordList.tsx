import { Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import * as Speech from "expo-speech";
import { useRouter, useLocalSearchParams } from "expo-router";
import {
    Day1Word, Day2Word, Day3Word, Day4Word, Day5Word,
    Day6Word, Day7Word, Day8Word, Day9Word, Day10Word
} from "@/utils";

// Map for word data
const wordDataMap: Record<string, any[]> = {
    c1: Day1Word, c2: Day2Word, c3: Day3Word, c4: Day4Word, c5: Day5Word,
    c6: Day6Word, c7: Day7Word, c8: Day8Word, c9: Day9Word, c10: Day10Word
};

const WordList = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    const courseId = typeof id === "string" ? id : "c1"; // Default to "c1" if `id` is missing
    const data = wordDataMap[courseId] || [];

    // Function to speak text
    const speak = (text: string, language: "en-US" | "id-ID") => {
        Speech.speak(text, { language });
    };

    return (
        <View style={styles.container}>
            {/* Navigation Buttons */}
            <View style={styles.gameContainer}>
                <Pressable style={styles.gameButton} onPress={() => router.push(`/flash?id=${courseId}`)}>
                    <Text style={styles.gameText}>Flashcard</Text>
                </Pressable>
                <Pressable style={styles.gameButton} onPress={() => router.push(`/quiz?id=${courseId}`)}>
                    <Text style={styles.gameText}>Quiz Game</Text>

                </Pressable>

            </View>

            {/* Word List */}
            <FlatList
                data={data}
                keyExtractor={(item, index) => `${courseId}-${index}`}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <Text style={styles.wordContainer} onPress={() => speak(item.Word, "en-US")}>
                            {item.Word}
                        </Text>
                        <Text style={styles.wordContainer} onPress={() => speak(item.Word_Meaning, "id-ID")}>
                            {item.Word_Meaning}
                        </Text>
                        <Text style={styles.wordContainer} onPress={() => speak(item.English_Sentence, "en-US")}>
                            {item.English_Sentence}
                        </Text>
                        <Text style={styles.wordContainer} onPress={() => speak(item.English_Sentence_Mean, "id-ID")}>
                            {item.English_Sentence_Mean}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

export default WordList;

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 50,
    },
    gameContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 20,
    },
    gameButton: {
        backgroundColor: "#f50ca0",
        borderRadius: 7,
        borderColor: "#f50ca0",
        elevation: 3,
        height: 50,
        borderWidth: 2,
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    gameText: {
        textAlign: "center",
        fontSize: 18,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "black",
        padding: 3,
    },
    cardContainer: {
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        marginVertical: 10,
        alignItems: "center",
    },
    wordContainer: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 5,
        textAlign: "center",
    },
});
