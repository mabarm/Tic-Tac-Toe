import {SafeAreaView, StyleSheet} from 'react-native';
import Route from './src/components/routes/Route';
import {commonStyles} from './src/components/utils.js/constants/commonStyles';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Route />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: commonStyles.primaryColor,
  },
});

export default App;
