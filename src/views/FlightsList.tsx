import { useNavigation } from '@react-navigation/native';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { StackProps } from '../navigation/FlightsStack';

export default function FlightsList() {
  const navigation = useNavigation<StackProps>();
  const flights = [
    { id: 'AA101', from: 'DFW', to: 'LAX', price: 320 },
    { id: 'AA041', from: 'DFW', to: 'NWA', price: 620 },
  ];
  return (
    <View style={styles.Container}>
      <FlatList
        data={flights}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('FlightsDetails', { id: item.id })
            }
            style={styles.ItemCtn}
          >
            <Text>{item.id}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 10,
  },
  ItemCtn: {
    alignItems: 'center',
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
});
