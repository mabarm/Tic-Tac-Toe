import React from 'react';
import type {PropsWithChildren} from 'react';
import Description from './Description';
import GameBoard from './GameBoard';
import {useGameLogic} from '../utils.js/functions/useGameLogic';
import {PlayerInfo} from '../utils.js/constants/playerInfo';

type GameProps = PropsWithChildren<{
  playerInfo: PlayerInfo[];
}>;

function Game({playerInfo}: GameProps): JSX.Element {
  const {board, updateBoard, playerTurn} = useGameLogic(playerInfo);

  return (
    <>
      <Description playerTurn={playerTurn} playerInfo={playerInfo} />
      <GameBoard board={board} updateBoard={updateBoard} />
    </>
  );
}

export default React.memo(Game);
