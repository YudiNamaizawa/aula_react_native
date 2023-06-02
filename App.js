import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

import Apostila_003 from './components/apostila_003';
import Apostila_004 from './components/apostila_004';

const corApp = '#000';

export default function App() {

  return (
    <View style={styles.container}>
      <Apostila_004/>
      <StatusBar style={corApp === '#000'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#corApp',
    padding: 8,
    paddingTop: Constants.statusBarHeight,
  },
});
