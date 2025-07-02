import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "./reduxtoolkit/cardSlice";
import { movieStyles } from "./styles/movieStyles";

// Action for deleting all items (to be added in cardSlice)
const deleteAllItems = () => ({ type: "card/deleteAllItems" });

function ItemListScreen() {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.card);

  // Unique items for display
  const uniqueItems = Array.from(
    items.reduce((map: Map<number, any>, item: any) => {
      if (!map.has(item.id)) map.set(item.id, item);
      return map;
    }, new Map()).values()
  );

  // Get quantity for each item
  const getQuantity = (id: number) => items.filter((item: any) => item.id === id).length;

  // Add item (increment)
  const handleIncrement = (item: any) => {
    dispatch(addItemToCart(item));
  };

  // Remove item (decrement)
  const handleDecrement = (item: any) => {
    dispatch(removeItemFromCart(item));
  };

  // Delete all items
  const handleDeleteAll = () => {
    dispatch(deleteAllItems());
  };

  // Delete all instances of a particular item
  const handleDeleteItem = (id: number) => {
    // Remove all items with this id
    items.filter((item: any) => item.id === id).forEach(() => {
      dispatch(removeItemFromCart({ id }));
    });
  };

  return (
    <View style={movieStyles.container}>
      <Text style={movieStyles.headerText}>Your Items</Text>
      <TouchableOpacity style={styles.deleteAllButton} onPress={handleDeleteAll}>
        <Text style={styles.deleteAllText}>Delete All</Text>
      </TouchableOpacity>
      <FlatList
        data={uniqueItems}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }: { item: any }) => (
          <View style={movieStyles.itemContainer}>
            <Text style={movieStyles.itemName}>{item.name}</Text>
            <View style={movieStyles.buttonContainer}>
              <TouchableOpacity
                style={movieStyles.button}
                onPress={() => handleDecrement(item)}
              >
                <Text style={movieStyles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={{ minWidth: 20, textAlign: 'center', alignSelf: 'center' }}>{getQuantity(item.id)}</Text>
              <TouchableOpacity
                style={movieStyles.button}
                onPress={() => handleIncrement(item)}
              >
                <Text style={movieStyles.buttonText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[movieStyles.button, { backgroundColor: '#FF3B30', marginLeft: 8 }]}
                onPress={() => handleDeleteItem(item.id)}
              >
                <Text style={movieStyles.buttonText}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>No items added.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  deleteAllButton: {
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  deleteAllText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ItemListScreen; 