import React from 'react';
import { Text, View, Image } from 'react-native';

//styles
import styles from './OnBoard.styles';

const onBoard = ({ image, image_url, title, description, setDisabledButton }) => {
	setDisabledButton(false)
	return (
		<View style={styles.container}>
			{image !== null && <Image source={image_url} style={styles.image} alt='' />}

			<Text style={styles.question}>{title}</Text>

			<Text style={styles.paragraph}>{description}</Text>
		</View>
	);
}

export default onBoard;