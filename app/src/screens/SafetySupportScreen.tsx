import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CloudBackground from '../components/CloudBackground';
import { colors, fonts } from '../theme/theme';

export default function SafetySupportScreen() {
  return (
    <CloudBackground>
      <SafeAreaView style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
        <View>
          <Text style={{ fontFamily: fonts.display, fontSize: 30, color: colors.deepBlue }}>Apoio imediato</Text>
          <Text style={{ fontFamily: fonts.body, fontSize: 16, color: '#38526F', marginTop: 8 }}>CVV: 188 (24h, gratuito). Perigo imediato: 190 (polícia) ou 192 (SAMU). O Selá não substitui atendimento profissional.</Text>
        </View>
      </SafeAreaView>
    </CloudBackground>
  );
}
