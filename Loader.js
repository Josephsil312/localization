import React from "react";
import { ActivityIndicator, Modal, StyleSheet, Text, View } from "react-native";

export default function LoadingModal(props) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      statusBarTranslucent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.loader}>
            <ActivityIndicator size="large" color={"#0091EA"} />
          </View>
          <Text style={styles.modalText}>
            {
                props.selectLanguage === 'en'? <Text>Changing to English Cambiando a ingles...</Text> : <Text>Changng to Spanish Cambiando a espanol...</Text>
            }
          </Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    width: 150,
    height: 80,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginVertical: 15,
    textAlign: "center",
    fontSize: 17,
    marginTop: -10,
    marginBottom: 10,
    fontSize: 13,
  },
  loader: {
    margin: "auto",
    marginTop: 10,
    marginBottom: 10,
  },
});
