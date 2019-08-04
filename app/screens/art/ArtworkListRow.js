import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../stylesheets/art';

class ArtworkListRow extends Component {
  render() {
    const { artwork } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        onPress={() => navigate('ArtworkDetail', { id: artwork.id })}
      >
        <View>
          <Image
            style={styles.thumbnail}
            source={{ uri: `${artwork.imageUrl}` }}
          />
          <Text style={styles.title}>{artwork.title}</Text>
          <Text>{artwork.date}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(ArtworkListRow);
