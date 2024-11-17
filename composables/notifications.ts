export interface INotification {
  title: string
  message?: string
  type: string
  timeout?: number
}

export const useNotificationHandler = () => {
    const notifications = useState<INotification[]>('notifications', () => [])


    const addNotification = (notification: INotification) => {
        notification.timeout = notification.timeout || 5000
        notifications.value = [...notifications.value, notification]

        setTimeout(() => {
            notifications.value = []
        }, notification.timeout)
    }

    const removeNotification = (index: number) => {
        notifications.value = notifications.value.filter((_, i) => i !== index)
    }

    return {
        notifications,
        addNotification,
        removeNotification
    };
};
