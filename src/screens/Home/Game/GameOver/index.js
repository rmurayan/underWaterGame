import { View, Image, Text, TouchableWithoutFeedback } from "react-native";

import { styles } from "./styles";

import GAME_OVER from "../../../../assets/images/Game-over.png";
import GAME_AGAIN from "../../../../assets/images/again.png";
import GAME_START from "../../../../assets/images/Star-icon.png";

const GameOver = ({ handlebackToStart, currPoints }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     handlebackToStart();
  //   }, 5000);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <View style={styles.container}>
      <Image source={GAME_OVER} style={styles.logo} />
      <View style={styles.result}>
        <Image source={GAME_START} style={styles.star} />
        <Image source={GAME_START} style={styles.star} />
        <Image source={GAME_START} style={styles.star} />
      </View>
      <Text style={styles.text}>Your score is {currPoints}</Text>

      <TouchableWithoutFeedback
        onPress={() => {
          setTimeout(() => {
            handlebackToStart();
          }, 100);
        }}
      >
        <Image source={GAME_AGAIN} style={styles.logo} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export { GameOver };
