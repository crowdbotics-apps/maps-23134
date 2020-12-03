import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile181449Navigator from '../features/UserProfile181449/navigator';
import Maps181430Navigator from '../features/Maps181430/navigator';
import Settings181408Navigator from '../features/Settings181408/navigator';
import Settings181393Navigator from '../features/Settings181393/navigator';
import NotificationList181392Navigator from '../features/NotificationList181392/navigator';
import Maps181391Navigator from '../features/Maps181391/navigator';
import UserProfile181390Navigator from '../features/UserProfile181390/navigator';
import Maps181371Navigator from '../features/Maps181371/navigator';
import Settings181349Navigator from '../features/Settings181349/navigator';
import Settings181334Navigator from '../features/Settings181334/navigator';
import NotificationList181333Navigator from '../features/NotificationList181333/navigator';
import Maps181332Navigator from '../features/Maps181332/navigator';
import UserProfile181322Navigator from '../features/UserProfile181322/navigator';
import Tutorial181321Navigator from '../features/Tutorial181321/navigator';
import NotificationList181293Navigator from '../features/NotificationList181293/navigator';
import Settings181292Navigator from '../features/Settings181292/navigator';
import Settings181284Navigator from '../features/Settings181284/navigator';
import UserProfile181282Navigator from '../features/UserProfile181282/navigator';
import BlankScreen0181105Navigator from '../features/BlankScreen0181105/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile181449: { screen: UserProfile181449Navigator },
Maps181430: { screen: Maps181430Navigator },
Settings181408: { screen: Settings181408Navigator },
Settings181393: { screen: Settings181393Navigator },
NotificationList181392: { screen: NotificationList181392Navigator },
Maps181391: { screen: Maps181391Navigator },
UserProfile181390: { screen: UserProfile181390Navigator },
Maps181371: { screen: Maps181371Navigator },
Settings181349: { screen: Settings181349Navigator },
Settings181334: { screen: Settings181334Navigator },
NotificationList181333: { screen: NotificationList181333Navigator },
Maps181332: { screen: Maps181332Navigator },
UserProfile181322: { screen: UserProfile181322Navigator },
Tutorial181321: { screen: Tutorial181321Navigator },
NotificationList181293: { screen: NotificationList181293Navigator },
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
