import {Alert} from 'react-native';
import {GameMessages} from '../../utils.js/constants/TextLiterals';

interface AlertProps {
  resetGame: () => void;
  currentPlayer: string;
}

function showAlert({resetGame, currentPlayer}: AlertProps) {
  const alertTitle =
    currentPlayer !== GameMessages.NONE
      ? GameMessages.WIN
      : GameMessages.NONE_WON;
  const alertMessage =
    currentPlayer !== GameMessages.NONE
      ? `${currentPlayer} ${GameMessages.WINNER}`
      : GameMessages.DRAW;

  Alert.alert(alertTitle, alertMessage, [
    {
      text: GameMessages.PLAY_AGAIN,
      onPress: resetGame,
      style: 'cancel',
    },
  ]);
}

export {showAlert};
