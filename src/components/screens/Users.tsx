import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Keyboard,
} from 'react-native';

import {PlayerInfo} from '../utils.js/constants/playerInfo';
import {UserMessage} from '../utils.js/constants/TextLiterals';
import {commonStyles} from '../utils.js/constants/commonStyles';

type UsersProps = PropsWithChildren<{
  playerInfo: PlayerInfo[];
  handleUser1: (name: string) => void;
  handleUser2: (name: string) => void;
  startGame: () => void;
}>;

function Users({
  playerInfo,
  handleUser1,
  handleUser2,
  startGame,
}: UsersProps): JSX.Element {
  const handleInput1 = (text: string) => {
    handleUser1(text);
  };

  const handleInput2 = (text: string) => {
    handleUser2(text);
  };

  const handleButtonPress = () => {
    Keyboard.dismiss();
    startGame();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={UserMessage.EMPTY_NAME1}
        value={playerInfo[0].name}
        onChangeText={handleInput1}
      />
      <TextInput
        style={styles.input}
        placeholder={UserMessage.EMPTY_NAME2}
        value={playerInfo[1].name}
        onChangeText={handleInput2}
      />
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>{UserMessage.PROCEED}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: '25%',
  },
  input: {
    width: commonStyles.width - 120,
    height: 48 * commonStyles.mpx,
    borderRadius: 10 * commonStyles.mpx,
    paddingHorizontal: 10 * commonStyles.mpx,
    backgroundColor: 'white',
    marginTop: 20 * commonStyles.mpx,
  },
  button: {
    backgroundColor: commonStyles.secondaryColor,
    height: 48 * commonStyles.mpx,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10 * commonStyles.mpx,
    marginTop: 60 * commonStyles.mpx,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default React.memo(Users);
