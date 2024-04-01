import { StyleSheet } from 'react-native'

export const styles = ({ xBody, yBody, widthBody, heightBody }) =>
  StyleSheet.create({
    shark: {
      position: 'absolute',
      left: xBody,
      top: yBody,
      width: widthBody,
      padding:0,
      margin :0,
      height: heightBody,
      resizeMode: 'contain',
    }
  })
