import { StyleSheet } from "react-native";

export default StyleSheet.create({
  viewBox: {
    backgroundColor: "white",
    height: 300,
    width: "100%",
    position: "absolute",
    bottom: 0,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 30,
    shadowOffsetY: 15,
    elevation: 3,
    border: "1px solid #DDD",
  },
  buttonContainer: {
    marginTop: 40,
    marginHorizontal: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonImage: {
    height: 60,
    width: 60,
  },
  groupText: {},
  text: {
    marginTop: 8,
    marginLeft: 40,
    fontSize: 16,
  },
  close: {
    position: "absolute",
    right: 10,
    top: 5,
  },
});
