import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "react-native-elements";

import MyHeader from "../components/Header";
import Form from "../assets/Form.png";
import nextButton from "../assets/nextButton.png";

export default function FavouriteScreen() {
  return (
    <View>
      <MyHeader />
      <View style={styles.container}>
        <Text style={styles.title}>РЕГИСТРАЦИЯ</Text>
        <Image source={Form} style={styles.form} />
        <Image source={nextButton} style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
  title: {
    color: "#111C35",
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",
    fontWeight: "700",
    marginTop: 28,
  },
  form: {
    marginTop: 50,
    width: 372,
    height: 341,
  },
  button: { width: 372, height: 58, marginTop: 120 },
});
