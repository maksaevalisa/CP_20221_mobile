import React, { useEffect } from 'react';
import { Text, TextInput, View } from 'react-native';

//styles
import styles from './Inputs.styles';

const Inputs = (props) => {
	// focusedInput = () => {
	// 	this.textInput.setNativeProps({
	// 		style: { borderColor: '#4D4DFF', borderWidth: 1 }
	// 	})
	// }

	useEffect(() => {
		props.setDisabledButton(true)
		props.data.answers.forEach((item) => {
			if (item.value != '' || (props.type == 'phone' && item.value.length == 18)) {
				props.setDisabledButton(false)
			}
		})
		console.log(props.data.answers)
	}, [])
	const disBtn = (data) => {
		let dis = false;
		data.forEach(item => {
			if (item.value === "") {
				dis = true
			}
			else {
				if (props.type === "email") {
					dis = validateEmail(item.value)
				}
			}
		})
		props.setDisabledButton(dis)
	}
	return (
		<View style={styles.container}>
			{props.data.answers.map((inp, index) => {
				switch (props.type) {
					case 'text': {
						return (
							<View key={inp.id} >
								<Text style={styles.question}>{inp.title}</Text>

								{inp.second_hint != 'empty' &&
									<Text style={styles.paragraph}>{inp.second_hint}</Text>}

								<View>
									<TextInput
										style={styles.input}
										//autoFocus
										onChange={(e) => {
											let tempData = { ...props.data }
											tempData.answers[index].value = e.nativeEvent.text
											props.setData(tempData)
											disBtn(tempData.answers);
										}}
										value={inp.value}
										id={inp.id}
									// ref={c => {textInput = c }}
									// onFocus={focusedInput}
									/>
								</View>
							</View>
						)
					}

					case 'number': {
						return (
							<View key={inp.id} >
								<Text style={styles.question}>{inp.title}</Text>

								{inp.second_hint != 'empty' &&
									<Text style={styles.paragraph}>{inp.second_hint}</Text>}

								<View>
									<TextInput
										keyboardType='number-pad'
										style={styles.input}
										//autoFocus
										onChange={(e) => {
											let tempData = { ...props.data }
											tempData.answers[index].value = e.nativeEvent.text
											props.setData(tempData)
											disBtn(tempData.answers);
										}}
										value={inp.value}
										id={inp.id}
									// ref={c => {textInput = c }}
									// onFocus={focusedInput}
									/>
								</View>
							</View>
						)
					}
				}
			})}
		</View>
	)
}

export default Inputs;