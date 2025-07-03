// src/UsernameScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addUsername, setLoading } from './redux/usernameSlice';
import { RootState, AppDispatch } from './redux/store';

const UsernameScreen = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const usernames = useSelector((state: RootState) => state.usernames.list);
  const loading = useSelector((state: RootState) => state.usernames.loading);

  const handleAdd = async () => {
    if (input.trim()) {
      // Show loader
      dispatch(setLoading(true));
      
      // Simulate async operation (replace with your actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      dispatch(addUsername(input));
      setInput('');
      
      // Hide loader
      dispatch(setLoading(false));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Username List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={input}
        onChangeText={setInput}
      />
      <Button 
        title={loading ? "Adding..." : "Add"} 
        onPress={handleAdd}
        disabled={loading}
      />
      
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loaderText}>Adding username...</Text>
        </View>
      )}
      
      <FlatList
        data={usernames}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
};

export default UsernameScreen;

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  title: { fontSize: 22, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  item: { fontSize: 18, paddingVertical: 4 },
  loaderContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  loaderText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
});
