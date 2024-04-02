import { StyleSheet } from 'react-native'

export const styles = ({ xBody, yBody, widthBody, heightBody }) =>
  StyleSheet.create({
    obstacle: {
      borderWidth: 1,
      borderColor: "darkBrown",
      borderStyle: "solid",
      position: 'absolute',
      left: xBody,
      margin :0,
      padding:0,
      top: yBody,
      width: widthBody,
      height: heightBody,
      resizeMode: "cover"
    }
  })
