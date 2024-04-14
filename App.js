import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground } from "react-native";
import Navigation from "./navigation";
import { themeColors } from './theme';
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function App() {
  return (
    <SafeAreaProvider
      style={{
        height: '100%',
        width: '100%'
      }}
    >
      <StatusBar style='light' backgroundColor={themeColors.bgColor} />
      <Navigation />
    </SafeAreaProvider> 
  );
}

