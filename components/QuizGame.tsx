import { Animated, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import { oxDay1, oxDay2, oxDay3, oxDay4, oxDay5, oxDay6, oxDay7, oxDay8, oxDay9, oxDay10 } from '@/utils/okquiz';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import Ads from './Ads';




const quizDataMap: Record<string, any> = {
    c1: oxDay1,
    c2: oxDay2,
    c3: oxDay3,
    c4: oxDay4,
    c5: oxDay5,
    c6: oxDay6,
    c7: oxDay7,
    c8: oxDay8,
    c9: oxDay9,
    c10: oxDay10,
};

interface QuizGameProps {
    id: string;
}

const QuizGame: React.FC<QuizGameProps> = ({ id }) => {
    const router = useRouter();
    const data = useMemo(() => quizDataMap[id] || [], [id]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [isScoreVisible, setIsScoreVisible] = useState(false);

    const progress = useMemo(() => new Animated.Value(0), []);
    const progressAnim = progress.interpolate({
        inputRange: [0, data.length],
        outputRange: ['0%', '100%'],
    });

    useEffect(() => {
        Animated.timing(progress, {
            toValue: currentQuestionIndex,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [currentQuestionIndex, progress]); // Added `progress`

    const handleNext = () => {
        if (currentQuestionIndex < data.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedOption(null);
        } else {
            setIsScoreVisible(true);
        }
    };

    const handleAnswerSelection = (option: string) => {
        const correctAnswer = data[currentQuestionIndex]?.Correct_Answer_Ind_Mean;
        setSelectedOption(option);
        if (option === correctAnswer) setScore((prev) => prev + 1);
    };

    const retryQuiz = () => {
        setIsScoreVisible(false);
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setScore(0);
        Animated.timing(progress, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    const exitQuiz = () => {
        setIsScoreVisible(false);
        router.push({ pathname: "..", params: { id } });
    };

    return (
        <View style={styles.container}>
            <Ads />

            {/* Progress Bar */}
            <View style={styles.progressContainer}>
                <Animated.View style={[styles.progressBar, { width: progressAnim }]} />
            </View>

            {/* Question Section */}
            <View style={styles.questionSection}>
                <Pressable onPress={() => router.push({ pathname: "/koreaQuiz", params: { id } })}>
                    <Text style={styles.switchQuizText}>Switch to Indonesian Quiz</Text>
                </Pressable>
                <Text style={styles.questionCounter}>{currentQuestionIndex + 1} / {data.length}</Text>
                <Text style={styles.questionText}>{data[currentQuestionIndex]?.English_Word}</Text>
            </View>

            {/* Options */}
            <View>
                {data[currentQuestionIndex]?.Options_Ind_Mean.map((option: string, index: number) => (
                    <Pressable
                        key={index}
                        style={[
                            styles.option,
                            selectedOption === option && styles.selectedOption
                        ]}
                        onPress={() => handleAnswerSelection(option)}
                    >
                        <Text style={styles.optionText}>{option}</Text>
                        {selectedOption === option && (
                            <AntDesign name="checkcircle" size={24} color="blue" />
                        )}
                    </Pressable>
                ))}

            </View>

            {/* Next Button */}
            {selectedOption && (
                <Pressable onPress={handleNext} style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </Pressable>
            )}

            {/* Score Modal */}
            <Modal animationType="slide" transparent visible={isScoreVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCard}>
                        <Text style={styles.modalText}>
                            {score > data.length / 2 ? 'Congrats! Go to the next stage' : 'Try again'}
                        </Text>
                        <Text style={styles.scoreText}>{score} / {data.length}</Text>
                        <Pressable style={styles.modalButton} onPress={retryQuiz}>
                            <Text style={styles.modalButtonText}>Retry</Text>
                        </Pressable>
                        <Pressable style={styles.modalButton} onPress={exitQuiz}>
                            <Text style={styles.modalButtonText}>Exit</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default QuizGame;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    progressContainer: {
        height: 20,
        borderRadius: 10,
        backgroundColor: '#ccc',
        overflow: 'hidden',
        marginBottom: 10,
    },
    progressBar: {
        height: 20,
        backgroundColor: 'blue',
    },
    questionSection: {
        marginVertical: 10,
        alignItems: 'center',
    },
    switchQuizText: {
        color: 'blue',
        fontSize: 14,
        alignSelf: 'flex-end',
    },
    questionCounter: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    questionText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        marginVertical: 5,
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 10,
    },
    selectedOption: {
        borderColor: 'blue',
        backgroundColor: '#E0F7FA',
    },
    optionText: {
        fontSize: 18,
    },
    nextButton: {
        backgroundColor: 'black',
        padding: 15,
        marginTop: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    nextButtonText: {
        fontSize: 18,
        color: 'white',
    },
    modalContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
    modalCard: { backgroundColor: 'white', width: '80%', borderRadius: 10, padding: 20, alignItems: 'center' },
    modalText: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    scoreText: { fontSize: 20, opacity: 0.7, marginBottom: 10 },
    modalButton: { padding: 10, backgroundColor: 'blue', borderRadius: 5, marginVertical: 5, width: '80%', alignItems: 'center' },
    modalButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});
