import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    color: 'black',
    width: '50%',
  },

  field: {
    width: '75%',
  },

  icon: {
    color: 'black',
    fontSize: 20,
    marginRight: 10,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
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
