import React from 'react'
import { Text, View ,Image,ScrollView, StyleSheet} from 'react-native'

const width=360;
const height=188;

const images = [
  
    "https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/12/allu-arjun-opens-up-about-his-plans-for-pushpa-2-001.jpg" ,
    "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNTlmNDMzOWQtYzg4Ny00OWQ0LWFhN2MtNmQ2MDczZGZhNTU5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/gadar--ek-prem-katha-et00002956-24-03-2017-19-52-43.jpg"
   

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