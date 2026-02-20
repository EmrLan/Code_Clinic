import { RouteProp } from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import FlightsDetails from '../views/FlightsDetails';
import FlightsList from '../views/FlightsList';

type StackParamList = {
  FlightsList: undefined;
  FlightsDetails: { id: string };
};

export type StackProps = NativeStackNavigationProp<
  StackParamList,
  keyof StackParamList
>;

export type StackRouteProps = RouteProp<StackParamList, keyof StackParamList>;

const Stack = createNativeStackNavigator<StackParamList>();

export default function FlightsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FlightsList" component={FlightsList} />
      <Stack.Screen name="FlightsDetails" component={FlightsDetails} initialParams={{id: ''}} />
    </Stack.Navigator>
  );
}
