import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({ title }) => {
	return (
		<View style={styles.container} >
			<Text style={styles.headerText}>{title}</Text>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		width: '100%',
		height: 56,
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerText: {
		fontSize: 19,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Medium',
		lineHeight: 23.8,
	}
});

export default Header;