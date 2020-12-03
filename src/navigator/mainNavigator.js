import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings181292Navigator from '../features/Settings181292/navigator';
import Settings181284Navigator from '../features/Settings181284/navigator';
import UserProfile181282Navigator from '../features/UserProfile181282/navigator';
import BlankScreen0181105Navigator from '../features/BlankScreen0181105/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings181292: { screen: Settings181292Navigator },
Settings181284: { screen: Settings181284Navigator },
UserProfile181282: { screen: UserProfile181282Navigator },
BlankScreen0181105: { screen: BlankScreen0181105Navigator },

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
