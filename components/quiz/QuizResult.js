import {Button, Text, Content} from "native-base";
import React, {Fragment} from "react";
import {StyleSheet} from "react-native";

const QuizResult = ({ onReset, score, totalNrOfCards }) => {

    const styles = StyleSheet.create({
        padding: {
            paddingTop: 10,
            paddingBottom: 10
        },
        marginBottom: {
            marginBottom: 10,
        }
    });

    let percentage = ((score / totalNrOfCards) * 100).toFixed(1);
    percentage = percentage % 1 > 0 ? percentage : Math.round(percentage);

    return <Fragment>
                <Text style={styles.padding}>{`Your score is ${percentage}%`}</Text>
                <Button
                style={styles.marginBottom}
                block
                onPress={() => onReset(true)}>
                  <Text> Restart Quiz </Text>
                </Button>
                <Button
                block
                onPress={() => onReset(false)}>
                  <Text> Back to Deck </Text>
                </Button>
            </Fragment>
};

export default QuizResult;
