import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.contentBackground,
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.cardBackground,
        padding: 16,
        width: '95%',
        borderRadius: 8,
    },
    shadow: {
        shadowColor: '#282828',
        elevation: 6,
    }
});
