import {connect} from "react-redux";
import React from 'react';
import {
    H3,
    Text,
    Container,
    Content,
    Button
} from "native-base";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        alignItems: 'center'
    },
    padding: {
        paddingTop: 10,
        paddingBottom: 10
    },
    marginBottom: {
        marginBottom: 10,
    }
});

class Deck extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('deckTitle', 'Deck'),
        };
    };

    render() {
        const { deck, navigation } = this.props;
        const canStartQuiz = Object.values(deck.cards).length > 0;
        return (
            <Container style={styles.centered}>
                <Content padder>
                    <H3 style={styles.padding}>
                      {deck.title} {`(${Object.values(deck.cards).length} cards)`}
                    </H3>
                    <Button
                    style={styles.marginBottom}
                    block
                    bordered={canStartQuiz}
                    onPress={() => navigation.navigate(
                        'AddCard',
                        { deckId: deck.id }
                    )}>
                        <Text> Add Card </Text>
                    </Button>
                    <Button
                    disabled={!canStartQuiz}
                    block
                    onPress={() => navigation.navigate(
                        'Quiz',
                        { deckId: deck.id }
                    )}>
                        <Text> Start quiz </Text>
                    </Button>


                </Content>


            </Container>
        );
    }
}

function mapStateToProps({decks}, props) {
    const { deckId } = props.navigation.state.params;

    return {
        deck: decks[deckId]
    }
}
export default connect(mapStateToProps)(Deck)
