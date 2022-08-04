import React from 'react'
import { Text, View ,Image,ScrollView, StyleSheet} from 'react-native'

const width=360;
const height=188;

const images = [
    'https://m.media-amazon.com/images/M/MV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg',
    'https://www.researchgate.net/profile/Stefan-Bolea/publication/309717420/figure/fig1/AS:425102790664192@1478363811754/Fight-Club-movie-poster-1999.png',
    'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg' ,
    'https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg'  ,

     ]

export default class Imagecarosoul extends React.Component {
    state={
        activeColor:0
    }
    change=({nativeEvent})=>{
        const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
        if(slide!==this.state.activeColor)
        {
            this.setState({activeColor:slide});
        }
    }
  render() {
    return (
    
        <View style={styles.container}>
               <ScrollView 
               pagingEnabled
               onScroll={this.change}
               horizontal style={{width,height}}
               >
     
        {

       images.map((image, index) => (
           <Image
               key={index}
               source={{ uri: image }}
               style={styles.image}
           />

       ))
   }
   </ScrollView>
   <View style={styles.dotting}>
    {
        images.map((x,y)=>(
<Text key={y} style={y==this.state.activeColor? styles.dotcolor:styles.Activedotcolor}>⬤</Text>

        ))
      }
   </View>

   </View>
   

        )
  }
}
const styles=StyleSheet.create({
    container:{
        marginLeft:15 ,width,height
    },
    image:{
       width, height, resizeMode: 'cover'
    },
    dotting:{flexDirection:'row',position:'absolute',bottom:0,alignSelf:'center'},
    dotting1:{flexDirection:'row',position:'absolute',bottom:0,alignSelf:'center',height:10,width:10},
  
    dotcolor:{
        color:'#888',
        margin:3.5
    },
    Activedotcolor:{
        color:'#fff',
        margin:3.5
    }

})