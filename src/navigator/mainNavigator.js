import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings203385Navigator from '../features/Settings203385/navigator';
import BlankScreen1203380Navigator from '../features/BlankScreen1203380/navigator';
import BlankScreen0203379Navigator from '../features/BlankScreen0203379/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings203385: { screen: Settings203385Navigator },
BlankScreen1203380: { screen: BlankScreen1203380Navigator },
BlankScreen0203379: { screen: BlankScreen0203379Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
