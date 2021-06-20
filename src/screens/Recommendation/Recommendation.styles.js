import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 44
	},
	content: {
		width: '100%',
		paddingHorizontal: 16,
		marginTop: 32,
	},
	paragraph: {
		width: '95%',
		fontSize: 16,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Regular',
		lineHeight: 22.4,
		marginBottom: 16,
	},
	imagesContainer: {
		width: '100%',
		flexDirection: 'row',
		flexWrap: "wrap",
	},
	imageBox: {
		width: '33%',
		height: 72,
		alignItems: 'center',
	},
	imageDescription: {
		fontSize: 14,
		color: '#3F3F3F',
		fontFamily: 'Graphik-Regular',
		lineHeight: 19.6,
	},
	recommendation: {
		fontSize: 22,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Medium',
		lineHeight: 30.8,
	},
	recommendationDescription: {
		width: '95%',
		fontSize: 14,
		color: '#7F8081',
		fontFamily: 'Graphik-Regular',
		lineHeight: 19.6,
		marginTop: 8
	},
	CardRecommendationContainer: {
		marginTop: 24,
		paddingHorizontal: 16,
	},
	buttonContainer: {
		paddingHorizontal: 16,
		marginTop: 24,
		marginBottom: 64,
	}
});

export default styles;