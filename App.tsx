import { StatusBar } from 'expo-status-bar';
import React, { Suspense } from 'react';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import LanguageSetting from './LanguageSetting';
import LoadingModal from './Loader';

export default function App() {
  

  return (
    
    <View style={styles.container}>
   
     <LanguageSetting/>
      
      
    </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignContent: 'center', backgroundColor: '#F5F5F5'
  },
  
 
});
