import React from 'react';

import {
    Text,
    Container,
    Input,
    Button,
    Content,
    Item
} from "native-base";
import {connect} from "react-redux";
import {addDeck} from "../../actions/decks";

class AddDeck extends React.Component {
    static navigationOptions = {
        title: 'Add Deck',
    };

    state = {
        title: ''
    };

    handleChangeTitle = value => {
        this.setState({
            title: value
        })
    };

    handleSubmit = () => {
        const { dispatch, navigation } = this.props;

        const newDeckAction = addDeck(this.state.title);
        dispatch(newDeckAction);

        navigation.replace(
            'Deck',
            { deckId: newDeckAction.id,
                deckTitle: this.state.title,
            }
        );

        this.setState({
            title: ''
        });

    };

    render() {
        return (
            <Container>
                <Content padder>
                    <Item regular>
                        <Input
                        onChangeText={this.handleChangeTitle}
                        placeholder="Give this deck a title"
                        value={this.state.title}/>
                    </Item>
                    <Button
                    block
                    disabled={this.state.title === ''}
                    onPress={this.handleSubmit}>
                      <Text> Create Deck </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default connect()(AddDeck)
