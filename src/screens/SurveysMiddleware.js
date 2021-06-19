import React, { useEffect, useState } from "react";
import { View, Alert, Text } from 'react-native';
import { surveyAPI } from "../api/api";
import SyncStorage from 'sync-storage';

//nav
import { useNavigation } from '@react-navigation/native';

//screen
import { StartScreen } from "../screens";

const paramsIdSurvey = 'a8d9ea04-2ef9-4ed9-9ff4-bf2ebe168c8d';

const SurveysMiddleware = () => {
	const navigation = useNavigation();

	const [redirect, setRedirect] = useState(false);
	const [idSurvey, setIdSurvey] = useState(null)

	useEffect(() => {
		if (SyncStorage.get('sessionIdSurvey') == null)
			surveyAPI.createSession(paramsIdSurvey)
				.then(response => {
					console.log(response.data)
					setIdSurvey(response.data.id)
					SyncStorage.set('sessionIdSurvey', response.data.id)
					SyncStorage.set('redirectRecommendation', 'false')
					setRedirect(true)
				}).catch(error => {
				})
		else {
			setIdSurvey(SyncStorage.get('sessionIdSurvey'))
			setRedirect(true)
		}
	}, [])
	if (redirect) {
		console.log(SyncStorage.get('sessionIdSurvey'))
		return (
			<StartScreen
				onPress={() => {
					navigation.navigate('form')
				}} />
		)
	}
	return (
		<View>
			<Text>
				{redirect}
				loading!!!
			</Text>
		</View>
	)
};

export default SurveysMiddleware;