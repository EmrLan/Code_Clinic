import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Account from '../views/Account';
import Flights from '../views/Flights';
import Home from '../views/Home';
import FlightsStack from './FlightsStack';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require('../../assests/home.png')}
              style={{ height: size, width: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Flights'}
        component={FlightsStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require('../../assests/airplane.png')}
              style={{ height: size, width: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Account'}
        component={Account}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require('../../assests/profile.png')}
              style={{ height: size, width: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
