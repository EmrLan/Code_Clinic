import { StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider
} from 'react-native-safe-area-context';
import Main from './src/views/Home';
import BottomTab from './src/navigation/BottomTab';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
