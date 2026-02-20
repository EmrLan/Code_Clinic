import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackRouteProps } from '../navigation/FlightsStack';

interface FlightsDetailsProp {
  route: StackRouteProps;
}

interface FlightObj {
  id: string;
  from: string;
  to: string;
  price: number;
}

export default function FlightsDetails({
  route,
}: Readonly<FlightsDetailsProp>) {
  const flights = [{ id: 'AA101', from: 'DFW', to: 'LAX', price: 320 }];
  const id = route.params?.id ? route.params?.id : null;

  const [flight, setFlight] = useState<FlightObj | null>();

  useEffect(() => {
    if (!id) return;

    const details = flights.filter(flight => flight.id == id);
    if (details.length > 0) setFlight(details[0]);
  }, []);

  return (
    <View style={styles.Container}>
      {flight ? (
        <View>
          <Text>Flight: {flight.id}</Text>
          <Text>Departure: {flight.from}</Text>
          <Text>Destination: {flight.to}</Text>
          <Text>Price: ${flight.price}</Text>
        </View>
      ) : (
        <Text>Flight Details Not Found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
