import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import QuantityStepper from './components/QuantityStepper';
import useToggle from './hooks/useToggle';
import AppText from './components/AppText';

export default function Main() {
  const [value, toggle, setTrue, setFalse] = useToggle();

  const [favorite, setForite] = useState(true);

  const handleFavoriteChange = (isFinite: boolean) => {
    setForite(isFinite);
  };

  const onQuantityChange = (value: number) => {
    console.log('value: ', value);
  };

  return (
    <View style={styles.container}>
      {/* <Text>value: {value.toString()}</Text>
      <Button title={'Toggle'} onPress={toggle} />
      <Button title={'Set True'} onPress={setTrue} />
      <Button title={'Set False'} onPress={setFalse} />

      <FavoriteButton
        initialFavorite={favorite}
        onChangeFavorite={handleFavoriteChange}
      /> */}
      <QuantityStepper initial={3} min={1} max={20} />
      <QuantityStepper />
      <QuantityStepper initial={20} />
      <QuantityStepper initial={-20} />
      <QuantityStepper onChange={onQuantityChange} />

      <AppText variant={'title'}>Title</AppText>
      <AppText variant={'subtitle'}>subtitle</AppText>
      <AppText variant={'body'}>body</AppText>
      <AppText style={{color: 'blue'}} variant={'title'}>Styled Title</AppText>
      <AppText style={{color: 'green'}} variant={'subtitle'}>Styled subtitle</AppText>
      <AppText style={{color: 'orange'}} variant={'body'}>Styled body</AppText>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    gap: 10,
    alignItems: 'center',
  },
});
