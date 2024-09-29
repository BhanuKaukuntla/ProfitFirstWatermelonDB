import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function AccountListItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Profit</Text>
      <Text style={styles.percentage}>10%</Text>
      <Text style={styles.percentage}>20%</Text>
    </View>
  );
}

export default AccountListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
  },
  percentage: {
    flex: 1,
  },
});
