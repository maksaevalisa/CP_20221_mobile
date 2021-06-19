import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: "wrap",
		marginTop: 24,
	},
	radioButtonBox: {
		flexGrow: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderColor: '#E3E3E3',
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 12,
		paddingHorizontal: 16,
		paddingVertical: 12
	},
	radioButtonText: {
		fontSize: 18,
		color: '#1B1C1E',
		lineHeight: 22,
		marginLeft: 15,
		width: '85%',
		fontFamily: 'Graphik-Regular',
		alignSelf: 'center'
	},
})

export default styles;