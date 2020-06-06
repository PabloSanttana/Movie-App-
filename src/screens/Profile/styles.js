import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor:'#000'
    },
    imgContainer:{
        marginTop:110,
        width:160,
        height:160,
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        width:153,
        height:153,
        borderRadius:78,
        borderWidth:3,
        borderColor:'#02AD94',
    },
    icon:{
        width:40,
        height:40,
        backgroundColor:"#000",
        borderRadius:25,
        borderWidth:2,
        borderColor:'#02AD94',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        elevation:5,
        right:6,
        bottom:6,
    },
    infoContainer:{
        marginTop:100,
        width: width -70,
        height: '100%',
        padding:20,
        backgroundColor:'#212121',
        borderTopLeftRadius:25,
        borderTopEndRadius:25
    },
    infoContent:{
        borderBottomWidth:0.5,
        borderBottomColor:'#707070',
        paddingBottom:8,
        marginBottom:8
    },
    title:{
        color:'#B1B1B1',
        marginBottom:8,
        fontSize:16,
        fontWeight:'bold'
    },
    value:{
        color:'#B1B1B1',
        paddingLeft:10,
        marginBottom:8
    },
  
})