import { StyleSheet, Text, View } from "react-native";
//npm install react-native-paper
//npm install react-native-safe-area-context
//npm install @react-native-vector-icons/material-design-icons
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>FAB.Group Example</Text>
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
