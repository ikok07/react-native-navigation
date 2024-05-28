import {View, Text, StyleSheet, FlatList} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import {useLayoutEffect} from "react"
import MealsList from "../components/MealsList/MealsList";

export function MealsOverviewScreen({navigation, route}) {
    const catId = route.params.categoryId
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId))


    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title
        navigation.setOptions({title: categoryTitle})
    }, [catId, navigation]);

    return <MealsList meals={displayedMeals}/>
}

