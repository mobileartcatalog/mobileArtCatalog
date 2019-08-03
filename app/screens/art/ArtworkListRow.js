import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../stylesheets/art';

const ArtworkListRow = props => {
  const artwork = props.artwork;
  return (
    // <Card
    // containerStyle={styles.container}
    // dividerStyle={styles.cardDivider}
    // image={{ uri: `${artwork.imageUrl}` }}
    // featuredTitle={artwork.title}
    // featuredTitleStyle={styles.cardTitle}
    // featuredSubtitle={artwork.date}
    // featuredSubtitleStyle={styles.cardSubtitle}
    // >
    <View>
      <Image style={styles.thumbnail} source={{ uri: `${artwork.imageUrl}` }} />
      <Text style={styles.title}>{artwork.title}</Text>
      <Text>{artwork.date}</Text>
    </View>
  );
};

export default ArtworkListRow;
