import { Notifications, Permissions } from 'expo'

export function sameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();
}

function clearLocalNotifications () {
   return Notifications.cancelAllScheduledNotificationsAsync();
}

function createNotification () {
    return {
        title: 'Udacicards',
        body: "Time for some memory refresh!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification(date) {
    clearLocalNotifications()
        .then(() => {
            date.setHours(20);
            date.setMinutes(0);
            
console.log(`Going to schedule for: ${date.toJSON()}`)
            Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                    time: date,
                    repeat: 'day',
                }
            );
        });
}
