import React, {Fragment} from "react";
import {
    Button,
    Text,
    Content
} from "native-base";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    padding: {
        paddingTop: 20,
        paddingBottom: 20
    },
    marginBottom: {
        marginBottom: 10,
    }
});

class QuizQuestion extends React.Component {

    state = {
      showAnswer: false,
    };

    handleShowAnswer = () => {
        this.setState({
            showAnswer: true,
        })
    };

    handlerAnswerQuestion = (wasCorrect) => {
        this.setState({
          showAnswer: false
        });

        this.props.onAnswered(wasCorrect);
    };

    render() {
        const { nrOfRemainingCards, card } = this.props;
        const { showAnswer } = this.state;

        return (
            <Fragment>
                <Text>{`You have ${nrOfRemainingCards} question(s) remaining`}</Text>
                <Text style={styles.padding}>Question: {card.question}</Text>
                {!showAnswer ?   (
                    <Fragment>
                        <Button
                        style={styles.paddingBottom}
                        block
                        onPress={this.handleShowAnswer}>
                          <Text> Show Answer </Text>
                        </Button>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Text style={styles.padding}>Answer: {card.answer}</Text>
                        <Button
                        style={styles.marginBottom}
                        block
                        onPress={() => this.handlerAnswerQuestion(true)}
                        success><Text> Correct </Text></Button>
                        <Button
                        block
                        onPress={() => this.handlerAnswerQuestion(false)}
                        danger>
                          <Text> Incorrect </Text><
                        /Button>
                    </Fragment>
                    )}
            </Fragment>

        );
    }
}

export default QuizQuestion
