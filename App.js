import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  
  const add = () => {
    setItems([...items, {key: item}]);
    setItem("");
  }
  
  const clear = () => {
    setItems([]);
  }

  return (
    <View style={styles.container}>
      <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={item => setItem(item)} value={item}/>
      <View style={styles.view}>
        <Button title="Add" onPress={add} />
        <Button title="Clear" onPress={clear} />
      </View>
      <Text style={{fontWeight: "bold"}}>Shopping list</Text>
      <FlatList style={{flex: 0.4}} data={items} renderItem={({item}) => <Text>{item.key}</Text>}
                keyExtractor={(item, index) => index.toString()} scrollEnabled={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150
  },
  view: {
    flex: 0.4,
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 20
  }
});
