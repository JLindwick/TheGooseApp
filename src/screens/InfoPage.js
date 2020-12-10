import React from 'react'
import { StyleSheet, View, ImageBackground,Dimensions } from 'react-native'
import { Text, FAB } from 'react-native-paper'
import Header from '../components/Header'
var backgroundimages = require('../images/honk.png');
const { width: WIDTH } = Dimensions.get('window');
function SettingsPage({navigation}) {
    return (
        <>  
        <Header titleText='Settings' />
        <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={backgroundimages}>

        <View>
          <Text style={styles.myText}><Text style={styles.header}>History:</Text> My spouse and I became obsessed with the untitled goose game
                         and They really wanted an App to Hjonk at her friends and enemies alike!
                         So I set on this endeavor to create a great app for Them that They could
                         use and have loads of options to use! The main background was created by 
                         the reddit Artist: u/Skrubette and They allowed for Their image to be used
                         in this app! The sound effects were uploaded by u/zetadzn on reddit as well!
                         I thank the reddit community for all the great resources it has provided for 
                         this project.
          </Text>
          <Text style={styles.myText}><Text style={styles.header}>Terms of use:</Text> This app is not licensed nor sponsord by the Untitled Geese Game. This falls under the category of fan art and is not to have any in app purchases and will always be free for everyone. You are free to use this app for any videos or content you wish, it would be nice if you mentioned the app in your content though! Enjoy The Goose App!</Text>
          <Text style={styles.myText}><Text style={styles.header}>Updates:</Text> Future updates to come. Better Icons are in the future as are more sound effects!</Text>
        </View>
      <View styles={styles.fabContainer}> 
        <FAB
          style={styles.fab2}
          small
          label='Return'
          onPress={() => navigation.goBack()}
        />
        </View>
        </ImageBackground>
        </>
    )
}
const styles = StyleSheet.create({
    fab2: {
      position: 'absolute',
      height:50,
      width:WIDTH,
      backgroundColor:'#517fa4'
    },
    fabContainer:{
      paddingLeft:"20%",
    },
    myText:{
      color:'black',
      paddingTop: 50,
      paddingLeft:50,
      paddingRight:30,
      paddingBottom:5,
      justifyContent:'center',
      fontSize:16,
      fontWeight:'bold',
    },
    header:{
      fontSize:20,
      color:'black',
      fontWeight:'bold'
    },
    imgBackground: {
      width: '100%',
      height: '100%',
      flex: 1
},
})
export default SettingsPage