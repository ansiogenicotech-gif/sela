import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme/theme';

type CloudProps = { top: number; size: number; opacity: number; duration: number; delay?: number; width: number };

// Nuvem de círculos sobrepostos que desliza devagar: o único movimento da tela, calmo e contínuo.
function Cloud({ top, size, opacity, duration, delay = 0, width }: CloudProps) {
  const x = useRef(new Animated.Value(-size * 2)).current;
  useEffect(() => {
    x.setValue(-size * 2);
    const loop = Animated.loop(
      Animated.timing(x, { toValue: width + size, duration, delay, easing: Easing.linear, useNativeDriver: true })
    );
    loop.start();
    return () => loop.stop();
  }, [x, width, size, duration, delay]);
  const puff = (w: number, l: number, t: number) => (
    <View style={{ position: 'absolute', width: w, height: w, borderRadius: w / 2, left: l, top: t, backgroundColor: colors.cloud }} />
  );
  return (
    <Animated.View pointerEvents="none" style={{ position: 'absolute', top, opacity, transform: [{ translateX: x }], width: size * 2, height: size }}>
      {puff(size * 0.7, 0, size * 0.3)}
      {puff(size, size * 0.4, 0)}
      {puff(size * 0.8, size * 1.1, size * 0.2)}
      {puff(size * 0.6, size * 1.5, size * 0.4)}
    </Animated.View>
  );
}

export default function CloudBackground({ children }: { children: React.ReactNode }) {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.root}>
      <LinearGradient colors={[colors.skyTop, colors.skyMid, colors.skyBottom]} style={StyleSheet.absoluteFill} />
      <Cloud top={70} size={90} opacity={0.55} duration={70000} width={width} />
      <Cloud top={230} size={60} opacity={0.4} duration={95000} delay={4000} width={width} />
      <Cloud top={470} size={110} opacity={0.5} duration={120000} delay={9000} width={width} />
      <Cloud top={640} size={75} opacity={0.6} duration={85000} delay={2000} width={width} />
      {children}
    </View>
  );
}
const styles = StyleSheet.create({ root: { flex: 1, overflow: 'hidden' } });
