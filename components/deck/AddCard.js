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
import {addDeckCard} from "../../actions/decks";

class AddDeck extends React.Component {
    static navigationOptions = {
        title: 'Add Card',
    };

    state = {
        question: '',
        answer: '',
    };

    handleQuestionChange = value => {
        this.setState({
            ...this.state,
            question: value
        })
    };

    handleAnswerChange = value => {
        this.setState({
            ...this.state,
            answer: value
        })
    };

    handleSubmit = () => {
        const { dispatch, navigation } = this.props;

        dispatch(addDeckCard({
            ...this.state,
            deckId: navigation.state.params.deckId
        }));

        this.setState({
            question: '',
            answer: '',
        });

        navigation.goBack();
    };

    handleCancel = () => {
        const {navigation} = this.props;

        this.setState({
            question: '',
            answer: '',
        });

        navigation.goBack();
    };

    render() {
        const { question, answer } = this.state;
        const canSave = question !== '' && answer !== '';

        return (
            <Container>
                <Content padder>
                    <Item regular>
                        <Input
                        onChangeText={this.handleQuestionChange}
                        placeholder="Question"
                        value={question}/>
                    </Item>
                    <Item regular>
                        <Input
                        onChangeText={this.handleAnswerChange}
                        placeholder="Answer"
                        value={answer}/>
                    </Item>
                    <Button
                    block
                    disabled={!canSave}
                    onPress={this.handleSubmit}>
                      <Text> Save card </Text>
                    </Button>
                    <Button
                    danger
                    block
                    onPress={this.handleCancel}>
                      <Text> Cancel </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default connect()(AddDeck)
