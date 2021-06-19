import React from 'react';

//nav
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import { Recommendation, WhyScreen } from '../screens';
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
				showLabel: false
			}}>

			<Tab.Screen
				name='tab/stackNavigation'
				component={StackNavigation}
				options={{
					tabBarLabel: 'To do',
					tabBarIcon: getTabBarIcon('ios-document-text-outline'),
				}}
			/>

			<Tab.Screen
				name='tab/recommendation'
				component={Recommendation}
				options={{
					tabBarLabel: 'To do',
					tabBarIcon: getTabBarIcon('ios-receipt-outline'),
				}} />

			<Tab.Screen
				name='tab/whyScreen'
				component={WhyScreen}
				options={{
					tabBarLabel: 'To do',
					tabBarIcon: getTabBarIcon('newspaper-outline'),
				}} />

		</Tab.Navigator>
	)
}
export default TabNavigation;