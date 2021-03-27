import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

const NOTIFICATION_KEY = "UdaciCards:notifications";

export function clearLocalNotification() {
	return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
		Notifications.cancelAllScheduledNotificationsAsync
	);
}

function createNotification() {
	return {
		title: "Train your brain!",
		body: "👋 don't forget to answer some questions today!",
		ios: {
			sound: true,
		},
	};
}

export const setLocalNotification = async () => {
	try {
		const json = await AsyncStorage.getItem(NOTIFICATION_KEY);
		const data = await JSON.parse(json);
		if (data === null) {
			const { status } = await Permissions.askAsync(
				Permissions.NOTIFICATIONS
			);
			if (status === "granted") {
				Notifications.cancelAllScheduledNotificationsAsync();

				let tomorrow = new Date();
				tomorrow.setDate(tomorrow.getDate() + 1);
				tomorrow.setHours(20);
				tomorrow.setMinutes(0);

				Notifications.scheduleLocalNotificationAsync(
					createNotification(),
					{
						time: tomorrow,
						repeat: "day",
					}
				);

				AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
			}
		}
	} catch {e => console.log(e)}
};
