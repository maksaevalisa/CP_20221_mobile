import React from 'react';

//screens
import { Form } from '../screens';
import SurveysMiddleware from './SurveysMiddleware';

//nav
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigation = () => (
	<Stack.Navigator
		initialRouteName='surveysMiddleware'
	>

		<Stack.Screen
			name='surveysMiddleware'
			component={SurveysMiddleware}
			options={{
				title: 'Анкета',
				headerTitleAlign: 'center',
			}} />

		<Stack.Screen
			name='form'
			component={Form}
			options={{
				//headerTransparent: true,
				title: 'Анкета',
				headerTitleAlign: 'center',
				headerLeft: null
			}} />
	</Stack.Navigator>
);

export default StackNavigation;