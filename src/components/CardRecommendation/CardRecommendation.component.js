import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

//styles
import styles from './CardRecommendation.styles';

//icons
import RowRight from 'react-native-vector-icons/AntDesign';

const Tabs = ({ title, onPress }) => {
	return (
		<View style={styles.tab}>
			<Text style={styles.tabText}>{title}</Text>
			<TouchableOpacity style={styles.rowBox} activeOpacity={0.8} onPress={onPress}>
				<RowRight name="right" size={16} color="#fff" />
			</TouchableOpacity>
		</View>
	)
}

const CardRecommendation = ({ onPress,product,setActions }) => {
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

			<View style={styles.tabsContainer}>
				
				{product.actions.map((action)=>{
					
					return(
						<Tabs
						title={action.title}
						onPress={onPress} />
					)
				})}
			
			</View>

			<View
				style={styles.moreDetails}
				activeOpacity={0.7}>

				<Text style={styles.moreDetailsText}>Подробнее</Text>
				<RowRight name="right" size={12} color="#7F8081" style={{ marginTop: 4 }} />
			</View>
		</View>
	);
}

export default CardRecommendation;