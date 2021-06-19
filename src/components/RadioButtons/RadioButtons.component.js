import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

//styles
import styles from './RadioButtons.styles';

const RadioButtons = (props) => {
	const [selected, setSelected] = React.useState(null);
	const [selectedItem, setSelectedItem] = React.useState(null);
	const [skip, setSkip] = React.useState(true)

	useEffect(() => {
		props.setDisabledButton(true)
		props.data.answers.forEach((item) => {
			if (item.value == 'true') {
				setSelected(item.id)
				setSelectedItem(item)
				props.setDisabledButton(false)
			}
		})
		console.log(props.data)
	}, [])
	const onRadioButtonsChange = (e) => {
		let tempData = [...props.data.answers]
		tempData.forEach((radio) => {
			radio.value = 'false';
		})
		props.setData({ ...props.data, answers: tempData })
	}

	useEffect(() => {
		if (selected !== null && !skip) {
			console.log(selected)
			let tempData = [...props.data.answers]
			tempData.forEach((radio) => {
				radio.value = 'false';
			})
			tempData.forEach((radio) => {
				if (radio.id === selected) {
					radio.value = "true";
					if (radio.value === 'true')
						setTimeout(() => { props.onClickNextPage() }, 300)
				}
			})
			props.setData({ ...props.data, answers: tempData })
		}
	}, [selected])

	return (
		<View style={styles.container}>
			{props.data.answers.map((rb) => {
				switch (props.type) {
					case 'normal': {
						return (
							<TouchableOpacity
								activeOpacity={0.8}
								style={styles.radioButtonBox}
								onPress={() => {
									setSelected(rb.id)
									setSelectedItem(rb)
									setSkip(false)
								}}>

								<RadioButton
									color='#4D4DFF'
									uncheckedColor='#7F8081'
									value={rb.id}
									onPress={() => {
										setSkip(false)
										setSelected(rb.id)
										setSelectedItem(rb)
									}}
									status={selected === rb.id ? 'checked' : 'unchecked'}
								/>

								<Text style={styles.radioButtonText}>{rb.title}</Text>
							</TouchableOpacity>
						)
					}
				}
			})}
		</View>
	);
}

export default RadioButtons;