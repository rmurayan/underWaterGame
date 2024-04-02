import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  result: {
    display: "flex",
    flexDirection: "row",
    justifyContent :"center",
    alignContent :"center"
  },
  star: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  playButton: {
    marginTop: 32,
    width: 120,
    height: 74,
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    marginVertical : 2,
    color: "black",
  },
});
