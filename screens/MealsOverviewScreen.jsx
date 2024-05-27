import {View, Text, StyleSheet, FlatList} from "react-native";
import {MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";

export function MealsOverviewScreen({route}) {
    const catId = route.params.categoryId
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId))

    function renderMealItem({item}) {
        return <MealItem title={item.title}/>
    }

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