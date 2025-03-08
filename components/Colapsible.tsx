import { useRouter } from 'expo-router';
import React from 'react';
import { BackHandler, Pressable, StyleSheet, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

interface NavButtonProps {
    label: string;
    path: string; // Explicitly keeping it as string
    icon?: keyof typeof AntDesign.glyphMap;
}

const navItems: NavButtonProps[] = [
    { label: 'First Page 📓', path: '/boardscreen' },
    { label: 'Start Learning 📖', path: '/mainMenu' },
    { label: 'Giving Feedback 📱', path: '/rf' },
    { label: 'Get in Touch 😎', path: '/ad' },
    { label: 'Terms & Conditions 💎', path: '/tc' },
    { label: 'Privacy Policy 📌', path: '/pp' },
    { label: 'Frequently Asked Questions 🛩', path: '/faq' },
];

const NavButton: React.FC<NavButtonProps> = ({ label, path, icon = 'checkcircle' }) => {
    const router = useRouter();
    return (
        <Pressable
            style={({ pressed }) => [styles.gameButton, pressed && styles.pressed]}
            onPress={() => router.push(path as any)} // 👈 Explicit cast to avoid type error
        >
            <View style={styles.iconContainer}>
                <AntDesign name={icon} size={24} color="blue" />
            </View>
            <Text style={styles.text}>{label}</Text>
        </Pressable>
    );
};

const Colapsible: React.FC = () => {
    return (
        <View style={styles.container}>
            {navItems.map((item, index) => (
                <NavButton key={index} label={item.label} path={item.path} />
            ))}

            <Pressable
                style={({ pressed }) => [styles.gameButton, pressed && styles.pressed]}
                onPress={() => BackHandler.exitApp()}
            >
                <View style={styles.iconContainer}>
                    <Entypo name="circle-with-cross" size={24} color="red" />
                </View>
                <Text style={styles.text}>Exit Application ☠</Text>
            </Pressable>
        </View>
    );
};

export default Colapsible;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
    },
    gameButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 15,
    },
    pressed: {
        opacity: 0.7,
    },
    iconContainer: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    text: {
        fontSize: 18,
    },
});
