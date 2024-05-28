import {View, Text, StyleSheet} from "react-native";
import MealsList from "../components/MealsList/MealsList";
import {MEALS} from "../data/dummy-data";
import {useSelector} from "react-redux";
// import {useFavourites} from "../store/context/favourites-context";

export default function FavouritesScreen() {
    // const favouriteMeals = useFavourites()
    const favouriteMealIds = useSelector(state => state.favouriteMeals.ids)

    const favouriteMealsArr = MEALS.filter(meal => favouriteMealIds.includes(meal.id))

    if (favouriteMealsArr.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favourite meals yet.</Text>
        </View>
    }

    return <MealsList meals={favouriteMealsArr}/>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }
})