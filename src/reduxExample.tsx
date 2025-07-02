import { NewAppScreen } from "@react-native/new-app-screen";
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "./reduxtoolkit/cardSlice";
import { getTotalPrice, getQuantity } from "./utils";
import { movieStyles } from "./styles/movieStyles";
import { dummyMovies } from "./data/dummyMovies";

function ReduxExample() {
  const dispatch = useDispatch();
  const AddItems = useSelector((state:any)=>state.card);
  console.log(AddItems);

  // Calculate total price of all items in the cart
  const totalPrice = getTotalPrice(AddItems);

  //   Dummy data
  const dummyData = dummyMovies;

  // Function to handle increment
  const handleIncrement = (item: any) => {
    dispatch(addItemToCart(item));
  };

  // Function to handle decrement
  const handleDecrement = (item: any) => {
    dispatch(removeItemFromCart(item));
  };

  return (
    <View style={movieStyles.container}>
      {/* Header with total price */}
      <Text style={movieStyles.headerText}>Total Price: ₹{totalPrice}</Text>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => {
          // Get quantity using utility function
          const quantity = getQuantity(AddItems, item.id);
          return (
            <View style={movieStyles.itemContainer}>
              <Text style={movieStyles.itemName}>{item.name}</Text>
              <Text style={movieStyles.itemPrice}>{item.price}</Text>
              <Image source={{ uri: item.image }} style={movieStyles.itemImage} />
              <View style={movieStyles.buttonContainer}>
                <TouchableOpacity
                  style={movieStyles.button}
                  onPress={() => handleDecrement(item)}
                >
                  <Text style={movieStyles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={{ minWidth: 20, textAlign: 'center', alignSelf: 'center' }}>{quantity}</Text>
                <TouchableOpacity
                  style={movieStyles.button}
                  onPress={() => handleIncrement(item)}
                >
                  <Text style={movieStyles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

export default ReduxExample;
