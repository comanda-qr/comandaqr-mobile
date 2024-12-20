import { Text, View } from "react-native";
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
