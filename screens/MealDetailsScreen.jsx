import {Text, View, Image, StyleSheet, ScrollView, Button} from "react-native";
import {useContext, useEffect, useLayoutEffect} from "react";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import {List} from "../components/MealDetails/List";
import IconButton from "../components/IconButton";
import {useDispatch, useSelector} from "react-redux";
import {addFavourite, removeFavourite} from "../store/redux/favourites";

// import {useFavourites} from "../store/context/favourites-context";

export function MealDetailsScreen({navigation, route}) {
    // const favouriteMeals = useFavourites()

    const favouriteMealIds = useSelector(state => state.favouriteMeals.ids)
    const dispatch = useDispatch()
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    const isFavourite = favouriteMealIds.includes(mealId)

    function handleToggleFavourite() {
        if (isFavourite) dispatch(removeFavourite({ id: mealId}))
        else dispatch(addFavourite({id: mealId}))
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={isFavourite ? "star" : "star-outline"} onPress={handleToggleFavourite}/>
            }
        })
    }, [favouriteMealIds]);

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