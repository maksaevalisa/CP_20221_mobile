import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import CheckBox from '@react-native-community/checkbox';

//styles
import styles from './CheckBox.styles';

const CheckBoxComponent = (props) => {
	const [selected, setSelected] = useState([])
	const [skip, setSkip] = useState(true)
	useEffect(() => {
		let tempSelected = [...selected]
		props.setDisabledButton(true)
		props.data.answers.forEach((item) => {
			if (item.value == 'true') {
				tempSelected.push(item.id)
				props.setDisabledButton(false)
			}
		})
		setSelected([...tempSelected])
	}, [])

	const onChangeCheckBox = (id) => {
		console.log(id)
		if (selected.indexOf(id) !== -1) {
			setSelected(selected.filter(select => select !== id))
		} else {
			setSelected([...selected, id])
		}
	}

	useEffect(() => {
		if (!skip) {
			console.log("useEffect")
			console.log(selected)
			props.setDisabledButton(true)
			let tempData = [...props.data.answers]
			tempData.forEach((checkbox) => {
				if (selected.indexOf(checkbox.id) !== -1) {
					checkbox.value = 'true';
				} else {
					checkbox.value = 'false';
				}
			})
			props.setData({ ...props.data, answers: tempData })
			props.setDisabledButton(selected.length === 0)
		}
	}, [selected])

	return (
		<View style={styles.container}>
			{props.data.answers.map((cb, index) => {
				switch (props.type) {
					case 'normal': {
						return (
							<TouchableOpacity style={styles.checkBox} key={cb.id} onPress={() => {
								console.log('press')
								onChangeCheckBox(cb.id)
								setSkip(false)
							}}>
								<CheckBox
									value={selected.indexOf(cb.id) !== -1}
									tintColors={{
										true: '#4D4DFF',
										false: '#7F8081'
									}}
									onChange={() => {
										console.log('press')
										onChangeCheckBox(cb.id)
										setSkip(false)
									}}
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

