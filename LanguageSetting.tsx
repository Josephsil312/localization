import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Dimensions, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import './assets/i18n/i18n';
import Loader from "./Loader";
import RoundCheckbox from 'rn-round-checkbox'

const windowHeight = Dimensions.get('window').height;
const LanguageSetting = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setLanguage] = useState('en');
  const [selectLanguage, setSelectLanguage] = useState('en')
  const [showme, setShowMe] = useState(false);
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [dis, setDis] = useState(true);
  const changeLanguage = (value: any) => {
    setShowMe(true)

    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };
  
  useEffect(() => {
    setTimeout(() => {
      setShowMe(false)
    }, 2000);
  }, [changeLanguage]);

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
                <Text style={{ color: "white", fontSize: 17, fontWeight: '600' }}>{t('text_cancel')}</Text>
                <Text style={{ color: "white", fontSize: 17, fontWeight: '600' }}>{t('text_language')}</Text>
                <TouchableOpacity disabled = {!dis} onPress={() => { { dis && changeLanguage(selectLanguage) }; setDis(false) }}>
                  <Text style={[styles.apply,(!dis ? styles.disabled : styles.enabled)]}>Apply</Text>
                </TouchableOpacity>
              </View>
              <View style={{ left: 40, top: 100 }}>
                <Text style={{ fontSize: 15 }}>{t('choose_your_language')}</Text>
                <Text style={{ fontSize: 15 }}>Elige tu idioma.</Text>
              </View>
              <View style={styles.languageChoose}>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text>English</Text>
                  <View style={{ marginBottom: 10 }}>
                    <RoundCheckbox backgroundColor={'#0091EA'} size={20} checked={one} onValueChange={() => { setSelectLanguage('en'); setOne(true); setTwo(false); setDis(true) }} />
                  </View>

                </View>
                <View style={{ borderWidth: 0.3 }} />
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                  <Text style={{ marginTop: 10 }}>Espanol-Spanish</Text>
                  <View style={{ marginTop: 10 }}>
                    <RoundCheckbox backgroundColor={'#0091EA'} size={20} checked={two} onValueChange={() => { setSelectLanguage('es'); setOne(false); setTwo(true); setDis(true) }} />
                  </View>

                </View>
              </View>
            </View>
          </View>
        </View>
        {showme ?
          <Loader selectLanguage={selectLanguage} /> : null
        }
        <View>
          <View style={styles.navigation}>
            <Text style={{ fontSize: 14, color: '#888888' }}>{t('my_rts')}</Text>
            <Text style={{ fontSize: 14, color: '#888888' }}>{t('fieght')}</Text>
            <Text style={{ fontSize: 14, color: '#888888' }}>{t('fuel')}</Text>
            <Text style={{ fontSize: 14, color: '#888888' }}>{t('factoring')}</Text>
            <Text style={{ fontSize: 14, color: '#888888' }}>{t('more')}</Text>
          </View>
        </View>

        <View style={styles.icons}>
          <Image
            style={styles.logo}
            source={require('C:/Users/joseph.stallone/Documents/localization/my-app/assets/profile.png')}
            resizeMode="contain"
          />
          <Image
            style={styles.logo}
            source={require('C:/Users/joseph.stallone/Documents/localization/my-app/assets/frieght.png')}
            resizeMode="contain"
          />
          <Image
            style={styles.logo}
            source={require('C:/Users/joseph.stallone/Documents/localization/my-app/assets/fuel.png')}
            resizeMode="contain"
          />
          <Image
            style={styles.logo}
            source={require('C:/Users/joseph.stallone/Documents/localization/my-app/assets/factoring.png')}
            resizeMode="contain"
          />
          <Image
            style={styles.logo}
            source={require('C:/Users/joseph.stallone/Documents/localization/my-app/assets/more.png')}
            resizeMode="contain"
          />

        </View>

        <View style={{ borderWidth: 0.3, top: windowHeight - 90 }} />

      </SafeAreaView>

    </>
  );
};

export default LanguageSetting;

const styles = StyleSheet.create({
  ContainerSettings: {
    flex: 1,
  },
  apply: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600'
  },
  disabled: {
    opacity: 0.5
  },
  enabled: {
    opacity: 1
  },
  languageChoose: {
    backgroundColor: "white",
    position: "relative",
    top: 120,
    left: 20,
    borderWidth: 0.3,
    width: "90%",
    height: 'auto',
    padding: 15,
    color: "#E0E0E0",

  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    top: windowHeight - 20,
  },
  logo: {
    width: 25,
    height: 25,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: windowHeight - 60
  }
});
