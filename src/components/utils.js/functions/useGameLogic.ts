import {useState, useCallback} from 'react';
// import {playerInfo} from '../constants/playerInfo';
import {PlayerInfo} from '../constants/playerInfo';
import {checkWinner} from './checkWinner';
import {GameMessages} from '../constants/TextLiterals';
import {showAlert} from '../../screens/Alerts/Alert';

const emptyBoard = new Array(9).fill(null);

function useGameLogic(playerInfo: PlayerInfo[]) {
  const [board, setBoard] = useState<string[]>(emptyBoard);
  const [playerTurn, setPlayerTurn] = useState<number>(0);

  const isAnyoneWinning = useCallback(
    (newBoard: string[]): boolean => {
      const {name: currentPlayer} = playerInfo[playerTurn % 2];
      if (checkWinner(newBoard)) {
        showAlert({resetGame, currentPlayer});
        setPlayerTurn(9);
        return true;
      }
      if (playerTurn == 8) {
        showAlert({resetGame, currentPlayer: GameMessages.NONE});
      }
      return false;
    },
    [playerTurn],
  );

  const updateBoard = useCallback(
    (index: number) => {
      const newBoard = [...board];
      const {symbol: currentMove} = playerInfo[playerTurn % 2];
      newBoard[index] = currentMove;
      setBoard(newBoard);

      if (!isAnyoneWinning(newBoard)) setPlayerTurn(prevTurn => prevTurn + 1);
    },
    [playerTurn, board],
  );

  const resetGame = useCallback(() => {
    setBoard(emptyBoard);
    setPlayerTurn(0);
  }, []);

  return {
    board,
    updateBoard,
    resetGame,
    playerTurn,
  };
}

export {useGameLogic};
