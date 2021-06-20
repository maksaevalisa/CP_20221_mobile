import React from 'react';

//nav
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import { Recommendation, WhyScreen, BlockScreen } from '../screens';
import StackNavigation from './StackNavigation.navigation';

//other deps
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (name) =>
	({ color }) => <Ionicons name={name} color={color} size={28} />;

const TabNavigation = () => {
	return (
		<Tab.Navigator
			initialRouteName='tab/stackNavigation'
			tabBarOptions={{
				inactiveBackgroundColor: '#fff',
				activeBackgroundColor: '#fff',
				inactiveTintColor: '#000',
				activeTintColor: '#4D4DFF',
				labelStyle: {
					fontSize: 14,
					fontFamily: 'Graphik-Regular',
				}
			}}>

			<Tab.Screen
				name='tab/stackNavigation'
				component={StackNavigation}
				options={{
					tabBarLabel: 'Анкета',
					tabBarIcon: getTabBarIcon('ios-document-text-outline'),
				}}
			/>

			<Tab.Screen
				name='tab/recommendation'
				component={Recommendation}
				options={{
					tabBarLabel: 'Рекомендации',
					tabBarIcon: getTabBarIcon('ios-receipt-outline'),
				}} />

			<Tab.Screen
				name='tab/blockScreen'
				component={BlockScreen}
				options={{
					tabBarLabel: 'Блог',
					tabBarIcon: getTabBarIcon('newspaper-outline'),
				}} />

		</Tab.Navigator>
	)
}
export default TabNavigation;