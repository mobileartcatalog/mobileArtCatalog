import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

class ArtworkDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
  }

  render() {
    const { artwork } = this.props;
    if (artwork) {
      return (
        <View>
          <img className="thumb" src={`/${artwork.imageUrl}`} />
          <h3>{artwork.artistName}</h3>
          <p>title: {artwork.title}</p>
          <p>date: {artwork.date}</p>
          <p>tombstone: </p>
          <ArtworkButtons id={artwork.id} artwork={artwork} />
        </View>
      );
    }
    return <h1>no artwork found</h1>;
  }
}

const mapState = state => {
  return {
    artwork: state.art.selected,
    loading: state.art.loading,
  };
};

const mapDispatch = dispatch => ({
  getArtworkDetail: id => dispatch(getArtworkDetail),
});

export default connect(
  mapState,
  mapDispatch
)(ArtworkDetail);
