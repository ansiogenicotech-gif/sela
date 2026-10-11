import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ConversationScreen from '../screens/ConversationScreen';
import ImageGeneratorScreen from '../screens/ImageGeneratorScreen';
import SavedMessagesScreen from '../screens/SavedMessagesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SafetySupportScreen from '../screens/SafetySupportScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTransparent: true, headerTitle: '', headerTintColor: '#1F3A5F' }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Conversation" component={ConversationScreen} />
        <Stack.Screen name="ImageGenerator" component={ImageGeneratorScreen} />
        <Stack.Screen name="Saved" component={SavedMessagesScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Safety" component={SafetySupportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
