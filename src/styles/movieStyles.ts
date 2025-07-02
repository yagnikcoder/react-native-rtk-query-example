import { StyleSheet } from 'react-native';

export const movieStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 14,
    color: "#666",
  },
  itemImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 8,
    backgroundColor: '#eee', // Optional
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    backgroundColor: "#007AFF",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
}); 