import {ToastAndroid, Alert, Platform} from 'react-native';
import {UserMessage} from '../../utils.js/constants/TextLiterals';

function showToast() {
  if (Platform.OS === 'android') {
    ToastAndroid.show(UserMessage.FILL_NAME, ToastAndroid.SHORT);
  } else {
    Alert.alert(UserMessage.FILL_NAME);
  }
}

export {showToast};
