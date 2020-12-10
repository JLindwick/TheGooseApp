//general imports
import React, {useState} from 'react'
import { StyleSheet, View,ImageBackground , TouchableOpacity, Image, Dimensions} from 'react-native'
import { FAB } from 'react-native-paper'
import {  Icon } from 'react-native-elements';
import Header from '../components/Header'
const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window');
var Sound = require('react-native-sound')
var backgroundimages = require('../images/goose1.png');
var cancel = require('../images/cancel.png');
//set sound Category
Sound.setCategory('Playback')
function MainPage({ navigation }) {
  //set settings functions and variables
    const [isLooping,setisLooping] = useState(false)
    const [volume,setVolume] = useState(.5)
    const [loopValue,setLoopValue] = useState(0)
    const [hjonk,setHjonk] = useState("Honk1")
    const [glass,setGlass] = useState("glass1")
    const [gossip,setGossip] = useState("gossipbluehonk1")
    const [harmonica,setHarmonica] = useState("harmonica1")
    const [pylon,setPylon] = useState("pylon1")
    const [soap,setSoap] = useState("soap1")
    const [trashlid,setTrashlid] = useState("trashlid1")
    const [walkietalki,setWalkietalkie] = useState("walkietalkie1")  
    //load sounds  
    var hjonk1 = new Sound('hjonk1.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        return;
      } else {
        hjonk1.setVolume(0).play();
      } 
    })
    var hjonk2 = new Sound('hjonk2.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        return;
      } else {
        hjonk2.setVolume(0).play();
      } 
    })
    var glass1 = new Sound('glass1.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        return;
      } else {
        glass1.setVolume(0).play();
      } 
    })
    var glass2 = new Sound('glass3.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        return;
      } else {
        glass2.setVolume(0).play();
      } 
    })
    var gossip1 = new Sound('gossipbluehonk1.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        return;
      } else {
        gossip1.setVolume(0).play();
      } 
    })
    var gossip2 = new Sound('gossipbluehonk2.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        return;
      } else {
        gossip2.setVolume(0).play();
      } 
    })
    var harmonica1 = new Sound('harmonica1.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        return;
      } else {
        harmonica1.setVolume(0).play();
      } 
    })
    var harmonica2 = new Sound('harmonica2.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        return;
      } else {
        harmonica2.setVolume(0).play();
      } 
    })
    var pylon1 = new Sound('pylon.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        return;
      } else {
        pylon1.setVolume(0).play();
      } 
    })
    var pylon2 = new Sound('pylon1.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        return;
      } else {
        pylon2.setVolume(0).play();
      } 
    })
    var soap1 = new Sound('soap1.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        return;
      } else {
        soap1.setVolume(0).play();
      } 
    })
    var soap2 = new Sound('soap2.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        return;
      } else {
        soap2.setVolume(0).play();
      } 
    })
    var trashlid1 = new Sound('trashlid1.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        return;
      } else {
        trashlid1.setVolume(0).play();
      } 
    })
    var trashlid2 = new Sound('trashlid2.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        return;
      } else {
        trashlid2.setVolume(0).play();
      } 
    })
    var walkietalkie1 = new Sound('walkietalkie1.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        return;
      } else {
        walkietalkie1.setVolume(0).play();
      } 
    })
    var walkietalkie2 = new Sound('walkietalkie4.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        return;
      } else {
        walkietalkie2.setVolume(0).play();
      } 
    })

    //button click functions
    function handleHjonkClick() {
      if(isLooping == true)
      {
        switch(hjonk) {
          case 'Honk1':
            hjonk1.setVolume(volume).setNumberOfLoops(-1).play();
            break;
          case 'Honk2':
            hjonk2.setVolume(volume).setNumberOfLoops(-1).play();
            break;
 
          default:
          break;
        }
      } else if(isLooping == false)
      {
        switch(hjonk) {
          case 'Honk1':
            hjonk1.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;
          case 'Honk2':
            hjonk2.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;

          default:
          break;
        }

      }
    }
    function handleGlassClick() {
      if(isLooping == true)
      {
        switch(glass) {
          case 'glass1':
            glass1.setVolume(volume).setNumberOfLoops(-1).play();
            break;
          case 'glass2':
            glass2.setVolume(volume).setNumberOfLoops(-1).play();
            break;
          default:
              break;
        }
      } else if(isLooping == false)
      {
        switch(glass) {
          case 'glass1':
            glass1.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;
          case 'glass2':
            glass2.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;
          default:
            break;
        }

      }
    }
    function handleGossipClick() {
      if(isLooping == true)
      {
        switch(gossip) {
          case 'gossipbluehonk1':
            gossip1.setVolume(volume).setNumberOfLoops(-1).play();
            break;
          case 'gossipbluehonk2':
            gossip2.setVolume(volume).setNumberOfLoops(-1).play();
            break;             
          default:
            break;
        }
      } else if(isLooping == false)
      {
        switch(gossip) {
          case 'gossipbluehonk1':
            gossip1.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;
          case 'gossipbluehonk2':
            gossip2.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;
          case 'gossipbluehonk3':
            gossip3.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;
          case 'gossipbluehonk4':
            gossip4.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;
          case 'gossipbluehonk5':
            gossip5.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;
          case 'gossipbluehonk6':
            gossip6.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;           
          default:
            break;
        }

      }
    } 
    function handleHarmonicaClick() {
      if(isLooping == true)
      {
        switch(harmonica) {
          case 'harmonica1':
            harmonica1.setVolume(volume).setNumberOfLoops(-1).play();
            break;
          case 'harmonica2':
            harmonica2.setVolume(volume).setNumberOfLoops(-1).play();
            break;              
          default:
            break;
        }
      } else if(isLooping == false)
      {
        switch(harmonica) {
          case 'harmonica1':
            harmonica1.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;
          case 'harmonica2':
            harmonica2.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;           
          default:
            break;
        }

      }
    }    
    function handlePylonClick() {
      if(isLooping == true)
      {
        switch(pylon) {
          case 'pylon1':
            pylon1.setVolume(volume).setNumberOfLoops(-1).play();
            break;
          case 'pylon2':
            pylon2.setVolume(volume).setNumberOfLoops(-1).play();
            break;             
          default:
            break;
        }
      } else if(isLooping == false)
      {
        switch(pylon) {
          case 'pylon1':
            pylon1.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;
          case 'pylon2':
            pylon2.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;                       
          default:
            break;
        }

      }
    }  
    function handleSoapClick() {
      if(isLooping == true)
      {
        switch(soap) {
          case 'soap1':
            soap1.setVolume(volume).setNumberOfLoops(-1).play();
            break;
          case 'soap2':
            soap2.setVolume(volume).setNumberOfLoops(-1).play();
            break;
          default:
              break;
        }
      } else if(isLooping == false)
      {
        switch(soap) {
          case 'soap1':
            soap1.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;
          case 'soap2':
            soap2.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;
          default:
            break;
        }

      }
    }         
    function handleTrashlidClick() {
      if(isLooping == true)
      {
        switch(trashlid) {
          case 'trashlid1':
            trashlid1.setVolume(volume).setNumberOfLoops(-1).play();
            break;
          case 'trashlid2':
            trashlid2.setVolume(volume).setNumberOfLoops(-1).play();
            break;
          default:
          break;
        }
      } else if(isLooping == false)
      {
        switch(trashlid) {
          case 'trashlid1':
            trashlid1.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;
          case 'trashlid2':
            trashlid2.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;
          default:
          break;
        }

      }
    }
    function handleWalkitalkiClick() {
      if(isLooping == true)
      {
        switch(walkietalki) {
          case 'walkietalkie1':
            walkietalkie1.setVolume(volume).setNumberOfLoops(-1).play();
            break;
          case 'walkietalkie2':
            walkietalkie2.setVolume(volume).setNumberOfLoops(-1).play();
            break;
          default:
          break;
        }
      } else if(isLooping == false)
      {
        switch(walkietalki) {
          case 'walkietalkie1':
            walkietalkie1.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;
          case 'walkietalkie2':
            walkietalkie2.setVolume(volume).setNumberOfLoops(loopValue).play();
            break;
          default:
          break;
        }

      }
    } 
    function handlestop() {
      hjonk1.stop()
      hjonk2.stop()
      glass1.stop()
      glass2.stop()
      gossip1.stop()
      gossip2.stop()
      harmonica1.stop()
      harmonica2.stop()
      pylon1.stop()
      pylon2.stop()
      soap1.stop()
      soap2.stop()
      trashlid1.stop()
      trashlid2.stop()
      walkietalkie1.stop()
      walkietalkie2.stop()
    }
    //mainpage return
    return (
    <>
    <View style={styles.container}>
    <Header titleText='Goose App' />
    <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={backgroundimages}>
      <View style={styles.buttonContainer}>
      <TouchableOpacity title="Hjonk" onPress={() => handleHjonkClick()}>
        <Icon reverse name='octoface' type='octicon' color='#517fa4'/>
      </TouchableOpacity>
      <TouchableOpacity title="Glass" onPress={() => handleGlassClick()}>  
        <Icon reverse name='droplet' type='feather' color='#517fa4'/>
      </TouchableOpacity>
      <TouchableOpacity title="Gossip" onPress={() => handleGossipClick()}>  
        <Icon reverse name='male-female' type='foundation' color='#517fa4'/>
      </TouchableOpacity>
      <TouchableOpacity title="Harmonica" onPress={() => handleHarmonicaClick()}>
        <Icon reverse name='web' type='SimpleLineIcons' color='#517fa4'/>
      </TouchableOpacity> 
      <TouchableOpacity title="Pylon" onPress={() => handlePylonClick()}>  
        <Icon reverse name='aperture' type='feather' color='#517fa4'/>
      </TouchableOpacity>
      <TouchableOpacity title="Soap" onPress={() => handleSoapClick()}>  
        <Icon reverse name='beaker' type='octicon' color='#517fa4'/>
      </TouchableOpacity>
      <TouchableOpacity title="Trash Lid" onPress={() => handleTrashlidClick()}> 
        <Icon reverse name='trashcan' type='octicon' color='#517fa4'/>
      </TouchableOpacity>  
      <TouchableOpacity title="WalkiTalki" onPress={() => handleWalkitalkiClick()}>  
        <Icon reverse name='mustache' type='simple-line-icon' color='#517fa4'/>
      </TouchableOpacity>  
    </View>
      {isLooping == true ? (
                <View style={styles.button1}>
                <TouchableOpacity title="HJONK" onPress={() => handlestop()}>
                  <Image style={styles.button1} source={cancel}/>
                </TouchableOpacity>
              </View>
        ) : null }
        <View style={styles.fabContainer} >
        <FAB
          style={styles.fab1}
          small
          icon='plus'
          label='Effects'
          onPress={() => navigation.navigate('SettingsPage',{
            isLooping,
            setisLooping,
            volume,
            setVolume,
            loopValue,
            setLoopValue,
            hjonk,
            setHjonk,
            glass,
            setGlass,
            gossip,
            setGossip,
            harmonica,
            setHarmonica,
            pylon,
            setPylon,
            soap,
            setSoap,
            trashlid,
            setTrashlid,
            walkietalki,
            setWalkietalkie
          })}
        />
                <FAB
          style={styles.fab2}
          small
          icon='plus'
          label='About'
          onPress={() => navigation.navigate('InfoPage')}
        />
        </View>
        </ImageBackground>  
        </View>
    </>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:WIDTH,
      height:HEIGHT
    },
    button1: {
      alignItems:'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      flexDirection:'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop:'33%'
    },
    fabContainer: {
      marginTop:'55%',
      marginLeft:'5%',
      justifyContent:'space-between',
      flexDirection:'row',
      flex:1,
    },
    fab1: {
      position: 'absolute',
      backgroundColor:'#517fa4'
    },
    fab2: {
      position: 'absolute',
      height:50,
      marginHorizontal:WIDTH*.6,
      backgroundColor:'#517fa4'
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1
},
  })
  export default MainPage