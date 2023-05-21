## Tic-tac-toe App Documentation

### About

The Tic-tac-toe app is a simple implementation of the classic game for two players.

This game app allows the players to take turns placing their symbols ('X' and 'O') on a 3x3 grid until one player wins or the game ends in a draw.
Like the classic game here also the rules for winning are that players place there symbols consecutively either horizontally, vertically or diagonally.

The app is built using React Native and consists of multiple components and utility files.

### Installation and Usage

To use the Tic-tac-toe app, follow these steps:

1. Ensure you have React Native and its dependencies set up on your development machine.
2. Clone the project repository and navigate to the project directory.
3. Run `npm install` or `yarn` to install the required dependencies.
4. Connect a device or start an emulator/simulator.
5. Run `yarn start` or `npm start`
6. Run `npx react-native run-android` or `yarn react-native run-android` (for Android) or `npx react-native run-ios` or `yarn react-native run-ios`(for iOS) to launch the app.

Once the app is running, you can enter the palyer names and then proceed to play yhe Tic-tac-toe by tapping on the cells to place your symbols. The game board and other relevant information will be displayed on the screen. When the game ends, an alert dialog will appear, allowing you to start a new game.

### Components

The app is composed of the following components:

1. **App**: The root component of the app. It manages the game state and renders the other components.
2. **Route** : Used for navigating from users to game
3. **Users** : Allows users to enter their names and start the game.
4. **GameBoard**: Renders the game board UI, including the cells and handles user interactions.
5. **Description**: Displays game-related information, such as the game name and current player's turn.
6. **Alert**: Shows a alert dialog when the game ends, displaying the winner or indicating a draw.Also allowing user to restart the game.

### Utility Files

The app also includes the following utility files:

1. **TextLiterals**: Contains constant strings used in the app, such as game names and messages.
2. **CommonStyles**: Defines common styles and dimensions used throughout the app.
3. **Functions**: Defines common functions and hooks used throughout the app.

### Customization and Extensibility

This app can be customized and extended in several ways:

- **Game Logic**: The game logic can be modified to introduce additional features or rules, such as different win conditions or game modes.
- **UI Styling**: The app's visual appearance can be customized by modifying the styles defined in the components' style objects.
- **PlayerInfo**: Provides information about the players, such as their names and can be enhanced

### References

This app is developed using various open-source libraries and resources. The following are the main technologies used:

- React Native: https://reactnative.dev/
- TypeScript: https://www.typescriptlang.org/.
- React: https://react.dev/
- Wikipedia: https://en.wikipedia.org/wiki/Tic-tac-toe

## Screenshots and Demo of App

![Screenshot_20230521-232146](https://github.com/mabarm/Tic-Tac-Toe/assets/25671335/3fe2c703-0331-42c7-8508-f298ec3830cc)
![Screenshot_20230521-232200](https://github.com/mabarm/Tic-Tac-Toe/assets/25671335/1480d29c-7cca-40b1-b02e-87c3c34af6f9)
![Screenshot_20230521-232215](https://github.com/mabarm/Tic-Tac-Toe/assets/25671335/cc9b60b2-a481-4a67-8dea-fefb994d0ae0)
![Screenshot_20230521-232220](https://github.com/mabarm/Tic-Tac-Toe/assets/25671335/3fc62754-3790-4552-bd14-9e73791d09bc)
![Screenshot_20230521-232226](https://github.com/mabarm/Tic-Tac-Toe/assets/25671335/9dc7477e-e930-4c9e-9d95-2dd16d42f7dd)
![Screenshot_20230521-232234](https://github.com/mabarm/Tic-Tac-Toe/assets/25671335/65c79442-df9d-4186-819f-9ef6606a1dc2)
![Screenshot_20230521-232240](https://github.com/mabarm/Tic-Tac-Toe/assets/25671335/5b757eff-b467-4279-a7f7-f4a8a65aaa32)
![Screenshot_20230521-232303](https://github.com/mabarm/Tic-Tac-Toe/assets/25671335/006ff995-6541-439c-b2dc-5aec40ab8bcd)


https://github.com/mabarm/Tic-Tac-Toe/assets/25671335/5f0f63eb-ab8c-4949-bc4f-1fd955835d4e

1335/d223ac7f-cf9f-49eb-9bbc-32a0436d1e5b)



## Conclusion

Use this information as a guide to understand and make modifications to the app according to your needs. Enjoy playing Tic-tac-toe!
