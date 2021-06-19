import React from 'react';
import { Text, View } from 'react-native';

//styles
import styles from './CardAnswer.styles';

const CardAnswer = ({ title, descripton }) => {
	return (
		<View style={styles.CardAnswerBox}>
			<Text style={styles.CardAnswerTitle}>{title}</Text>
			<Text style={styles.CardAnswerDescription}>{descripton}</Text>
		</View>
	)
};

export default CardAnswer;

