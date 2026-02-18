import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface PropsContainer {
  min?: number;
  max?: number;
  initial?: number;
  onChange?: (qty: number) => void;
}

export default function QuantityStepper({
  min = 1,
  max = 10,
  initial,
  onChange,
}: Readonly<PropsContainer>) {
  const [val, setVal] = useState(() => {
    if (!initial) return min;

    if (initial < min) return min;
    else if (initial > max) return max;
    else return initial;
  });

  const increase = () => {
    if (val < max)
      setVal(prev => {
        if (onChange) onChange(prev + 1);
        return prev + 1;
      });
  };

  const decrease = () => {
    if (val > min)
      setVal(prev => {
        if (onChange) onChange(prev - 1);
        return prev - 1;
      });
  };
  return (
    <View style={styles.container}>
      <View>
        <Button title="+" onPress={increase} />
        <Button title="-" onPress={decrease} />
      </View>
      <Text style={styles.valTxt}>{val}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  valTxt: {
    fontSize: 20,
  },
});
