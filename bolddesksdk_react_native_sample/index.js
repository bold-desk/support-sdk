/**
 * @format
 */

import { Image, AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import { BoldDeskSupportSDK} from 'bolddesk_support_sdk';
import { IMAGES } from "../constants/constants";


messaging().setBackgroundMessageHandler(async remoteMessage => {
  try {
    BoldDeskSupportSDK.showNotification(IMAGES.BOLDDESK_LOGO,remoteMessage.data)
    console.log('[FCM Background Handler] Notification shown successfully');
  } catch (error) {
    console.error('[FCM Background Handler] Error showing notification:', error);
  }
});

AppRegistry.registerComponent(appName, () => App);
