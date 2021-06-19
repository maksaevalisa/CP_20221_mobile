import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import CheckBox from '@react-native-community/checkbox';

//styles
import styles from './CheckBox.styles';

const CheckBoxComponent = (props) => {

	return (
		<View style={styles.container}>
			{props.data.answers.map((cb, index) => {
				switch (props.type) {
					case 'normal': {
						return (
							<TouchableOpacity style={styles.checkBox} key={cb.id}>
								<CheckBox
									disabled={false}
									value={cb}
								//onValueChange={onCheckBoxesChange}
								/>
								<Text style={styles.checkBoxText}>{cb.title}</Text>
							</TouchableOpacity>
						)
					}
				}
			})
			}
		</View>
	)
};

export default CheckBoxComponent;

