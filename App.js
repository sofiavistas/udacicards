import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import platformVariables from 'native-base/src/theme/variables/platform'

import DeckList from "./components/deck/DeckList";
import AddDeck from "./components/deck/AddDeck";
import Deck from "./components/deck/Deck";
import Quiz from "./components/quiz/Quiz";
import {persistor, store, storedStatePromise} from "./store";
import AddCard from "./components/deck/AddCard";
import {sameDay, setLocalNotification} from "./utils/helpers";

const MainNavigator = createStackNavigator({
        DeckList: {
            screen: DeckList,
        },
        AddDeck: {
            screen: AddDeck,
        },
        AddCard: {
            screen: AddCard,
        },
        Deck: {
            screen: Deck,
        },
        Quiz: {
            screen: Quiz,
        },
    },
    {
        initialRouteName: 'DeckList',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: platformVariables.brandPrimary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    });

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
    state = {
        isReady: false
    };

    componentDidMount() {
        storedStatePromise
            .then((restoredState) => {
                let currentDate = new Date();

                if(restoredState) {
                    const { quiz } = restoredState;
                    const {lastFinishedQuizDate} = quiz;

                    if(lastFinishedQuizDate) {
                        const lastFinishedQuizDateObject = new Date(lastFinishedQuizDate);
                        if(sameDay(lastFinishedQuizDateObject, currentDate)) {
                            currentDate.setDate(currentDate.getDate() + 1);
                        }
                    }
                }
                setLocalNotification(currentDate);
            });
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("native-base/Fonts/Ionicons.ttf"),

        });
        this.setState({ isReady: true });
    }

  render() {
      if (!this.state.isReady) {
          return <Expo.AppLoading />;
      }

      return (
        <Provider store={store}>
            <PersistGate
            loading={null}
            persistor={persistor}>
                <View style={styles.container}>
                    <AppContainer
                    uriPrefix="/app"
                    style={{flex:1}}/>
                </View>
            </PersistGate>
        </Provider>
      )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
