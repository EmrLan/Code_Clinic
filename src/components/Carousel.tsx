import { FlatList } from 'react-native';
import Card from './Card';

export default function Carousel() {
  const offers = [
    { id: 'o1', title: '20% off on Flights', subtitle: 'Use code FLY20' },
    { id: 'o2', title: 'Cashback on Groceries', subtitle: 'Visa Rewards' },
    { id: 'o3', title: 'Hotel Deals', subtitle: 'Up to 30% off' },
  ];

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={offers}
      renderItem={({ item }) => <Card data={item} />}
      keyExtractor={item => item.id}
    />
  );
}
