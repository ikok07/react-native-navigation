import {View, Text, StyleSheet, FlatList} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import {useLayoutEffect} from "react"

export function MealsOverviewScreen({navigation, route}) {
    const catId = route.params.categoryId
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId))

    function renderMealItem({item}) {
        const mealItemProps = {
            imageUrl: item.imageUrl,
            title: item.title,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            onPress: () => navigation.navigate("Details", {mealId: item.id})
        }
        return <MealItem {...mealItemProps} />
    }


    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title
        navigation.setOptions({title: categoryTitle})
    }, [catId, navigation]);

    return <View style={styles.container}>
        <FlatList
            data={displayedMeals}
            keyExtractor={item => item.id}
            renderItem={renderMealItem}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})