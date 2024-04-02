import { StyleSheet } from 'react-native'

export const styles = ({ xBody, yBody, widthBody, heightBody }) =>
  StyleSheet.create({
    fish: {
      borderWidth: 1,
      borderColor: "darkBrown",
      borderStyle: "solid",
      position: 'absolute',
      left: xBody,
      top: yBody,
      width: widthBody,
      height: heightBody,
      resizeMode: 'contain'
      
    }
  })
