import {StatusBar, Text, StyleSheet, Button} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MealsOverviewScreen} from "./screens/MealsOverviewScreen";
import {MealDetailsScreen} from "./screens/MealDetailsScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";
import {Ionicons} from "@expo/vector-icons";
import {FavouritesContextProvider} from "./store/context/favourites-context";
import {Provider} from "react-redux";
import {store} from "./store/redux/store";

const Stack = createNativeStackNavigator()
const DrawerStack = createDrawerNavigator()

function DrawerNavigator() {
  return <DrawerStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: "#351401"},
      headerTintColor: "white",
      sceneContainerStyle: {backgroundColor: "#3f2f25"},
      drawerInactiveTintColor: "white",
      drawerActiveTintColor: "#351401",
      drawerActiveBackgroundColor: "#e4baa1",
      drawerContentStyle: {backgroundColor: "#351401"}
    }}
  >
      <DrawerStack.Screen
          name={"CategoriesDrawer"}
          component={CategoriesScreen}
          options={{
            drawerIcon: ({color, size}) => <Ionicons name="list" color={color} size={size}/>
          }}
      />
      <DrawerStack.Screen
          name={"Favourites"}
          component={FavouritesScreen}
          options={{
            drawerIcon: ({color, size}) => <Ionicons name="star" color={color} size={size}/>
          }}
      />
  </DrawerStack.Navigator>
}

export default function App() {
  return <>
    <StatusBar barStyle="light-content"/>
      {/*<FavouritesContextProvider>*/}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: "#351401"},
            headerTintColor: "white",
            contentStyle: {backgroundColor: "#3f2f25"}
          }}>
            <Stack.Screen
                name="Categories"
                component={DrawerNavigator}
                options={{
                  headerShown: false
                }}
            />
            <Stack.Screen name="Overview" component={MealsOverviewScreen} />
            <Stack.Screen
                name="Details"
                component={MealDetailsScreen}
                options={{
                  title: "About the meal"
                }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/*</FavouritesContextProvider>*/}
  </>
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  }
});
