import Moment from "moment";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getItemAsync } from "expo-secure-store";
import Menu from "../../components/Menu";
import { Feather } from "@expo/vector-icons";

import api from "../../services/api";
import styles from "./styles";

async function getToken() {
  return await getItemAsync("token");
}

function List({ navigation }) {
  const [token, setToken] = useState();

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const formatOrdersToReport = (orders) => {
    return orders.reduce(
      (acc, val) => {
        let day = new Date(val.created_at).getDay();
        acc[day] += val.fee;
        return acc;
      },
      [0, 0, 0, 0, 0, 0, 0]
    );
  };

  const getOrders = async () => {
    const { data } = await api.get("orders", {
      params: {
        dateFrom:
          Moment(Moment().subtract(7, "days").calendar()).format("YYYY-MM-DD") +
          " 00:00:00",
      },
    });
    setOrder(formatOrdersToReport(data));
  };

  useEffect(() => {
    getOrders();
  }, []);

  const desconectar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Welcome" }],
    });
  };
  Moment.locale("pt");
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={desconectar}>
          <Text style={styles.button}>Desconectar</Text>
        </TouchableOpacity>
      </View>
      <Menu page="Profile" navigation={navigation} />
    </>
  );
}

export default List;
