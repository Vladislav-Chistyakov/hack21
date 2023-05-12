import React from "react";
import { StyleSheet, View } from "react-native";
import { Header, Image, Text } from "react-native-elements";

import logo from "../assets/logo.png";
import { Link } from "@react-navigation/native";

export default function MyHeader() {
  return (
    <Header
      leftComponent={
        <View style={styles.titleContainer}>
          <Image source={logo} style={styles.icon} />
          <Text style={styles.title}>CARTEL</Text>
        </View>
      }
      containerStyle={{ backgroundColor: "#111C35" }}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 160,
    marginLeft: 32,
    marginVertical: 30,
  },
  title: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 20,
  },
});
