import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { appFormsAPI } from "../../api/api";
import SyncStorage from 'sync-storage';
import { SvgUri } from 'react-native-svg';
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
	const [recommendations, setRecommendations] = useState([])
    const [fetchRecommendation, setFetchRecommendation] = useState(true)
    const [products, setProducts] = useState([])
	const [analyses, setAnalyses] = useState([])
    const [labels, setLabels] = useState([])
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [moreInfo, setMoreInfo] = useState("")
    const [actionsForItem, setActionsForItem] = useState(null)
    const [basket, setBasket] = useState([])
    const [phone, setPhone] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [UUID, setUUID] = useState('');
	const sheetRef = React.useRef();
	const [actions, setActions] = useState([]);
	SyncStorage.set('tokenRecommendations','a8ae3faa-22c0-4d1f-bb1e-2cc11c895492')
	const tokenRecommendations = SyncStorage.get('tokenRecommendations');
	useEffect(() => {
		console.log(tokenRecommendations)
        appFormsAPI.getDataRecommendationsDetailed(tokenRecommendations)
            .then(response => {
                // let tempBasket = [...response.data]
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
                setLabels(response.data.labels)
                setFetchRecommendation(false)
                setProducts(response.data.main_positions)
				setAnalyses(response.data.data.recommendated_analyses)
				
            }).catch(error => {
				console.log('error')
        })
    }, [])
	if(!fetchRecommendation){
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
							{labels.map((label)=>{
								return(
								<View style={styles.imageBox}>

									<SvgUri 
										uri={label.image.image_url}
										style={styles.image} />
									<Text style={styles.imageDescription}>{label.label_text}</Text>
								</View>
								)
							})}
						
						</View>

						<Text style={[styles.recommendation, { marginTop: 32 }]}>Витамины</Text>
						<Text style={styles.recommendationDescription}>Все добавки отлично сочетаются между собой</Text>
					</View>

					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						style={styles.CardRecommendationContainer}>

						{products.map((product)=>{
						
							return(
								<CardRecommendation
									setActions={setActions}
									product={product}
									onPress={() => {
										setActions(product.actions)
										sheetRef.current.open()
									}}
								/>
						)
						})}
						
					</ScrollView>

					<View style={styles.content}>
						<Text style={styles.recommendation}>Дополнительные анализы</Text>
						<Text style={styles.recommendationDescription}>Опрос показал у вас возможен недостаток некоторых витаминов, советуем сдать следующие анализы, чтобы уточнить необходимые дозировки</Text>
					</View>

					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						style={styles.CardRecommendationContainer}>
						{analyses.map((analyse)=>{
						
							return(<CardVitamin name={analyse.char_code} text={analyse.product_name}/>)
						})}
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
				
				{
					<BottomSheetContainer
					actions={actions}
					sheetRef={sheetRef}/>
				}
				
			</>
		);
	}
	else
		return(<Text>loading</Text>)
}

export default Recommendation;