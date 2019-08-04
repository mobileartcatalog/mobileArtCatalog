import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { connect } from 'react-redux';
import { getArt } from '../../reducers/artReducer/getArt';
import ArtworkListRow from './ArtworkListRow';

class ArtworkList extends Component {
  static navigationOptions = {
    title: '',
  };

  componentDidMount() {
    this.props.getArt();
  }

  render() {
    const { art, count } = this.props;

    return (
      <View>
        <Text>{count} works found</Text>

        <FlatGrid
          itemDimension={150}
          items={art}
          renderItem={({ item }) => (
            <ArtworkListRow
              artwork={item}
            />
          )}
        />
      </View>

      // {art.map(artwork => (
      //   <View key={artwork.id}>
      //     <ArtworkListRow artwork={artwork} />
      //   </View>
      // ))} */
    );
  }
}

const mapState = state => {
  return {
    art: state.art.all,
    count: state.art.count,
  };
};

const mapDispatch = dispatch => ({
  getArt: () => dispatch(getArt()),
});

export default connect(
  mapState,
  mapDispatch
)(ArtworkList);
