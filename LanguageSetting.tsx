import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Dimensions, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import './assets/i18n/i18n';
const windowHeight = Dimensions.get('window').height;

const LanguageSetting = () => {
  const {t, i18n} = useTranslation();
  
  const [currentLanguage,setLanguage] =useState('es');
  
  const changeLanguage = (value:any) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };
return (
    <>
    <SafeAreaView>
      <View>
        <View style={styles.ContainerSettings}>
          <View
            style={{ width: "100%", backgroundColor: "#0091EA", height: 90 }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                top: 50,
              }}
            >
              <Text style={{ color: "white", fontSize: 17 }}>{t('text_cancel')}</Text>
              <Text style={{ color: "white", fontSize: 17 }}>{t('text_language')}</Text>
              <Pressable onPress = {() => changeLanguage('en')}>
              <Text style={{ color: "white", fontSize: 17 }}>Apply</Text>
              </Pressable>
              
            </View>
            <View style={{ left: 40, top: 100 }}>
              <Text style={{ fontSize: 15 }}>{t('Choose_your_language')}</Text>
              <Text style={{ fontSize: 15 }}>Elige tu idioma.</Text>
            </View>
            <View style={styles.languageChoose}>
              <Text style={{ padding: 5, fontSize: 17 }}>English</Text>
              <View style={{ borderWidth: 0.3 }} />
              <Text style={{ fontSize: 17, padding: 5 }}>Espanol-spanish</Text>
            </View>
          </View>
        </View>
       
      </View>
      <View style = {{flexDirection:'column'}}>
      <View style={styles.navigation}>
          <Text style={{ fontSize: 14,color: '#888888' }}>{t('My_RTS')}</Text>
          <Text style={{ fontSize: 14,color: '#888888' }}>{t('Frieght')}</Text>
          <Text style={{ fontSize: 14 ,color: '#888888'}}>{t('Fuel')}</Text>
          <Text style={{ fontSize: 14 ,color: '#888888'}}>{t('Factoring')}</Text>
          <Text style={{ fontSize: 14 ,color: '#888888'}}>{t('More')}</Text>
        </View>
        <View style = {styles.icons}>
        <Image
          style={styles.logo}
          source = {require('C:/Users/joseph.stallone/Documents/localization/my-app/assets/profile.png')}
          resizeMode = "contain"
        />
        <Image
          style={styles.logo}
          source = {require('C:/Users/joseph.stallone/Documents/localization/my-app/assets/frieght.png')}
          resizeMode = "contain"
        />
        <Image
          style={styles.logo}
          source = {require('C:/Users/joseph.stallone/Documents/localization/my-app/assets/fuel.png')}
          resizeMode = "contain"
        />
        <Image
          style={styles.logo}
          source = {require('C:/Users/joseph.stallone/Documents/localization/my-app/assets/factoring.png')}
          resizeMode = "contain"
        />
        <Image
          style={styles.logo}
          source = {require('C:/Users/joseph.stallone/Documents/localization/my-app/assets/more.png')}
          resizeMode = "contain"
        />
        </View>
        </View>
      <View style={{ borderWidth: 0.3, top:windowHeight-90  }} />
      </SafeAreaView>
    </>
  );
};

export default LanguageSetting;

const styles = StyleSheet.create({
  ContainerSettings: {
    flex: 1,
    
  },
  languageChoose: {
    backgroundColor: "white",
    position: "relative",
    top: 120,
    left: 20,
    borderWidth: 0.3,
    width: "90%",
    height: 100,
    padding: 15,
    color: "#E0E0E0",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    top:  windowHeight-20,
  },
  logo:{
    width:25,
    height:25,
  },
  icons:{
    flexDirection:'row',
    justifyContent:'space-around',
    top: windowHeight-60
  }
});
