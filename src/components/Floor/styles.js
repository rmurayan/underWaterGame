import { StyleSheet } from 'react-native'

export const styles = ({ xBody, yBody, widthBody, heightBody }) =>
  StyleSheet.create({
    floor: {
      borderWidth: 1,
      borderColor: "darkBrown",
      borderStyle: "solid",
      position: 'absolute',
      position: 'absolute',
      left: xBody,
      top: yBody,
      width: widthBody,
      height: heightBody,
      resizeMode:"cover"
    }
  })
