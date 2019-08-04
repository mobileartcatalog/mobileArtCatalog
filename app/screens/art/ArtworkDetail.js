import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Dimensions } from 'react-native';
import ScaledImage from 'react-native-scaled-image';
import { getArtworkDetail } from '../../reducers/artReducer/getArtworkDetail';
import styles from '../../stylesheets/art';

class ArtworkDetail extends Component {
  componentDidMount() {
    const id = this.props.navigation.getParam('id');
    this.props.getArtworkDetail(id);
  }

  render() {
    const { artwork } = this.props;
    const { width } = Dimensions.get('window');
    if (artwork) {
      return (
        <View>
          <ScaledImage source={{ uri: `${artwork.imageUrl}` }} width={width} />
          <Text>{artwork.title}</Text>
          <Text>{artwork.date}</Text>
          <Text>{artwork.medium}</Text>
          <Text>{artwork.dimensions}</Text>
        </View>
      );
    }
    return <Text>no.</Text>;
  }
}

const mapState = state => {
  return {
    artwork: state.art.selected,
    loading: state.art.loading,
  };
};

const mapDispatch = dispatch => ({
  getArtworkDetail: id => dispatch(getArtworkDetail(id)),
});

export default connect(
  mapState,
  mapDispatch
)(ArtworkDetail);
