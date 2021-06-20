import React from 'react';
import { Text, View, ScrollView } from 'react-native';

//styles
import styles from './BottomSheetContainer.styles';

//other deps
import RBSheet from "react-native-raw-bottom-sheet";

//components
import CardAnswer from '../../components/CardAnswer/CardAnswer.component';

const BottomSheetContainer = ({ sheetRef, actions }) => {
	console.log(actions)
	return (
		<RBSheet
			animationType='slide'
			ref={sheetRef}
			height={680}
			openDuration={600}
			closeDuration={600}
			closeOnDragDown={true}
			dragFromTopOnly={true}
			customStyles={{
				container: {
					backgroundColor: "#fff",
					borderTopLeftRadius: 10,
					borderTopRightRadius: 10,
					borderColor: '#E3E3E3',
				},
				wrapper: {
					backgroundColor: 'transparent',
				},

				draggableIcon: {
					backgroundColor: "#E3E3E3"
				}
			}}
		>
			<ScrollView
				disableScrollViewPanResponder={true}
				showsVerticalScrollIndicator={false}
				style={{ paddingHorizontal: 16 }}>
				<Text style={styles.title}>Почему витамины этой группы?</Text>
				{actions.map((action) => {
					return (
						<>
							<CardAnswer
								title={action.title}
								descripton={action.text} />
						</>
					)
				})}

			</ScrollView>
		</RBSheet>
	);
}

export default BottomSheetContainer;