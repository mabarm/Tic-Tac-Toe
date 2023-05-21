import {useMemo, useState, useCallback} from 'react';
import {showToast} from '../../screens/Alerts/Toast';

function usePlayerInfo() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [playGame, setPlayGame] = useState(false);

  const handleUser1 = useCallback((name: string) => {
    setPlayer1(name);
  }, []);

  const handleUser2 = useCallback((name: string) => {
    setPlayer2(name);
  }, []);

  const startGame = useCallback(() => {
    if (player1 !== '' && player2 !== '') {
      setPlayGame(true);
    } else {
      showToast();
    }
  }, [player1, player2]);

  const playerInfo = useMemo(
    () => [
      {
        symbol: 'X',
        name: player1,
      },
      {
        symbol: 'O',
        name: player2,
      },
    ],
    [player1, player2],
  );

  return {playerInfo, handleUser1, handleUser2, playGame, startGame};
}

export {usePlayerInfo};
