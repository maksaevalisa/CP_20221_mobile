import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingHorizontal: 16,
		//paddingTop: 16,
	},
	content: {
		marginBottom: 72,
		width: '100%',
	},
	textSteps: {
		fontSize: 16,
		color: '#3F3F3F',
		fontFamily: 'Graphik-Regular',
		lineHeight: 22.4,
		marginBottom: 8,
	},
	image: {
		width: '100%',
		marginBottom: 24
	},
	question: {
		fontSize: 22,
		lineHeight: 30.8,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Medium',
	},
	paragraph: {
		fontSize: 18,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Regular',
		lineHeight: 25.2,
		//marginTop: 16,
		//marginBottom: 24
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		position: 'absolute',
		bottom: 16,
	},
});

export default styles;