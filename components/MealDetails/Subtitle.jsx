import {StyleSheet, Text, View} from "react-native";

export default function Subtitle({children}) {
    return <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
    </View>
}

const styles = StyleSheet.create({
    subtitleContainer: {
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2,
        padding: 6,
        margin: 12
    },
    subtitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    }
})