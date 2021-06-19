import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

//styles
import styles from './WhyScreen.styles';

//components
import CardAnswer from '../../components/CardAnswer/CardAnswer.component';

//icons
import IconClose from 'react-native-vector-icons/AntDesign';

//nav
import { useNavigation } from '@react-navigation/native';

import CheckBoxComponent from '../../components/CheckBox/CheckBox.component';

const WhyScreen = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>

			{/* <CheckBoxComponent
				type={'normal'}
			/> */}
		</View>
	)
};

export default WhyScreen;