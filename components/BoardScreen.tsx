import React from 'react';
import { BackHandler, Image, Pressable, StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';

const handleExit = (): void => {
    BackHandler.exitApp();
};

const BoardScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            {/* Start Button */}
            <Link style={styles.startButton} replace href="/mainMenu">
                🚀 Start / Mulai 🚀
            </Link>

            {/* Background Image */}
            <Image source={require("../assets/images/f50ca0.png")} style={styles.image} />

            {/* Exit Button */}
            <Pressable style={styles.exitButton} onPress={handleExit}>
                <Text style={styles.exitText}>☠ Exit / Keluar ☠</Text>
            </Pressable>
        </View>
    );
};

export default BoardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f50ca0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    startButton: {
        position: 'absolute',
        top: '30%',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'yellow',
        textAlign: 'center',
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        zIndex: 1,
    },
    exitButton: {
        position: 'absolute',
        bottom: '20%',
    },
    exitText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'yellow',
        textAlign: 'center',
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
});
