import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 16,
		paddingTop: 16,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 16,
	},
	question: {
		fontSize: 18,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Medium',
		lineHeight: 25.2,
	},
});

export default styles;