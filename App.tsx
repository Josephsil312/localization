import { StatusBar } from 'expo-status-bar';
import React, { Suspense } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LanguageSetting from './LanguageSetting';

export default function App() {
  

  return (
    <Suspense fallback={<Text>Loading... </Text>}>
    <View style={styles.container}>
    
      <LanguageSetting />
     
    </View>
     </Suspense>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignContent: 'center', backgroundColor: '#F5F5F5'
  },
});
