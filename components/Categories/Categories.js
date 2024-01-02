import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
        {/* CategoryCard */}
        <CategoryCard imgUrl="https://www.advantour.com/img/uzbekistan/uzbek-dishes.jpg" title="Main"/>
        <CategoryCard imgUrl="https://people-travels.com/storage/images/cusines_page/48MIFyK83e3EMpXuzBtkQw1PGgJwA0wbtfSdDrck.webp" title="Secondary"/>
        <CategoryCard imgUrl="https://static.vecteezy.com/system/resources/thumbnails/028/798/255/small_2x/uzbek-and-central-asia-cuisine-concept-assorted-uzbek-food-pilaf-samsa-lagman-manti-shurpa-uzbek-restaurant-concept-ai-generative-photo.jpg" title="Additional"/>
        <CategoryCard imgUrl="https://storage.kun.uz/source/6/IRmYsSsZCuaErWy0opoHzA8jSPNihXzK.jpg" title="Breads & Other"/>
        <CategoryCard imgUrl="https://minzifatravel.com/wp-content/uploads/2021/10/20160409053742.jpg" title="Beverages"/>
        <CategoryCard imgUrl="https://t3.ftcdn.net/jpg/03/59/20/52/360_F_359205288_4gsNBFPiMXjvAXH0j1r0vT3sfmUVjbNe.jpg" title="More"/>

    </ScrollView>
  )
}

export default Categories