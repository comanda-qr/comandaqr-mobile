import { ReactNode } from "react";
import { View } from "react-native";
import styles from "../styles/styles";

type CardProps = {
  children?: ReactNode;
};

export default function Card({ children }: CardProps) {
  return <View style={styles.card}>{children && children}</View>;
}
