import React,{useRef, useState, useEffect} from 'react'
import {Text,View,StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList, } from 'react-native'
import Carousel from 'react-native-anchor-carousel'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'
import {data,lists} from '../../constants'

console.ignoredYellowBox = true
console.disableYellowBox = true;


export default function Home(){
    const [background, setBackground] = useState({
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMwtU95JygcmCq4e3XPpL9W0ATjGFoQCQm16dbpIp7BM36B7lH',
        name: 'Avengers: End Game', 
        stat: '2019 • Action / Sci-fi • 3h 2m', 
        desc: 'After Thanos, an intergintactic warlord  universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.'
    })
    const [gallery, setGallery] = useState(data)
    const [list, setList] = useState(lists)
    const carouselRef = useRef(null)
    const {height,width} = Dimensions.get('window')

    const renderItem = ({item,index}) => (
        <View key={index}>
            <TouchableOpacity 
                onPress={()=> {
                    carouselRef.current.scrollToIndex(index)
                    setBackground({
                        uri: item.image,
                        name: item.title,
                        stat: item.released,
                        desc: item.desc
                    })
                }}
            >
                <Image source={{uri: item.image}} style={styles.carouselImage}/>
                <Text style={styles.carouselText}>{item.title}</Text>
                <MaterialIcons name="library-add" size={30} color="#fff" style={styles.carouselIcon}/>
            </TouchableOpacity>
        </View>
    )


    return (
        <ScrollView style={{backgroundColor:'#000'}}>
            <View style={styles.carouselContentContainer}>
                <View  style={{...StyleSheet.absoluteFill, backgroundColor:'#000'}}>
                    <ImageBackground
                        source={{uri: background.uri}}
                        style={styles.ImageBg}
                        blurRadius={10}
                    >
                        <View style={styles.searchBoxContainer}>
                            <TextInput 
                                placeholder="Search Movies"
                                placeholderTextColor="#666"
                                style={styles.SearchBox}
                            />
                            <Feather name='search' size={22} color='#666' style={styles.searchBoxIcon}/>
                        </View>
                        <Text style={{color:'#fff', fontSize:24, fontWeight:'bold', marginLeft:10, marginVertical:10}}> Top Picks this Week</Text>
                        <View  style={styles.carouselContainerView}>
                            <Carousel style={styles.Carousel}
                                data={gallery}
                                renderItem={renderItem}
                                itemWidth={200}
                                containerWidth={width - 20} 
                                separatorWidth={0}
                                ref={carouselRef}
                                inActiveOpacity={0.4}
                            />
                        </View>
                        <View style={styles.movieInfoContainer}>
                                <View style={{justifyContent:'center'}}>
                                    <Text style={styles.movieName}>{background.name}</Text>
                                    <Text style={styles.movieStat}>{background.stat}</Text>
                                </View>
                                <TouchableOpacity style={styles.playIconContainer}>
                                        <FontAwesome5 name='play' size={23} color='#02ad94' style={{marginLeft:4}}/>
                                </TouchableOpacity>

                        </View>
                        <View style={{paddingHorizontal:14, marginTop:14}}>
                                <Text style={{color:'#fff',opacity:0.8, lineHeight:20}}>{background.desc}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>

            <View style={{marginHorizontal:14}}>
                <Text style={{color:'#fff', fontSize:24, fontWeight:'bold',marginBottom:24}}>Continue Watching</Text>
                <ImageBackground
                //resizeMode='cover'
                    source={{uri:'https://i2.wp.com/www.jornadageek.com.br/wp-content/uploads/2018/06/Como-treinar-o-seu-drag%C3%A3o-3.jpg?fit=693%2C400&ssl=1'}}
                    style={{height:250, width:'100%', backgroundColor:'#000'}}
                >
                      <Text style={{color:'#fff',padding:14, fontWeight:'bold'}}>How to train your Dragon: the hidden World</Text>
                      <TouchableOpacity style={{...styles.playIconContainer,position:'absolute', top:'40%', right:'40%'}}>
                                        <FontAwesome5 name='play' size={23} color='#02ad94' style={{marginLeft:4}}/>
                        </TouchableOpacity>
                </ImageBackground>

                <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center', marginBottom:24, marginTop:36}}>
                <Text style={{color:'#fff', fontSize:24, fontWeight:'bold'}}>My List</Text>
                <Text style={{color:'#fff', fontSize:14, fontWeight:'normal'}}>View All</Text>

            </View>
            <FlatList
                style={{marginBottom:30}}
                horizontal={true}
                data={list}
               keyExtractor={item => item.key}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity
                            style={{marginRight:20}}
                        >
                            <Image source={{uri: item.image}} style={{height:300, width:200}}/>
                            <View style={{position:'absolute', height:5,width:'100%', backgroundColor:'#02ad94',opacity:0.8}}>

                            </View>
                            <FontAwesome5 name='play' size={38} color='#fff' style={{position:'absolute', top:'45%', left:'45%', opacity:0.9}}/>
                        </TouchableOpacity>
                    )
                }}
            />
            </View>

          


        </ScrollView>
    )
}
