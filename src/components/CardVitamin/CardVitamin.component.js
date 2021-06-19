import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//styles
import styles from './CardVitamin.styles';

const CardVitamin = ({name, text}) => {
	return (
		<View style={styles.container}>
			<View style={styles.vitaminContainer}>
				<View style={styles.vitaminNameContainer}>
					<Text style={styles.vitaminNameText}>{name}</Text>
				</View>

				<View style={styles.vitaminTextContainer} >
					<Text style={styles.vitaminTitle}>{text}</Text>
				</View>
			</View>

		</View>
	);
}

export default CardVitamin;