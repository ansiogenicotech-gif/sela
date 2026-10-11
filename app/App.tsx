import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, CormorantGaramond_600SemiBold, CormorantGaramond_500Medium_Italic } from '@expo-google-fonts/cormorant-garamond';
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import Navigation from './src/navigation';

export default function App() {
  const [loaded] = useFonts({ CormorantGaramond_600SemiBold, CormorantGaramond_500Medium_Italic, Nunito_400Regular, Nunito_700Bold });
  if (!loaded) return <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#EAF3FA' }}><ActivityIndicator color="#1F3A5F" /></View>;
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Navigation />
    </SafeAreaProvider>
  );
}
