import { Stack } from 'expo-router';
import { Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import mobileAds from 'react-native-google-mobile-ads';
import { PermissionsAndroid, Platform } from 'react-native';

export default function Layout() {
  const router = useRouter();

  useEffect(() => {
    async function requestAdIdPermission() {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.AD_ID,
            {
              title: 'Ad ID Permission',
              message: 'This app requires permission to access your Ad ID for personalized ads.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Deny',
              buttonPositive: 'Allow',
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('AD_ID permission granted.');
          } else {
            console.log('AD_ID permission denied.');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    }

    requestAdIdPermission();

    // ✅ Correct way to configure AdMob settings
    mobileAds()
      .setRequestConfiguration({
        tagForChildDirectedTreatment: true, // Ensures COPPA compliance
        tagForUnderAgeOfConsent: true, // Ensures GDPR compliance for kids
      })
      .then(() => {
        console.log('AdMob request configuration set successfully');
      });

    // ✅ Initialize AdMob SDK
    mobileAds()
      .initialize()
      .then(adapterStatuses => {
        console.log('AdMob initialized:', adapterStatuses);
      })
      .catch(error => {
        console.error('AdMob initialization failed:', error);
      });
  }, []);

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
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="boardscreen" options={{ headerShown: false }} />
      <Stack.Screen
        name="mainMenu"
        options={{
          contentStyle: { backgroundColor: '#f50ca0' },
          headerBackVisible: false,
          headerRight: renderMenuButton,
        }}
      />
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
