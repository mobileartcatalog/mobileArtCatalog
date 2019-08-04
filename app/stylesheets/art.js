import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  thumbnail: {
    height: 150,
    width: 150,
  },

  detailImage: {
    height: 400,
    width: 400,
  },

  title: {
    fontWeight: '700',
  },
  icon: {
    color: 'black',
    fontSize: 20,
    marginRight: 10,
  },

  container: {
    // flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // width: '33%',
    // flexDirection: 'column',
    // backgroundColor: 'lightgray',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  row: {
    // flex: 1,
    flexWrap: 'wrap',
    // width: '100%',
    // flexDirection: 'row',
  },

  cardDivider: {
    color: 'orangered',
  },

  cardTitle: {
    color: 'orangered',
  },
  cardSubtitle: {
    color: 'orangered',
  },

  headlineText: {
    color: 'orangered',
    fontSize: 34,
    fontWeight: '500',
  },

  bodyText: {
    color: 'gray',
    fontSize: 24,
    fontWeight: '100',
  },
});
