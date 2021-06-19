import React from 'react';
import { Text, View, Image } from 'react-native';

//styles
import styles from './InfoCard.styles';

const InfoCard = ({ backgroundColor, marginBottom, title, imageUrlFirst, imageUrlSecond, descriptionFirst, descriptionSecond }) => {
	return (
		<View style={[styles.container, { backgroundColor: backgroundColor, marginBottom: marginBottom }]}>
			<Text style={styles.title}>{title}</Text>

			<View style={[styles.content, { marginBottom: 16 }]}>
				<Image source={imageUrlFirst} style={styles.image} />
				<Text style={styles.description}>{descriptionFirst}</Text>
			</View>
			<View style={styles.content}>
				<Image source={imageUrlSecond} style={styles.image} />
				<Text style={styles.description}>{descriptionSecond}</Text>
			</View>
		</View>
	)
};

export default InfoCard;