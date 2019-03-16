import {connect} from "react-redux";
import React from 'react';

import {
    Text,
    Container,
    Card,
    CardItem,
    Content,
    Body,
    Fab,
    Icon,
} from "native-base";
import {DeckListItem} from "./DeckListItem";

class DeckList extends React.Component {
    static navigationOptions = {
        title: 'Udacicards',
    };

    render() {
        const { decks, navigation } = this.props;
        const decksArray = Object.values(decks);

        return (
            <Container>
                <Content padder>
                    { decksArray.length === 0 &&
                        <Text>It seems you have no decks yet. Go ahead and create one!</Text>
                    }

                    {decksArray.map(deck => (
                        <DeckListItem
                        title={deck.title}
                        nrOfQuestions={Object.values(deck.cards).length}
                        onPress={() => this.props.navigation.navigate(
                            'Deck',
                            { deckId: deck.id,
                                deckTitle: deck.title,
                            }
                        )} key={deck.id}/>
                    ))}

                </Content>

                <Fab
                    style={{ backgroundColor: '#DD5144' }}
                    position="bottomRight"
                    onPress={() => navigation.navigate('AddDeck')}>
                    <Icon name="add" />
                </Fab>
            </Container>
        );
    }
}

function mapStateToProps({decks}) {
    return {
        decks: decks
    }
}
export default connect(mapStateToProps)(DeckList)
