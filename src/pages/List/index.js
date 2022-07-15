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
  const [token, setToken] = useState(JSON.stringify(getToken()));

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getOrders = async () => {
    const { data } = await api.get("orders");
    setOrder(data);
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
          renderItem={({ item: value }) => (
            <View style={styles.order}>
              <View style={styles.textContainer}>
                <Text style={styles.textAddress}>{value.address}</Text>
                <Feather
                  name="map-pin"
                  size={20}
                  color="#bb0000"
                  style={styles.icon}
                />
              </View>
              <View style={{ ...styles.textContainer, marginTop: 20 }}>
                <Text style={styles.date}>
                  {Moment(value.created_at).format("DD/MM/Y HH:mm")}
                </Text>
                <Feather
                  name="calendar"
                  size={20}
                  color="#bb0000"
                  style={styles.icon}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.delivery}>
                  R$ {value.fee.toFixed(2).replace(".", ",")}
                </Text>
                <Feather
                  name="dollar-sign"
                  size={20}
                  color="#bb0000"
                  style={styles.icon}
                />
              </View>
              <TouchableOpacity>
                <Feather
                  name="trash"
                  size={20}
                  color="#656565"
                  style={styles.delete}
                />
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
      </View>
      <Menu page="List" navigation={navigation} />
    </>
  );
}

export default List;
