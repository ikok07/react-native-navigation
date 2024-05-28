import {View, Text, Image, Pressable, StyleSheet, Platform} from "react-native";
import MealDetails from "../MealDetails";

export default function MealItem({imageUrl, title, duration, complexity, affordability, onPress}) {
    return <View style={styles.mealItem}>
        <Pressable
            android_ripple={{color: "#ccc"}}
            style={({pressed}) => pressed ? styles.pressed : {}}
            onPress={onPress}
        >
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },
    innerContainer: {
      borderRadius: 8,
      overflow: "hidden"
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        fontWeight: "bold",
        paddingTop: 8,
        fontSize: 18,
        textAlign: "center"
    },
    pressed: {
        opacity: Platform.OS === "ios" ? 0.85 : 1
    }
})