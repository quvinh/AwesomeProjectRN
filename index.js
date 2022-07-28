/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Welcome, Login, Register, FoodList} from './screens';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FoodList);
