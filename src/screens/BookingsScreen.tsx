import React from "react";
import MyHeader from "../components/Header";
import { View, StyleSheet, Text } from "react-native";
import { ChargingStationRow } from "../../components/ChargingStationRow";

const MockBooking = ({ state }) => (
  <View style={styles.item}>
    <Text style={styles.bookingTitle}>IT CHARGE</Text>
    <Text style={styles.bookingSubTitle}>Ул.Петербургская 52, Казань</Text>
    <Text style={styles.time}>22.05.2023 в 15:00</Text>
    <ChargingStationRow
      mapPointId={-1}
      state={state}
      charger={{ id: -1, type: "TYPE 2", power: 22 }}
    />
  </View>
);

export default function BookingsScreen() {
  return (
    <View>
      <MyHeader />
      <View style={styles.container}>
        <Text style={styles.title}>СПИСОК БРОНИРОВАНИЯ</Text>
        <MockBooking state="IN_USE" />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>ИСТОРИЯ</Text>
        <MockBooking state="SUCCESS" />
        <MockBooking state="CANCELED" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 15 },
  title: {
    color: "#111C35",
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",
    fontWeight: "700",
    marginTop: 28,
  },
  item: {
    marginTop: 29,
    color: "#111C35",
  },
  bookingTitle: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 21,
  },
  bookingSubTitle: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    marginTop: 4,
  },
  time: {
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 14,
    marginTop: 8,
  },
  history: {},
});
