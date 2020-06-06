import React,{useEffect, useState} from 'react'
import {Text,View, Image,TouchableOpacity, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'

import circleIcon from '../../assets/icons/Elip.png' 

export default function Profile(){
    const [amine] = useState(new Animated.Value(300))
    const [opacity] = useState(new Animated.Value(0))


    useEffect(()=>{
        Animated.spring(amine,{
            toValue:0,
            speed:0.1,
            bounciness:130,
            useNativeDriver:true
        }).start()
        Animated.timing(opacity,{
            toValue:1,
            duration: 1500,
            useNativeDriver:true
        }).start()
    },[])



    return (
        <View style={styles.container}>
              <Image source={circleIcon}  style={{ width:100,
                    height:100,
                    borderRadius:75,
                    position:'absolute',
                    left:15,
                    top:15}} 
                />
              <Image source={circleIcon}  style={{ 
                   width:50,
                    height:50,
                    borderRadius:25,
                    position:'absolute',
                    right:15,
                    top:60}} 
                />
              <Image source={circleIcon}  style={{ 
                   width:80,
                    height:80,
                    borderRadius:40,
                    position:'absolute',
                    right:90,
                    top:150}} 
                />
              <Image source={circleIcon}  style={{ 
                   width:90,
                    height:90,
                    borderRadius:50,
                    position:'absolute',
                    left:40,
                    top:280}} 
                />
              <Image source={circleIcon}  style={{ 
                   width:90,
                    height:90,
                    borderRadius:50,
                    position:'absolute',
                    left:0,
                    bottom:50}} 
                />
              <Image source={circleIcon}  style={{ 
                   width:90,
                    height:90,
                    borderRadius:50,
                    position:'absolute',
                    right:0,
                    bottom:250}} 
                />
            <Animated.View style={{...styles.imgContainer,opacity}}>
                    <Image source={{uri:'https://cdn.pixabay.com/photo/2019/11/29/21/30/girl-4662159_960_720.jpg'}} style={styles.img} />
                   <TouchableOpacity style={styles.icon}>
                        <Icon name="edit" size={20} color='#02AD94'/>
                   </TouchableOpacity>
           </Animated.View>
           < Animated.View style={[styles.infoContainer,
          {
            transform:[{translateY: amine}],
          }
        ]}>
                <View style={styles.infoContent}>
                    <Text style={styles.title}>Name</Text>
                    <Text style={styles.value} >Rebeca Santos Silva</Text>
                </View>
                <View style={styles.infoContent}>
                    <Text style={styles.title}>Email</Text>
                    <Text style={styles.value} >Rebeca.S.Silva@gmail.com</Text>
                </View>
                <View style={styles.infoContent}>
                    <Text style={styles.title}>Phone</Text>
                    <Text style={styles.value} >(00) 00000-0000</Text>
                </View>
            </Animated.View>

        

           
        </View>
    )
}