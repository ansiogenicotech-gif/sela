import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, fonts, radius, shadow } from '../theme/theme';

type Props = { label: string; onPress: () => void; variant?: 'primary' | 'soft'; icon?: string; style?: ViewStyle };

export default function CloudButton({ label, onPress, variant = 'soft', icon, style }: Props) {
  const primary = variant === 'primary';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [styles.wrap, shadow, { transform: [{ scale: pressed ? 0.97 : 1 }] }, style]}
    >
      <LinearGradient colors={primary ? [colors.deepBlue, '#35618F'] : ['#FFFFFF', '#F1F7FC']} style={styles.inner}>
        {icon ? <Text style={styles.icon}>{icon}</Text> : null}
        <Text style={[styles.label, { color: primary ? '#FFFFFF' : colors.deepBlue }]}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  wrap: { borderRadius: radius.pill },
  inner: { minHeight: 52, paddingHorizontal: 18, borderRadius: radius.pill, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, borderWidth: 1, borderColor: 'rgba(201,162,75,0.35)' },
  icon: { fontSize: 18 },
  label: { fontFamily: fonts.bodyBold, fontSize: 15 },
});
