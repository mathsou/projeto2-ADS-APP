import Moment from "moment";
import React, { useState, useEffect } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { getItemAsync } from "expo-secure-store";
import Menu from "../../components/Menu";
import { Feather } from "@expo/vector-icons";

import api from "../../services/api";
import styles from "./styles";

async function getToken() {
  return await getItemAsync("token");
}

function List({ navigation }) {
  const [order, setOrder] = useState({});
  const [token, setToken] = useState();

  const days = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

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

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Signin" }],
    });
  };
  Moment.locale("pt");
  return (
    <>
      <View style={styles.container}>
        <Text styles={styles.title}></Text>
        <FlatList
          data={order}
          keyExtrator={(id) => String(order.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: value, index }) => (
            <View style={styles.order}>
              <Text style={styles.text}>{days[index]}</Text>
              <Text style={styles.text}>
                R$ {value.toFixed(2).replace(".", ",")}
              </Text>
            </View>
          )}
        ></FlatList>
      </View>
      <Menu page="Report" navigation={navigation} />
    </>
  );
}

export default List;
