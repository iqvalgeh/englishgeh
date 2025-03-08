import { Animated, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'expo-router';
import {
    oxDay1, oxDay2, oxDay3, oxDay4, oxDay5,
    oxDay6, oxDay7, oxDay8, oxDay9, oxDay10
} from '@/utils/okquiz';
import Ads from './Ads';


const quizDataMap = {
    c1: oxDay1, c2: oxDay2, c3: oxDay3, c4: oxDay4, c5: oxDay5,
    c6: oxDay6, c7: oxDay7, c8: oxDay8, c9: oxDay9, c10: oxDay10
};

type QuizGameProps = {
    id: keyof typeof quizDataMap;
};

const QuizGame: React.FC<QuizGameProps> = ({ id }) => {
    const data = quizDataMap[id] || [];
    const router = useRouter();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isOptionDisabled, setIsOptionDisabled] = useState(false);
    const [score, setScore] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showScoreModal, setShowScoreModal] = useState(false);
    const [timer, setTimer] = useState(15);

    const progress = useRef(new Animated.Value(0)).current;
    const progressAnim = progress.interpolate({
        inputRange: [0, data.length],
        outputRange: ['0%', '100%'],
    });

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            handleNext();
        }
    }, [timer]);

    useEffect(() => {
        setTimer(15);
    }, [currentQuestionIndex]);

    const handleNext = () => {
        if (currentQuestionIndex < data.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsOptionDisabled(false);
            setShowNextButton(false);
            setTimer(15);
        } else {
            setShowScoreModal(true);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex + 1,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    const validateAnswer = (option: string) => {
        const correctAnswer = data[currentQuestionIndex]?.Correct_Answer;
        setSelectedOption(option);
        setIsOptionDisabled(true);
        if (option === correctAnswer) {
            setScore(prev => prev + 1);
        }
        setShowNextButton(true);
    };

    const retryQuiz = () => {
        setShowScoreModal(false);
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setIsOptionDisabled(false);
        setShowNextButton(false);
        setScore(0);
        setTimer(15);
        Animated.timing(progress, { toValue: 0, duration: 500, useNativeDriver: false }).start();
    };

    const exitQuiz = () => {
        setShowScoreModal(false);
        router.push(`/wordlist?id=${id}`);
    };

    return (

        <View style={styles.container}>
            <Ads />

            <View style={styles.progressContainer}>
                <Animated.View style={[styles.progressBar, { width: progressAnim }]} />
            </View>

            <View style={styles.questionSection}>
                <Text style={styles.questionText}>{data[currentQuestionIndex]?.Ind_Mean}</Text>
                <Text style={styles.questionCounter}>{currentQuestionIndex + 1} / {data.length}</Text>
                <Text style={styles.timerText}>Time Left: {timer}s</Text>
            </View>

            <View>
                {data[currentQuestionIndex]?.Options.map((option: string, index: number) => (
                    <Pressable
                        key={index}
                        style={[styles.optionContainer, selectedOption === option && option === data[currentQuestionIndex]?.Correct_Answer ? styles.correctOption : selectedOption === option ? styles.wrongOption : {}]}
                        onPress={() => validateAnswer(option)}
                        disabled={isOptionDisabled}
                    >
                        <Text style={styles.optionText}>{option}</Text>
                    </Pressable>
                ))}

            </View>

            {showNextButton && (
                <Pressable onPress={handleNext} style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </Pressable>
            )}

            <Modal animationType="slide" transparent visible={showScoreModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCard}>
                        <Text style={styles.modalText}>{score > data.length / 2 ? 'Congrats! Go to next stage' : 'Try again'}</Text>
                        <Text style={styles.scoreText}>{score} / {data.length}</Text>
                        <Pressable onPress={retryQuiz} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>Retry</Text>
                        </Pressable>
                        <Pressable onPress={exitQuiz} style={styles.modalButton}>
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
    container: { flex: 1, padding: 10 },
    progressContainer: { height: 10, backgroundColor: '#ccc', borderRadius: 5, overflow: 'hidden' },
    progressBar: { height: 10, backgroundColor: 'blue' },
    questionSection: { alignItems: 'center', marginVertical: 10 },
    questionText: { fontSize: 20, fontWeight: 'bold' },
    questionCounter: { fontSize: 16, marginTop: 5 },
    timerText: { fontSize: 16, color: 'red', marginTop: 5 },
    optionContainer: { padding: 15, borderWidth: 2, borderRadius: 10, marginVertical: 5 },
    correctOption: { backgroundColor: 'lightgreen' },
    wrongOption: { backgroundColor: 'salmon' },
    optionText: { fontSize: 18 },
    nextButton: { backgroundColor: 'black', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 20 },
    nextButtonText: { fontSize: 18, color: 'white' },
    modalContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
    modalCard: { backgroundColor: 'white', width: '80%', borderRadius: 10, padding: 20, alignItems: 'center' },
    modalText: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    scoreText: { fontSize: 20, opacity: 0.7, marginBottom: 10 },
    modalButton: { padding: 10, backgroundColor: 'blue', borderRadius: 5, marginVertical: 5, width: '80%', alignItems: 'center' },
    modalButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});