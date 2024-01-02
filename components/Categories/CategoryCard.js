import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className='relative mr-2'>
        <Image
            source={{
                uri: imgUrl,
            }}
            // className="h-100 w-100 rounded"
            style={{width: 100, height: 100, borderRadius: 10}}
          />
        <Text className='absolute bottom-1 left-1 text-white font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard