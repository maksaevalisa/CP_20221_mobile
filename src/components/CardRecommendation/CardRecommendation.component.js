import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

//styles
import styles from './CardRecommendation.styles';

//icons
import RowRight from 'react-native-vector-icons/AntDesign';

const Tabs = ({ title, onPress }) => {
	return (
		<TouchableOpacity style={styles.tab} onPress={onPress}>
			<Text style={styles.tabText}>{title}</Text>
			<View style={styles.rowBox} activeOpacity={0.8} onPress={onPress}>
				<RowRight name="right" size={16} color="#fff" />
			</View>
		</TouchableOpacity>
	)
}

const CardRecommendation = ({ onPress, product }) => {
	return (
		<View style={styles.container}>
			<View style={styles.vitaminContainer}>
				<View style={styles.vitaminNameContainer}>
					<Text style={styles.vitaminNameText}>{product.product.product_charcode}</Text>
				</View>

				<View style={styles.vitaminTextContainer} >
					<Text style={styles.vitaminTitle}>{product.product.product_internal_name}</Text>
					<Text style={styles.vitaminDescription}>{product.product.description_instruction}</Text>
				</View>
			</View>

			<ScrollView style={styles.tabsContainer}>
				{product.actions.map((action) => {
					return (
						<Tabs
							title={action.title}
							onPress={onPress} />
					)
				})}
			</ScrollView>

			<TouchableOpacity
				style={styles.moreDetails}
				activeOpacity={0.7}
				onPress={onPress}>

				<Text style={styles.moreDetailsText} >Подробнее</Text>
				<RowRight name="right" size={12} color="#7F8081" style={{ marginTop: 5 }} />
			</TouchableOpacity>
		</View>
	);
}

export default CardRecommendation;