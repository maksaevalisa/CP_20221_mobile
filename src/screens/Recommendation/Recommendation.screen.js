import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { appFormsAPI } from "../../api/api";
import SyncStorage from 'sync-storage';

//styles
import styles from './Recommendation.styles';

//components
import CardRecommendation from '../../components/CardRecommendation/CardRecommendation.component';
import BottomSheetContainer from '../../components/BottomSheetContainer/BottomSheetContainer.component';
import CardVitamin from '../../components/CardVitamin/CardVitamin.component';
import Header from '../../components/Header/Header.component';
import InfoCard from '../../components/InfoCard/InfoCard.component';

//nav
import { useNavigation } from '@react-navigation/native';
import ButtonNext from '../../components/ButtonNext/ButtonNext.component';

const Recommendation = () => {
	const navigation = useNavigation();

	const sheetRef = React.useRef();
	const tokenRecommendations = SyncStorage.get('sessionIdSurvey');
	useEffect(() => {
		console.log(tokenRecommendations)
		appFormsAPI.getDataRecommendationsDetailed(tokenRecommendations)
			.then(response => {
				console.log(response.data)
				let tempBasket = [...response.data.main_positions]
				// if (localStorage.getItem("basket") && response.data.optional_positions.length !== 0){
				//     let localBasket = JSON.parse(localStorage.getItem("basket"));
				//     localBasket.forEach(product => {
				//         response.data.optional_positions.forEach(recProduct => {
				//             if(recProduct.product.id === product.id){
				//                 tempBasket.push(recProduct)
				//             }
				//         })
				//     })
				// }
				setRecommendations(response.data.optional_positions)
				setProducts(response.data.main_positions)
				setBasket(tempBasket)
				setLabels(response.data.labels)
				setName(response.data.user.name)
				setPhone(response.data.user.phone)
				setFetchRecommendation(false)
				setInitialBasket(true)
			}).catch(error => {
			})
		return (() => {
			console.log('navRec')
		})
	}, [])

	return (
		<>
			<ScrollView
				style={styles.container}
				showsVerticalScrollIndicator={false}>

				<Header
					title='Рекомендации' />

				<View style={[styles.content, { marginTop: 0 }]}>
					<TouchableOpacity
						onPress={() => navigation.navigate('form')}>
					</TouchableOpacity>
					<Text style={styles.paragraph}>На основе ваших ответов мы подобрали витамины и полезные добавки, которые помогут вам чувствовать себя лучше</Text>

					<View style={styles.imagesContainer}>
						<View style={styles.imageBox}>
							<Image source={require('../../assets/images/Recommendation.png')} style={styles.image} />
							<Text style={styles.imageDescription}>Спокойствие</Text>
						</View>
						<View style={styles.imageBox}>
							<Image source={require('../../assets/images/Health.png')} style={styles.image} />
							<Text style={styles.imageDescription}>Здоровье</Text>
						</View>
						<View style={styles.imageBox}>
							<Image source={require('../../assets/images/Recommendation.png')} style={styles.image} />
							<Text style={styles.imageDescription}>Спокойствие</Text>
						</View>
						<View style={styles.imageBox}>
							<Image source={require('../../assets/images/Recommendation.png')} style={styles.image} />
							<Text style={styles.imageDescription}>Спокойствие</Text>
						</View>
						<View style={styles.imageBox}>
							<Image source={require('../../assets/images/Recommendation.png')} style={styles.image} />
							<Text style={styles.imageDescription}>Спокойствие</Text>
						</View>
					</View>

					<Text style={[styles.recommendation, { marginTop: 32 }]}>Витамины</Text>
					<Text style={styles.recommendationDescription}>Все добавки отлично сочетаются между собой</Text>
				</View>

				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					style={styles.CardRecommendationContainer}>
					<CardRecommendation
						onPress={() => sheetRef.current.open()}
					/>
					<CardRecommendation
						onPress={() => sheetRef.current.open()}
					/>
					<CardRecommendation
						onPress={() => sheetRef.current.open()}
					/>
				</ScrollView>

				<View style={styles.content}>
					<Text style={styles.recommendation}>Дополнительные анализы</Text>
					<Text style={styles.recommendationDescription}>Опрос показал у вас возможен недостаток некоторых витаминов, советуем сдать следующие анализы, чтобы уточнить необходимые дозировки</Text>
				</View>

				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					style={styles.CardRecommendationContainer}>
					<CardVitamin />
					<CardVitamin />
					<CardVitamin />
				</ScrollView>

				<View style={styles.content}>
					<InfoCard
						backgroundColor='#EFF5F4'
						marginBottom={16}
						imageUrlFirst={require(`../../assets/images/tabler_pill.png`)}
						imageUrlSecond={require(`../../assets/images/water.png`)}
						title='Инструкция по приему витаминов'
						descriptionFirst='Принимайте добавки в начале дня вместе с едой'
						descriptionSecond='Запивайте каждую капсулу половиной стакана воды' />

					<InfoCard
						backgroundColor='#FFF9EF'
						imageUrlFirst={require(`../../assets/images/stopwatch.png`)}
						imageUrlSecond={require(`../../assets/images/message-square.png`)}
						title='Правильный курс витаминов'
						descriptionFirst='Рекомендуем принимать добавки от 3х месяцев'
						descriptionSecond='Корректируйте состав набора ежемесячно: проходите новую анкету, чтобы указать ваше самочувствие и цели' />
				</View>

				<View style={styles.buttonContainer}>
					<ButtonNext
						title='Начать курс'
						style={{ width: '100%', }} />
				</View>
			</ScrollView>

			<BottomSheetContainer
				sheetRef={sheetRef}
			/>
		</>
	);
}

export default Recommendation;