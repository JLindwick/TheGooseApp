import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MainPage from '../screens/MainPage'
import SettingsPage from '../screens/SettingsPage'
import InfoPage from '../screens/InfoPage'
const StackNavigator = createStackNavigator(
  {
    MainPage: {
      screen: MainPage
    },
    SettingsPage: {
        screen: SettingsPage
    },
    InfoPage: {
      screen: InfoPage
    }
  },
  {
    initialRouteName: 'MainPage',
    headerMode: 'none',
    mode: 'modal'
  }
)
  
export default createAppContainer(StackNavigator)