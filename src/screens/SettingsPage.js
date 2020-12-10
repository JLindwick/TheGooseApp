import React,{useState} from 'react'
import { StyleSheet, View, Switch,StatusBar,ImageBackground,Dimensions} from 'react-native'
import { Text, FAB } from 'react-native-paper'
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import Header from '../components/Header'
var backgroundimages = require('../images/goose3.png');
const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window');

function SettingsPage({navigation}) {
  const [isLooping, setIsLooping] = useState(navigation.state.params.isLooping);
  const [volume, setVolume] = useState(navigation.state.params.volume);
  const [SoundSettings,toggleSoundSetting] = useState(false)
  const [SoundSettingsShow,toggleSoundSettingShow] = useState(false)
  const [loopValue,setLoopValue] = useState(navigation.state.params.loopValue)
  const [hjonk,setHjonk] = useState(navigation.state.params.hjonk)
  const [glass,setGlass] = useState(navigation.state.params.glass)
  const [gossip,setGossip] = useState(navigation.state.params.gossip)
  const [harmonica,setHarmonica] = useState(navigation.state.params.harmonica)
  const [pylon,setPylon] = useState(navigation.state.params.pylon)
  const [soap,setSoap] = useState(navigation.state.params.soap)
  const [trashlid,setTrashlid] = useState(navigation.state.params.trashlid)
  const [walkietalki,setWalkietalkie] = useState(navigation.state.params.walkietalki) 
  function onChangeEffects() {
      navigation.state.params.setisLooping(isLooping)
      navigation.state.params.setVolume(volume)
      navigation.state.params.setLoopValue(loopValue)
      navigation.state.params.setHjonk(hjonk)
      navigation.state.params.setGlass(glass)
      navigation.state.params.setGossip(gossip)
      navigation.state.params.setHarmonica(harmonica)
      navigation.state.params.setPylon(pylon)
      navigation.state.params.setSoap(soap)
      navigation.state.params.setTrashlid(trashlid)
      navigation.state.params.setWalkietalkie(walkietalki)

        navigation.goBack()
    }
    function toggleSwitch(){
      setIsLooping(settingsValue => !settingsValue);
    }
    function toggleSoundView(){
      toggleSoundSettingShow(false)
      toggleSoundSetting(settingsValue => !settingsValue);
    }
    function toggleChangeSound(){
      toggleSoundSetting(false)
      toggleSoundSettingShow(settingsValue => !settingsValue);
    }

  return (
    <>
  <View style={styles.container}>  
  <Header titleText='Settings' />
  <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={backgroundimages}>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <FAB
          style={styles.fab}
          small
          icon='plus'
          label='Sound Settings'
          onPress={() => toggleSoundView() }
        />

        </View>
        <View style={styles.button}>
        <FAB
          style={styles.fab}
          small
          icon='plus'
          label='Sound Effects'
          onPress={() => toggleChangeSound() }
        />

        </View>     
      </View>
      
    <View style={styles.settingsContainer}>
    {SoundSettings == true ? (
        <View style={styles.cluster1}>
          <View style={styles.objSetting}>
        <Text style={styles.title2}>Volume:{volume*100}%</Text>
              <Slider
          style={{width: WIDTH*.5}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#FFFFFF"
          step={.5}
          inverted={false}
          value={volume}
          onValueChange={
            (sliderValue) => setVolume(sliderValue)
          }    value={volume}
        />
        </View>

        <View style={styles.objSetting}>
              <Text style={styles.title2}>Auto Honk:</Text>
              <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isLooping ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isLooping}
            />
        </View>
        <View style={styles.objSetting}>
      {isLooping == false ? (
            <View style={styles.dynamicview}>
      <Text style={styles.title2}>Hjonk Number:{loopValue}</Text>
      <Slider
      style={{width: 180, height: 40}}
      minimumValue={0}
      maximumValue={10}
      
      minimumTrackTintColor="#000000"
      maximumTrackTintColor="#FFFFFF"
      step={1}
      inverted={false}
      value={loopValue}
      onValueChange={
        (sliderValue) => setLoopValue(sliderValue)
      }    value={loopValue}
    />
          </View>

      ) : null }



    </View>
            </View>
        ) : null }
    </View>
    <View style={styles.containerFlatlist}>
        {SoundSettingsShow == true  ?(
        <View style={styles.cluster2}>
          <View style={styles.objlist} >
          <Text style={styles.title1}>Honk:</Text>
                      <Picker
                  itemStyle={styles.listItem}    
                  selectedValue={hjonk}
                  style={styles.list}
                  onValueChange={(itemValue) =>
                    setHjonk(itemValue)
                  }>
                <Picker.Item label="Honk 1" value="Honk1"  />
                <Picker.Item label="Honk 2" value="Honk2"  />

              </Picker>
              </View>
              <View style={styles.objlist} >
              <Text style={styles.title1}>Glass:</Text>
                      <Picker
                  itemStyle={styles.listItem}    
                  selectedValue={glass}
                  style={styles.list}
                  onValueChange={(itemValue) =>
                    setGlass(itemValue)
                  }>
                <Picker.Item label="Glass 1" value="glass1"  />
                <Picker.Item label="Glass 2" value="glass2"  />

              </Picker>
              </View>
              <View style={styles.objlist} >
              <Text style={styles.title1}>Gossip:</Text>
                      <Picker
                  itemStyle={styles.listItem}    
                  selectedValue={gossip}
                  style={styles.list}
                  onValueChange={(itemValue) =>
                    setGossip(itemValue)
                  }>
                <Picker.Item label="Gossip 1" value="gossipbluehonk1"  />
                <Picker.Item label="Gossip 2" value="gossipbluehonk2"  />

              </Picker>
              </View>
              <View style={styles.objlist} >
              <Text style={styles.title1}>Harmonica:</Text>
                      <Picker
                  itemStyle={styles.listItem}    
                  selectedValue={harmonica}
                  style={styles.list}
                  onValueChange={(itemValue) =>
                    setHarmonica(itemValue)
                  }>
                <Picker.Item label="Harmonica 1" value="harmonica1"  />
                <Picker.Item label="Harmonica 2" value="harmonica2"  />


              </Picker>
              </View>
              <View style={styles.objlist} >
              <Text style={styles.title1}>Pylon:</Text>
                      <Picker
                  itemStyle={styles.listItem}    
                  selectedValue={pylon}
                  style={styles.list}
                  onValueChange={(itemValue) =>
                    setPylon(itemValue)
                  }>
                <Picker.Item label="Pylon 1" value="pylon1"  />
                <Picker.Item label="Pylon 2" value="pylon2"  />


              </Picker>
              </View>
              <View style={styles.objlist} >
              <Text style={styles.title1}>Bubble:</Text>
                      <Picker
                  itemStyle={styles.listItem}    
                  selectedValue={soap}
                  style={styles.list}
                  onValueChange={(itemValue) =>
                    setSoap(itemValue)
                  }>
                <Picker.Item label="Bubble 1" value="soap1"  />
                <Picker.Item label="Bubble 2" value="soap2"  />

              </Picker>
              </View>
              <View style={styles.objlist} >
              <Text style={styles.title1}>Trash Lid:</Text>
                      <Picker
                  itemStyle={styles.listItem}
                  selectedValue={trashlid}
                  style={styles.list}
                  onValueChange={(itemValue) =>
                    setTrashlid(itemValue)
                  }>
                <Picker.Item label="Trash Lid 1" value="trashlid1"  />
                <Picker.Item label="Trash Lid 2" value="trashlid2"  />
              </Picker>
              </View>
              <View style={styles.objlist} >
              <Text style={styles.title1}>Walki-Talki:</Text>
                      <Picker
                  itemStyle={styles.listItem}
                  selectedValue={walkietalki}
                  style={styles.list}
                  onValueChange={(itemValue) =>
                    setWalkietalkie(itemValue)
                  }>
                <Picker.Item label="Walki-Talki 1" value="walkietalkie1"  />
                <Picker.Item label="Walki-Talki 2" value="walkietalkie2"  />
              </Picker>
              </View>
              </View>
        ) : null 
        }
      </View>  
    <View style={styles.buttonContainer1}>
      <View style={styles.button1}>
        <FAB
          style={styles.fab}
          small
          icon='plus'
          label='Save'
          onPress={() => onChangeEffects() }
        />
        </View>
        <View style={styles.button1}>
          <FAB
          style={styles.fab}
          small
          icon='minus'
          label='Return without saving'
          onPress={() => navigation.goBack() }
        />
        </View>
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
  objSetting:{
    flexDirection:'row',
    justifyContent:'flex-start',
    paddingTop:'10%'
  },
  objlist:{
    width:WIDTH,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:"5%",
    paddingLeft:"5%",
  },  
  list: {
    backgroundColor:'#ff4f00',
    flexWrap:'wrap',
    marginLeft:'20%',
    width:WIDTH*.45,
    alignItems:"center",
  },
  listItem:{
    fontWeight:"bold",
    fontSize:10,
    borderColor:'black',

  },
  fab:{
    backgroundColor:'#517fa4',
    width:WIDTH*.9,
  },
  button:{
    width:WIDTH*.98,
    paddingBottom:"2%",
    paddingLeft:"3%",
  },
  button1:{
    width:WIDTH*.98,
    paddingBottom:"2%",
    justifyContent:"space-between",
    paddingLeft:"3%",
  },
  buttonContainer: {
    flexDirection:'column',
    justifyContent: 'space-evenly',
    paddingTop:'3%',
    paddingBottom:"10%"
    
  },
  buttonContainer1: {
    flexDirection:'column',
    justifyContent: 'space-evenly',
    paddingTop:'90%',
    
  },
  dynamicview: {
    flexDirection:'row'
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1
},
  cluster1: {
    flexDirection:'column',
    flexWrap:'wrap',
    paddingLeft:'5%',
    paddingBottom:'5%',
  },
  cluster2: {
    flexDirection:'column',
    flexWrap:'wrap',
  },
  title1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Roboto',
    paddingTop:HEIGHT*.02,

    },
    title2: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      fontFamily: 'Roboto',
      },
  settingsContainer: {
    flexDirection:'column',
    justifyContent: 'space-between',
    alignItems:'flex-start',
  },
})

export default SettingsPage