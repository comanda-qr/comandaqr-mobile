import { Link } from "expo-router";
import { Text, View } from "react-native";
import colors from "./styles/colors";
import styles from "./styles/styles";
import Card from "./components/card";

export default function Index() {
  return (
    <View style={styles.container}>
      <Card>
        <Text>ComandaQR</Text>
      </Card>
    </View>
  );
}
