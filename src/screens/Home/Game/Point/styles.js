import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 80,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    padding: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    textAlign: 'center',
    width: '100%', 
    top: '50%',
    left: '50%',
    transform: [{ translateX: -35 }, { translateY: -10 }], 
  },
});
