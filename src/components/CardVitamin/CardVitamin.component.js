import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//styles
import styles from './CardVitamin.styles';

const CardVitamin = () => {
	return (
		<View style={styles.container}>
			<View style={styles.vitaminContainer}>
				<View style={styles.vitaminNameContainer}>
					<Text style={styles.vitaminNameText}>Zn</Text>
				</View>

				<View style={styles.vitaminTextContainer} >
					<Text style={styles.vitaminTitle}>Анализ крови на витамин B9</Text>
				</View>
			</View>

		</View>
	);
}

export default CardVitamin;