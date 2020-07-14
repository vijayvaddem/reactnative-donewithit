import { useEffect } from "react";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

import expoPushTokensApi from "../api/expoPushTokens";
import logger from "../utility/logger";
//import navigation from "./rootNavigation";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();
    // used as callback handler when a usr clicks on notificaiton msg
    if (notificationListener) Notifications.addListener(notificationListener);
  }, []);

  //Register for push notifications
  const registerForPushNotifications = async () => {
    try {
      //ask for permissions
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      //if permission granted, get push notifications token
      const token = await Notifications.getExpoPushTokenAsync();

      //store push token with user details
      expoPushTokensApi.register(token);
    } catch (error) {
      logger.log("Error", error);
    }
  };
};
