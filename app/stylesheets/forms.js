import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backgroundImage: {
    height: 700,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hamburger: { width: 44, height: 44, marginLeft: 20 },
  
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
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  headlineText: {
    color: 'black',
    fontSize: 34,
    fontWeight: '500',
    marginTop: -300,
  },

  bodyText: {
    color: 'gray',
    fontSize: 24,
    fontWeight: '100',
  },
});
