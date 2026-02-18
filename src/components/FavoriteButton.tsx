import { Pressable, StyleSheet, Text } from 'react-native';

interface FavoriteButtonProps {
  initialFavorite?: boolean;
  onChangeFavorite: (isFavorite: boolean) => void;
}

export default function FavoriteButton({
  initialFavorite = false,
  onChangeFavorite,
}: Readonly<FavoriteButtonProps>) {
  const handleButtonPress = () => {
    onChangeFavorite(!initialFavorite);
  };

  return (
    <Pressable onPress={() => handleButtonPress()}>
      {({ pressed }) => (
        <Text style={pressed ? styles.heartTxtPressed : styles.heartTxt}>
          {initialFavorite ? '♥' : '♡'}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  heartTxt: {
    fontSize: 40,
    color: 'orange',
  },
  heartTxtPressed: {
    fontSize: 45,
    color: 'red',
  },
});
