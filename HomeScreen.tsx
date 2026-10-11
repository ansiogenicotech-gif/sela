import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import CloudBackground from '../components/CloudBackground';
import CloudButton from '../components/CloudButton';
import { colors, fonts, radius, shadow } from '../theme/theme';

const SUGGESTIONS = [
  'Estou passando por um momento difícil.',
  'Estou preocupado com meu futuro.',
  'Preciso de esperança para continuar.',
  'Quero agradecer por algo bom.',
  'Estou enfrentando problemas familiares.',
  'Preciso encontrar paz antes de dormir.',
];

export default function HomeScreen() {
  const nav = useNavigation<any>();
  const [text, setText] = useState('');

  return (
    <CloudBackground>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
            <Text style={styles.logo} accessibilityRole="header">Selá</Text>
            <Text style={styles.slogan}>Uma pausa para ouvir a Palavra{'\n'}e cuidar do coração.</Text>

            <Text style={styles.title}>Como está o seu coração hoje?</Text>
            <Text style={styles.sub}>
              Escreva ou conte o que você está vivendo. Encontre uma reflexão bíblica para acompanhar seu momento.
            </Text>

            <View style={[styles.card, shadow]}>
              <TextInput
                value={text}
                onChangeText={setText}
                placeholder="Escreva aqui, no seu tempo…"
                placeholderTextColor="#6F88A1"
                multiline
                accessibilityLabel="Campo para escrever como você está"
                style={styles.input}
              />
              <Pressable accessibilityRole="button" accessibilityLabel="Falar por voz"
                onPress={() => nav.navigate('Conversation', { text, voice: true })} style={styles.mic}>
                <Text style={{ fontSize: 22 }}>🎙️</Text>
              </Pressable>
            </View>

            <CloudButton variant="primary" label="Encontrar uma reflexão" icon="☁️" style={{ marginTop: 18 }}
              onPress={() => nav.navigate('Conversation', { text })} />

            <View style={styles.row}>
              <CloudButton label="Versículo do dia" icon="🌅" style={{ flex: 1 }} onPress={() => nav.navigate('Conversation', { daily: true })} />
              <CloudButton label="Criar imagem" icon="🕊️" style={{ flex: 1 }} onPress={() => nav.navigate('ImageGenerator')} />
            </View>
            <View style={styles.row}>
              <CloudButton label="Minhas mensagens" icon="🤍" style={{ flex: 1 }} onPress={() => nav.navigate('Saved')} />
              <CloudButton label="Ajustes" icon="🌿" style={{ flex: 1 }} onPress={() => nav.navigate('Settings')} />
            </View>

            <Text style={styles.hint}>Para começar, toque em uma frase:</Text>
            <View style={styles.chips}>
              {SUGGESTIONS.map((s) => (
                <Pressable key={s} accessibilityRole="button" onPress={() => setText(s)} style={styles.chip}>
                  <Text style={styles.chipText}>{s}</Text>
                </Pressable>
              ))}
            </View>

            <Pressable onPress={() => nav.navigate('Safety')} accessibilityRole="link">
              <Text style={styles.safety}>Precisa de ajuda agora? CVV 188, apoio emocional 24h</Text>
            </Pressable>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </CloudBackground>
  );
}

const styles = StyleSheet.create({
  content: { padding: 24, paddingBottom: 48 },
  logo: { fontFamily: fonts.display, fontSize: 56, color: colors.deepBlue, textAlign: 'center', letterSpacing: 1 },
  slogan: { fontFamily: fonts.displayItalic, fontSize: 17, color: colors.deepBlue, textAlign: 'center', opacity: 0.85, marginTop: 2 },
  title: { fontFamily: fonts.display, fontSize: 32, lineHeight: 38, color: colors.deepBlue, marginTop: 36 },
  sub: { fontFamily: fonts.body, fontSize: 16, lineHeight: 24, color: '#38526F', marginTop: 8 },
  card: { marginTop: 20, backgroundColor: colors.mist, borderRadius: radius.card, padding: 16, borderWidth: 1, borderColor: 'rgba(255,255,255,0.9)' },
  input: { minHeight: 110, fontFamily: fonts.body, fontSize: 17, lineHeight: 25, color: colors.deepBlue, textAlignVertical: 'top', paddingRight: 48 },
  mic: { position: 'absolute', right: 12, bottom: 12, width: 44, height: 44, borderRadius: 22, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(201,162,75,0.5)' },
  row: { flexDirection: 'row', gap: 12, marginTop: 12 },
  hint: { fontFamily: fonts.body, fontSize: 14, color: '#38526F', marginTop: 28, marginBottom: 10 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { backgroundColor: 'rgba(255,255,255,0.8)', paddingVertical: 10, paddingHorizontal: 14, borderRadius: radius.pill },
  chipText: { fontFamily: fonts.body, fontSize: 14, color: colors.deepBlue },
  safety: { fontFamily: fonts.body, fontSize: 13, color: colors.deepBlue, textAlign: 'center', marginTop: 32, textDecorationLine: 'underline' },
});
