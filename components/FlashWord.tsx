import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import * as Speech from 'expo-speech';
import {
    Day1Word, Day2Word, Day3Word, Day4Word, Day5Word,
    Day6Word, Day7Word, Day8Word, Day9Word, Day10Word
} from '@/utils';

// Mapping IDs to word data
const wordDataMap: Record<string, any> = {
    c1: Day1Word, c2: Day2Word, c3: Day3Word, c4: Day4Word, c5: Day5Word,
    c6: Day6Word, c7: Day7Word, c8: Day8Word, c9: Day9Word, c10: Day10Word
};

const FlashWord = ({ id }: { id: string; }) => {
    const data = wordDataMap[id] || [];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [speed, setSpeed] = useState(9000);
    const [stopEffect, setStopEffect] = useState(false);

    // Ensure there's valid data
    const isDataAvailable = data.length > 0;
    const currentWord = isDataAvailable ? data[currentWordIndex]?.English_Sentence : "No words available";
    const currentWordMeaning = isDataAvailable ? data[currentWordIndex]?.English_Sentence_Mean : "";

    // Speech functions (memoized)
    const speakText = useCallback((text: string, lang: string) => {
        Speech.speak(text, { language: lang });
    }, []);

    useEffect(() => {
        if (stopEffect || !isDataAvailable) return;

        const interval = setInterval(() => {
            const nextIndex = (currentWordIndex + 1) % data.length;
            speakText(data[nextIndex].English_Sentence, 'en-US');
            speakText(data[nextIndex].English_Sentence_Mean, 'id-ID');

            setCurrentWordIndex(nextIndex);
        }, speed);

        return () => clearInterval(interval);
    }, [stopEffect, currentWordIndex, speed, isDataAvailable, speakText]);

    return (
        <View style={styles.container}>
            {/* Word Counter */}
            <View style={styles.upperContainer}>
                <Text>{currentWordIndex + 1} / {data.length}</Text>
                <Text> Don't forget to choose the speed mode </Text>
            </View>

            {/* Speed Display */}
            <View style={styles.textContainer}>
                <Text style={styles.speedText}>Speed: {speed === 7000 ? 'Middle' : speed === 9000 ? 'Slow' : 'Fast'}</Text>
            </View>

            {/* Speed Options */}
            <View style={styles.speedOptions}>
                <Pressable onPress={() => setSpeed(9000)}><Text style={styles.speedText}>Slow</Text></Pressable>
                <Pressable onPress={() => setSpeed(7000)}><Text style={styles.speedText}>Middle</Text></Pressable>
                <Pressable onPress={() => setSpeed(5000)}><Text style={styles.speedText}>Fast</Text></Pressable>
            </View>

            {/* Word Display */}
            <View style={styles.flashContainer}>
                <Text style={styles.words}>{currentWord}</Text>
                <Text style={styles.wordsMean}>{currentWordMeaning}</Text>
                <Pressable onPress={() => setStopEffect(!stopEffect)}>
                    <Text style={styles.wordButton}>{stopEffect ? "Start" : "Stop"}</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default FlashWord;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
    },
    upperContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 10,
    },
    textContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#f50ca0',
        height: 40,
        width: '50%',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,
    },
    speedOptions: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 5,
        backgroundColor: '#f50ca0',
        height: 40,
        alignItems: 'center',
        marginTop: 20,
    },
    speedText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    flashContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    words: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    wordsMean: {
        fontSize: 20,
        marginBottom: 20,
    },
    wordButton: {
        borderWidth: 1,
        borderColor: '#fff',
        padding: 5,
        borderRadius: 7,
        backgroundColor: '#f50ca0',
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
    },
});
