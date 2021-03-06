import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

const Search = ({ page, navigation }) => {
  const home = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };
  const list = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "List" }],
    });
  };
  const report = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Report" }],
    });
  };
  const profile = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Profile" }],
    });
  };

  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.button} onPress={home}>
        <Feather name="home" size={50} color="#656565" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={list}>
        <Feather name="list" size={50} color="#656565" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Feather
          name="bar-chart-2"
          size={50}
          color="#656565"
          onPress={report}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Feather name="user" size={50} color="#656565" onPress={profile} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
