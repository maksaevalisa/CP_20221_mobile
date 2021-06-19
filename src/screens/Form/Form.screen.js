import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SyncStorage from 'sync-storage';

//api
import { appFormsAPI, surveyAPI } from "../../api/api";

//styles
import styles from './Form.styles';

//components
import ButtonPrev from '../../components/ButtonPrev/ButtonPrev.component';
import ButtonNext from '../../components/ButtonNext/ButtonNext.component';
import OnBoard from '../../components/OnBoard/OnBoard.component';
import RadioBattons from '../../components/RadioButtons/RadioButtons.component';
import Inputs from '../../components/Inputs/Inputs.component';
import CheckBoxComponent from '../../components/CheckBox/CheckBox.component';

//nav
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

const Form = () => {
	const navigation = useNavigation();

	const [data, setData] = useState();
	const [fetch, setFetch] = useState(true);
	const [phone, setPhone] = useState('');
	const [disabledButton, setDisabledButton] = useState(true);
	const [redirectRecommendation, setRedirectRecommendation] = useState(false);
	const [redirectSurvey, setRedirectSurvey] = useState(false);
	const [tokenRecommendation, setTokenRecommendation] = useState('');
	const [loading, setLoading] = useState(false);
	const [sobralos, setSobralos] = useState(false)
	// const refBack = useRef(null)
	//const { idSurvey, otherParam } = route.params;

	const idSession = SyncStorage.get('sessionIdSurvey');

	const Loading = () => {
		setFetch(false)
		setTimeout(() => {
			if (SyncStorage.get('redirectRecommendation') == 'false') {
				SyncStorage.set('redirectRecommendation', 'true')
				surveyAPI.smsRegistrationWithoutData(idSession)
					.then(resa => {
						console.log(resa.data)
						setTokenRecommendation(resa.data.detailed_recommendation_uuid);
						SyncStorage.set('sessionIdSurvey', null)
						SyncStorage.set('tokenRecommendations', resa.data.detailed_recommendation_uuid)

						setRedirectRecommendation(true)
					}).catch()
			}
		}, 1200)

		if (redirectRecommendation) {
			//navigation.dispatch(StackActions.popToTop());
			navigation.navigate('tab/recommendation')
			//setLoading(false)
			setSobralos(true)
		}
		if (!sobralos) {
			return (
				<View style={styles.collectOrder}>
					<Text>Собираем ваш набор</Text>
					<View style={styles.loading}>
					</View>
					<View style={styles.loadText}><Text>Подбираем витамины</Text></View>
				</View>
			)
		} else {
			return (
				<View style={styles.collectOrder}>
					<Text>Вы уже собрали пакет</Text>
					<View style={styles.loading}>
					</View>
					<View style={styles.loadText}><Text>Идите нахуй</Text></View>
					<TouchableOpacity
						style={styles.wrapp}
						activeOpacity={0.8}
						onPress={() => {
							console.log()
							navigation.reset({
								index: 0,
								routes: [{ name: 'surveysMiddleware' }]
							})
						}}>

						<Text style={styles.text}>Назад</Text>
					</TouchableOpacity>
				</View>
			)
		}

	}

	useEffect(() => {
		setFetch(true)
		console.log("void" + SyncStorage.get('sessionIdSurvey'))
		if (SyncStorage.get('sessionIdSurvey') != idSession) {
			setIdSession(SyncStorage.get('sessionIdSurvey'))
			setRedirectSurvey(true)
		}

	}, [])

	useEffect(() => {
		setFetch(true)
		console.log("IdSESS" + idSession)
		surveyAPI.getCurrentPage(idSession)
			.then(response => {
				console.log(response.data)
				if (!response.data.is_null) {
					let tempData = { ...response.data.page.attributes }
					tempData.answers.forEach((answer, index) => {
						response.data.page.answers.forEach(answerServer => {
							if (answerServer.key === answer.key) {
								tempData.answers[index].value = answerServer.value.content
							}
							if (answerServer.key == 'phone')
								setPhone(answerServer.value.content)
						})
					})
					setData(tempData)
				} else
					setLoading(true)
				setFetch(false)
			}).catch(error => {
				// alert('Такой страницы не существует')
				setFetch(false)
			})
	}, [idSession])

	const onClickNextPage = () => {
		setFetch(true)
		const pageAnswers = {
			answers: []
		}
		data.answers.forEach(answer => {
			pageAnswers.answers.push(
				{
					key: answer.key,
					value: { content: answer.value }
				}
			)
		})
		console.log(JSON.stringify(pageAnswers))
		surveyAPI.getNextPage(idSession, pageAnswers)
			.then(response => {
				if (!response.data.is_null) {
					let tempData = { ...response.data.page.attributes }
					tempData.answers.forEach((answer, index) => {
						response.data.page.answers.forEach(answerServer => {
							if (answerServer.key === answer.key) {
								tempData.answers[index].value = answerServer.value.content
							}
							if (answerServer.key == 'phone')
								setPhone(answerServer.value.content)
						})
					})
					setData(tempData)
				} else
					setLoading(true)
				setFetch(false)
				/*setAnswers(response.data.answers)
				console.log(response.data)*/
			}).catch(error => {
				// alert('Такой страницы не существует')
				setFetch(false)
			})
	}
	const onClickPrevPage = () => {
		setFetch(true)
		const pageAnswers = {
			answers: []
		}
		data.answers.forEach(answer => {
			pageAnswers.answers.push(
				{
					key: answer.key,
					value: { content: answer.value }
				}
			)
		})
		surveyAPI.getPreviousPage(idSession, pageAnswers)
			.then(response => {
				let tempData = { ...response.data.page.attributes }
				tempData.answers.forEach((answer, index) => {
					response.data.page.answers.forEach(answerServer => {
						if (answerServer.key === answer.key) {
							tempData.answers[index].value = answerServer.value.content
						}

						if (answerServer.key == 'phone')
							setPhone(answerServer.value.content)
					})
				})
				setData(tempData)
				setFetch(false)
			}).catch(error => {
				// alert('Такой страницы не существует')
				setFetch(false)
			})
	}

	if (redirectSurvey) {
		navigation.navigate('tab/stackNavigation')
	}

	return (
		<View style={styles.container}>
			{loading ?
				<Loading /> :
				<>
					{!fetch ?
						<>
							<ScrollView style={styles.content}
								showsVerticalScrollIndicator={false}>
								{data.type !== 'PROLOGUE' && <Text style={styles.textSteps}>Шаг {data.current_step} из {data.steps_count}</Text>}

								{((data.title !== 'empty' && data.title !== '') && data.type !== 'PROLOGUE') &&
									<Text style={styles.question}>{data.title}</Text>}

								{((data.description !== 'empty' && data.description !== '') && data.type !== 'PROLOGUE') &&
									<Text style={styles.paragraph}>{data.description}</Text>}

								{data.type === 'PROLOGUE' &&
									<OnBoard
										image={data.image}
										image_url={require(`../../assets/images/OnBoard.png`)}
										title={data.title}
										setDisabledButton={setDisabledButton}
										description={data.description} />}

								{data.type === 'CHECKBOXES' && <CheckBoxComponent
									setDisabledButton={setDisabledButton}
									type={'normal'}
									data={data}
									setData={setData}
								/>}

								{data.type === 'INPUT_TEXT' &&
									<Inputs
										setDisabledButton={setDisabledButton}
										type={'text'}
										data={data}
										setData={setData} />}

								{data.type === 'INPUT_NUMBER' &&
									<Inputs
										setDisabledButton={setDisabledButton}
										type={'number'}
										data={data}
										setData={setData} />}

								{data.type === 'RADIOBUTTONS' &&
									<RadioBattons
										type={'normal'}
										data={data}
										setDisabledButton={setDisabledButton}
										setData={setData}
										onClickNextPage={onClickNextPage}
									/>}

								{data.type === 'RADIOBUTTONS_IMAGE' &&
									<RadioBattons
										type={'image'}
										data={data}
										setData={setData} />}
							</ScrollView>

							<View style={styles.buttonContainer}>
								<ButtonPrev
									onPress={onClickPrevPage}
									disabledButton={disabledButton} />
								<ButtonNext
									disabledButton={disabledButton}
									title='Далее'
									onPress={onClickNextPage} />
							</View>
						</>
						:
						<View style={styles.content}>
							<Text style={{ fontFamily: 'Graphik-Medium' }}>loading...</Text>
						</View>
					}
				</>
			}
		</View>
	)
}

export default Form;