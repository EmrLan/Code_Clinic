import { Dimensions, StyleSheet, View } from 'react-native';
import AppText from './AppText';

interface CardData {
  id: string;
  title: string;
  subtitle: string;
}

interface CardProp {
  data: CardData;
}

export default function Card({ data }: Readonly<CardProp>) {
  return (
    <View style={styles.Container}>
      <View style={styles.ImgCtn}></View>
      <AppText variant="title">{data.title}</AppText>
      <AppText variant="subtitle">{data.subtitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    gap: 10,
    padding: 10,
    borderWidth: 0.2,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  ImgCtn: {
    flex: 1,
    width: Dimensions.get('window').width - 60,
    backgroundColor: 'grey',
  },
});
