import {FlatList, StyleSheet, View} from "react-native";
import MealItem from "./MealItem";
import {useNavigation} from "@react-navigation/native";

export default function MealsList({meals, navigateTo = "Details"}) {
    const navigation = useNavigation()

    function renderMealItem({item}) {
        const mealItemProps = {
            imageUrl: item.imageUrl,
            title: item.title,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            onPress: () => navigation.navigate(navigateTo, {mealId: item.id})
        }
        return <MealItem {...mealItemProps} />
    }

    return <View style={styles.container}>
        <FlatList
            data={meals}
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