import { Component, ReactElement } from 'react';
import { StyleSheet, Text, TextStyle, View } from 'react-native';

// Internal style mapping:

// title → bigger font, bold.

// subtitle → medium font, muted color.

// body → default.

interface PropsContainer {
  variant: 'title' | 'subtitle' | 'body';
  style?: TextStyle;
  children: string;
}

export default function AppText({
  variant,
  style,
  children,
}: Readonly<PropsContainer>) {
  const setStyle = () => {

    const ArrayStyle = [];
    if (variant === 'title') ArrayStyle.push({...styles.title});
    else if (variant === 'subtitle') ArrayStyle.push({...styles.subtitle});

    if(style) ArrayStyle.push({...style});
    return ArrayStyle
  };

  return <Text style={setStyle()}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
  },
});
