import React, { useEffect, useState } from "react";
import { View, Alert, Text } from 'react-native';
import { surveyAPI } from "../api/api";
import SyncStorage from 'sync-storage';

//nav
import { useNavigation } from '@react-navigation/native';

//screen
import { StartScreen } from "../screens";

const paramsIdSurvey = '2e95d454-d62e-474a-bea9-d10675213afe';

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