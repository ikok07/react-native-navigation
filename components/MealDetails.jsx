import {StyleSheet, Text, View} from "react-native";

export default function MealDetails({duration, complexity, affordability, style, textStyle}) {
    return <View style={[styles.details, style]}>
        <Text style={textStyle}>{duration} min.</Text>
        <Text style={textStyle}>{complexity.toUpperCase()}</Text>
        <Text style={textStyle}>{affordability.toUpperCase()}</Text>
    </View>
}

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        gap: 15
    }
})