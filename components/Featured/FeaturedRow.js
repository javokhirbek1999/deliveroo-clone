import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
        <View className='mt-4 flex-row items-center justify-between px-4'>
            <Text className='font-bold text-lg'>{title}</Text>
            <ArrowRightIcon color='##00CCBB'/>
        </View>

        <Text className='text-xs text-gray-500 px-4'>{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >
        {/* RestaurantCards */}
        <RestaurantCard 
            id={123}
            imgUrl="https://cdn.sanity.io/images/xnwya7ht/production/f4f953cd529d5dd817431b9aa9e207bd74d017f0-900x600.jpg?w=2000&fit=max&auto=format"
            title="Namangan"
            rating={4.5}
            genre="Uzbek"
            address="123 Main St"
            short_description="One of the best Uzbek cuisines in the town."
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestaurantCard 
            id={123}
            imgUrl="https://cdn.sanity.io/images/xnwya7ht/production/b68f4771d25140a9c873caa4a89696e878fbcd8c-900x600.png?w=2000&fit=max&auto=format"
            title="Taste of Samarkhand"
            rating={4.5}
            genre="Uzbek"
            address="123 Main St"
            short_description="Uzbek Restaurant with best national cuisines"
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestaurantCard 
            id={123}
            imgUrl="https://cdn.sanity.io/images/xnwya7ht/production/8fdf6bfc902ac5ba1dcf915f11c40d9d88e90ea8-602x602.png?w=2000&fit=max&auto=format"
            title="Silk Road"
            rating={4.5}
            genre="Uzbek"
            address="123 Main St"
            short_description="Uzbek traditional restaurant"
            dishes={[]}
            long={20}
            lat={0}
        />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow