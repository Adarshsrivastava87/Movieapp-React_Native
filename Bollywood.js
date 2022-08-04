
import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView, } from "react-native";
import Imagecarosoul from "./carousalBolly";
import movies from "../MovieData/moviesBolly";
const BollywoodMovies = () => {

  function Display_Movies({ item }) {

    return (

      <View style={styles.FlatListContainer}>
        <Image source={{ uri: item.imageUrl }}
          style={styles.imageContainer
          }></Image>
        <View style={styles.flexColumn}>
          <Text style={styles.title}>
            Name:{item.name}
          </Text>
          <Text style={styles.title}>
            {item.imdbRating}/10,MetaScore:{item.metaScore}
          </Text>
          <Text style={styles.title}>
            genre :{item.genre}
          </Text>
          <View style={styles.direction}>
            <TouchableOpacity onPress={() => { alert(item._id) }}>
              <Text style={styles.button}>
                Save to
                watch later
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { alert(item._id) }}>
              <Text style={styles.button}>
                Add to
                favorites
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>

    )

  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.courosal}>
        <Imagecarosoul />
      </View>
      <ScrollView>
        <FlatList data={movies} renderItem={Display_Movies}></FlatList>
      </ScrollView>
    </View>
  )
}
export default BollywoodMovies;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  courosal: {
    height: 200,
    width: "100%",
    backgroundColor: "black",
    marginTop: 10
  },
  container: {
    flex: 1,
    width: '100%',
    padding: 20
  },
  FlatListContainer:
  {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "rgb(139, 166, 170)",
    borderRadius: 4,
    marginBottom: 4
  },

  title: {
    paddingBootom: 10,
    fontWeight: '500',
    fontStyle: "italic",
    fontWeight: "bold",
    color: "black"
  },
  imageContainer: {
    height: 100,
    width: "25%",


  },
  flexColumn: {
    marginTop: 20,
    marginLeft: 15

  },
  direction: {
    flexDirection: "row",
  },
  button: {
    marginRight: 30,
    color: "green",
    fontWeight: "bold"
  }
})