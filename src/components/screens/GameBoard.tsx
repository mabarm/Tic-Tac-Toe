import React from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {commonStyles} from '../utils.js/constants/commonStyles';

type GameBoardProps = PropsWithChildren<{
  board: string[];
  updateBoard: (index: number) => void;
}>;

function GameBoard({board, updateBoard}: GameBoardProps): JSX.Element {
  function changeItem(index: number) {
    if (board[index]) return;
    updateBoard(index);
  }

  return (
    <View style={styles.container}>
      {board.map((value, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.cell,
              {
                backgroundColor:
                  value == 'X' ? '#C9F9FC' : value == 'O' ? '#FFEFAA' : 'white',
              },
            ]}
            onPress={() => changeItem(index)}>
            <Text style={styles.value}>{value}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300 * commonStyles.mpx,
    width: 300 * commonStyles.mpx,
    marginTop: 70 * commonStyles.mpx,
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  cell: {
    height: 100 * commonStyles.mpx,
    width: 100 * commonStyles.mpx,
    borderWidth: 4 * commonStyles.mpx,
    borderRadius: 8 * commonStyles.mpx,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#79028C',
  },
  value: {
    paddingVertical: 10 * commonStyles.mpx,
    fontSize: 28 * commonStyles.mpx,
    fontWeight: 'bold',
  },
});

export default React.memo(GameBoard);
