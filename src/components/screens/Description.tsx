import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {GameMessages} from '../utils.js/constants/TextLiterals';
import type {PropsWithChildren} from 'react';
import {commonStyles} from '../utils.js/constants/commonStyles';
import {PlayerInfo} from '../utils.js/constants/playerInfo';

type DescriptionProps = PropsWithChildren<{
  playerTurn: number;
  playerInfo: PlayerInfo[];
}>;

function Description({playerTurn, playerInfo}: DescriptionProps): JSX.Element {
  return (
    <>
      <Text style={styles.gameName}>{GameMessages.GAME_NAME}</Text>
      <View style={styles.turnContainer}>
        <Text style={styles.turnText}>
          {playerTurn === 9
            ? GameMessages.GAME_OVER
            : playerTurn % 2 === 0
            ? `${playerInfo[0].name} ${GameMessages.TURN}`
            : `${playerInfo[1].name} ${GameMessages.TURN}`}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  gameName: {
    marginTop: 26 * commonStyles.mpx,
    fontSize: 50 * commonStyles.mpx,
    fontWeight: 'bold',
    color: 'white',
  },
  turnText: {
    paddingVertical: 10 * commonStyles.mpx,
    fontSize: 26 * commonStyles.mpx,
    color: 'white',
    fontWeight: 'bold',
  },
  turnContainer: {
    marginTop: 36 * commonStyles.mpx,
    width: commonStyles.width - 120,
    borderRadius: 10 * commonStyles.mpx,
    backgroundColor: commonStyles.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default React.memo(Description);
