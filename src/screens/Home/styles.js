import {StyleSheet, Dimensions} from 'react-native'

const {width,height} = Dimensions.get('window')
export default StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    carouselContentContainer:{
        flex:1,
        backgroundColor:'#000',
        height: 790,
    },
    ImageBg:{
        flex:1,
        height:null,
        width:null
    },
    searchBoxContainer:{
        marginTop:23,
        backgroundColor:'#fff',
        elevation:10,
        borderRadius:4,
        marginVertical:10,
        width:'95%',
        flexDirection:'row',
        alignSelf:'center'
    },
    SearchBox:{
        padding:12,
        paddingLeft:20,
        fontSize:16
    },
    searchBoxIcon:{
        position:'absolute',
        right:20,
        top:14

    },
    carouselContainerView:{
        width:'100%',
        height:380,
        justifyContent:'center',
        alignItems:'center'
    },
    Carousel:{
        flex:1,
        overflow:'visible'
    },
    carouselImage:{
        width:200,
        height:320,
        borderRadius:10,
        alignSelf:'center',
        backgroundColor:'rgba(0,0,0,0.9)'
    },
    carouselText:{
        padding:14,
        color:'#fff',
        position:'absolute',
        fontSize:16,
        bottom:10,
        left:2,
        fontWeight:'bold'
    },
    carouselIcon:{
        position:'absolute',
        top:15,
        right:15
    },
    movieInfoContainer:{
        flexDirection:'row',
        marginTop:16,
        justifyContent:'space-between',
        width: Dimensions.get('window').width -14
    },
    movieName:{
        paddingLeft:14,
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
        marginBottom:6
    },
    movieStat:{
        paddingLeft:14,
        color:'#fff',
        fontWeight:'bold',
        fontSize:14,
        opacity:0.8
    },
    playIconContainer:{
        backgroundColor:'#212121',
        padding:18,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        elevation:10,
        borderWidth:4,
        borderColor: 'rgba(2,173,148,0.2)',
        marginBottom:14
    }



})