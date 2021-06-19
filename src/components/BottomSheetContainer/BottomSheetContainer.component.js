import React from 'react';
//import { Text, View, ScrollView } from 'react-native';

import { Dimensions, StyleSheet, Text, View, ScrollView } from 'react-native';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';

//other deps
import RBSheet from "react-native-raw-bottom-sheet";

//styles
import styles from './BottomSheetContainer.styles';

//components
import CardAnswer from '../../components/CardAnswer/CardAnswer.component';

const BottomSheetContainer = ({ sheetRef,actions }) => {
	console.log(actions)
	return (
		<RBSheet
			animationType='slide'
			ref={sheetRef}
			height={560}
			openDuration={600}
			closeDuration={600}
			closeOnDragDown={true}
			dragFromTopOnly={true}
			customStyles={{
				container: {
					backgroundColor: "#E3E3E3",
					borderTopLeftRadius: 10,
					borderTopRightRadius: 10,
					borderColor: '#E3E3E3',
				},
				wrapper: {
					backgroundColor: 'transparent',
				},

				draggableIcon: {
					backgroundColor: "#fff"
				}
			}}
		>
			<ScrollView
				disableScrollViewPanResponder={true}
				showsVerticalScrollIndicator={false}
				style={{ paddingHorizontal: 16 }}>
				{actions.map((action)=>{
					return(
						<CardAnswer
					title={action.title}
					descripton={action.text} />
					)
				})}
				
			</ScrollView>
		</RBSheet>
	);
}

export default BottomSheetContainer;