import {FlatList} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({navigation}) {
    function renderCategoryItem({item}) {
        return <CategoryGridTile
            title={item.title}
            color={item.color}
            onPress={() => navigation.navigate("Overview", {
                categoryId: item.id
            })}
        />
    }

    return <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
    />
}