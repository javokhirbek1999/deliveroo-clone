import { View, Text, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native';
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, StarIcon } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../../components/Dish/DishRow';
import BasketIcon from '../../components/Basket/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../../features/restaurantSlice';

const RestaurantScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
    },
    } = useRoute();


    useEffect(() => {
        dispatch(
            setRestaurant({
                id,
                imgUrl,
                title,
                rating,
                genre,
                address,
                short_description,
                dishes,
                long,
                lat,
            })
        );
    }, [dispatch]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })

    return (
        <>

        <BasketIcon />

        <ScrollView>
            <View className='relative'>
                <Image 
                    source={{
                        uri: imgUrl,
                    }}
                    className='w-full h-56 bg-gray-300 p-4'
                />
                <TouchableOpacity onPress={navigation.goBack} className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'>
                    <ArrowLeftIcon size={20} color="#00CCBB"/>
                </TouchableOpacity>
            </View>

            <View className='bg-white'>
                <View className='px-4 pt-4'>
                    <Text className='text-3xl font-bold'>{title}</Text>

                    <View className='flex-row space-x-2 my-1'>
                        <View className='flex-row items-center space-x-1'>
                            <StarIcon color='green' opacity={0.5} size={22}/>
                            <Text className='text-xs text-gray-500'>
                                <Text className='text-green-500'>{rating}</Text> . {genre}
                            </Text>
                        </View>

                        <View className='flex-row items-center space-x-1'>
                            <MapPinIcon color='gray' opacity={0.4} size={22}/>
                            <Text className='text-xs text-gray-500'> Nearby . {address} </Text>
                        </View>
                    </View>

                    <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
                </View>

                
                <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
                    <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20}/>
                    <Text className='pl-2 flex-1 text-md font-bold'>
                        Have a food allergy?
                    </Text>
                    <ChevronRightIcon color="##00CCBB"/>
                </TouchableOpacity>
            </View>

            <View className='pb-36'>
                <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>

                <DishRow
                    key={1}
                    id={1}
                    name='Plov'
                    description='Awesome Uzbek Plov made with lamb meat'
                    price={35}
                    image='https://cdn.sanity.io/images/xnwya7ht/production/409999c38d81c2f9c9edea2144097be6109b2f9e-1024x682.png?w=2000&fit=max&auto=format'
                />
                <DishRow
                    key={2}
                    id={2}
                    name='Soup'
                    description='Uzbek Lamb Soup'
                    price={15}
                    image='https://cdn.sanity.io/images/xnwya7ht/production/c13637c64c4e648f90a4e649d2e35fcd6e4fa45e-1200x1200.png?w=2000&fit=max&auto=format'
                />
                <DishRow
                    key={3}
                    id={3}
                    name='Manti'
                    description='Uzbek Beef Manti with sauce'
                    price={5}
                    image='https://cdn.sanity.io/images/xnwya7ht/production/b66d6e5625231a2596d11711aed43a3dd22427bd-1200x801.png?w=2000&fit=max&auto=format'
                />
                <DishRow
                    key={4}
                    id={4}
                    name='Mastava'
                    description='Uzbek Beef Mastava'
                    price={8}
                    image='https://cdn.sanity.io/images/xnwya7ht/production/c9c329f44a048ba69b6a2d610ef7e2ade314011a-1200x800.png?w=2000&fit=max&auto=format'
                />
                <DishRow
                    key={5}
                    id={5}
                    name='Somsa'
                    description='Uzbek Beef Tandoor Somsa'
                    price={8}
                    image='https://cdn.sanity.io/images/xnwya7ht/production/d5bf065e8b2a82b20d200029c7cb16e8f7406825-1024x682.png?w=2000&fit=max&auto=format'
                />
                <DishRow
                    key={6}
                    id={6}
                    name='Dimlama'
                    description='Uzbek Beef Dimlama'
                    price={24}
                    image='https://cdn.sanity.io/images/xnwya7ht/production/a17ef0b338eff2c2a6f2f311378b5043f55718fa-1280x720.png?w=2000&fit=max&auto=format'
                />
            </View>
        </ScrollView>
        </>
    )
}

export default RestaurantScreen