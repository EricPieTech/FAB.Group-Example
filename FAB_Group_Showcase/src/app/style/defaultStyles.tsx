import { StyleSheet } from "react-native";
import colors from "./colors";

const defaultSyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    borderRadius: 5,
    borderWidth: 10,
  },

  containerMinor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    borderRadius: 5,
    borderWidth: 5,
    height: 100,
    width: 700,
  },

  containerBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    borderRadius: 5,
    borderWidth: 5,
    height: 300,
    width: 650,
  },

  containerButtons: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  containerCandidates: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    borderRadius: 5,
    borderWidth: 5,
    height: 175,
    width: 325,
  },

  textInput: {
    borderWidth: 5,
    borderColor: colors.secondary,
    padding: 5,
    fontSize: 15,
    backgroundColor: colors.secondary,
    borderRadius: 5,
  },

  donateBox: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.morgulGreen,
    width: 75,
    height: 30,
    alignItems: "center",
  },

  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: colors.titleColor,
  },
  imageMain: {
    height: 200,
    width: 100,
    borderRadius: 5,
    borderWidth: 2,
  },

  imageCand: {
    width: 100,
    borderRadius: 5,
    borderWidth: 2,
    height: 100,
  },
  pledgeText: {
    color: colors.morgulGreen,
    fontSize: 20,
    fontWeight: "bold",
  },
  moneyCounter: {
    fontSize: 15,
    color: colors.morgulGreen,
    margin: 10,
    fontWeight: "bold",
  },
});

export default defaultSyles;
