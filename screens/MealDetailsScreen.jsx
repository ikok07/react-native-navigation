import {Text, View, Image, StyleSheet, ScrollView, Button} from "react-native";
import {useLayoutEffect} from "react";
import {MEALS} from "../data/dummy-data";
import meal from "../models/meal";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import {List} from "../components/MealDetails/List";
import IconButton from "../components/IconButton";

export function MealDetailsScreen({navigation, route}) {
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={"star"} onPress={() => console.log("Hello")}/>
            }
        })
    }, [navigation, mealId]);

    return <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View>
            <MealDetails textStyle={styles.mealDetailsText} duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} />
        </View>
        <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List items={selectedMeal.ingredients}/>
            <Subtitle>Steps</Subtitle>
            <List items={selectedMeal.steps}/>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    rootContainer: {
      marginBottom: 32
    },
    image: {
        width: "100%",
        height: 300
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        margin: 8,
        color: "white",
        textAlign: "center"
    },
    mealDetailsText: {
        color: "white"
    },
    listContainer: {
        width: "80%",
        alignSelf: "center"
    }
})