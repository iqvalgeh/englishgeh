import { Stack } from 'expo-router';
import { Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Layout() {
  const router = useRouter();

  // Function to render the header right button
  const renderMenuButton = () => (
    <Button onPress={() => router.push('/colapsible')} title="Menu" color="black" />
  );

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: '#ffc7ff' },
        headerStyle: { backgroundColor: '#f50ca0' },
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitle: "Englishgeh For Grade 2 🖤",
      }}
    >
      {/* Main Screens */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="boardscreen" options={{ headerShown: false }} />

      {/* Main Menu with Custom Header Button */}
      <Stack.Screen
        name="mainMenu"
        options={{
          contentStyle: { backgroundColor: '#f50ca0' },
          headerBackVisible: false,
          headerRight: renderMenuButton,
        }}
      />

      {/* Other Screens */}
      <Stack.Screen name="colapsible" options={{ headerBackVisible: false }} />
      <Stack.Screen name="ad" />
      <Stack.Screen name="faq" />
      <Stack.Screen name="pp" />
      <Stack.Screen name="rf" />
      <Stack.Screen name="tc" />
      <Stack.Screen name="wordlist" />
      <Stack.Screen name="flash" />
      <Stack.Screen name="quiz" />
      <Stack.Screen name="koreaQuiz" />
    </Stack>
  );
}
