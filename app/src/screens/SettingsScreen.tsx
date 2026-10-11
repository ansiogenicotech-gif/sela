import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CloudBackground from '../components/CloudBackground';
import { colors, fonts } from '../theme/theme';

export default function SettingsScreen() {
  return (
    <CloudBackground>
      <SafeAreaView style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
        <View>
          <Text style={{ fontFamily: fonts.display, fontSize: 30, color: colors.deepBlue }}>Privacidade e acessibilidade</Text>
          <Text style={{ fontFamily: fonts.body, fontSize: 16, color: '#38526F', marginTop: 8 }}>Em construção (Fase 6): consentimento, apagar dados, tamanho de fonte e contraste.</Text>
        </View>
      </SafeAreaView>
    </CloudBackground>
  );
}
