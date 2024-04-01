import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles';

const HEART = require('../../../../assets/images/point.png');

const Point = ({ point }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={HEART} style={styles.image} />
        <Text style={styles.text}>{point}</Text>
      </View>
    </View>
  );
};

export { Point };
