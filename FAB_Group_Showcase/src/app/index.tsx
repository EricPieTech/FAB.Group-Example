import { StyleSheet, Text, View } from "react-native";
import FAB_Group from "./components/FAB_Group";
//npm install react-native-paper
//npm install react-native-safe-area-context
//npm install @react-native-vector-icons/material-design-icons
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>FAB.Group Example</Text>
      <FAB_Group />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
