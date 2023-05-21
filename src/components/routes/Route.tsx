import React from 'react';
import {usePlayerInfo} from '../utils.js/functions/usePlayerInfo';
import Users from '../screens/Users';
import Game from '../screens/Game';

function Route(): JSX.Element {
  const {playerInfo, handleUser1, handleUser2, playGame, startGame} =
    usePlayerInfo();

  return playGame ? (
    <Game playerInfo={playerInfo} />
  ) : (
    <Users
      playerInfo={playerInfo}
      handleUser1={handleUser1}
      handleUser2={handleUser2}
      startGame={startGame}
    />
  );
}

export default React.memo(Route);
