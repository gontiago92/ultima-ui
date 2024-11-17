// layers/shared/services/notification-service.ts

import { ref, readonly } from 'vue';

interface Notification {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
  timeout: number;
}

class NotificationService {
  private static instance: NotificationService;
  private notifications = ref<Notification[]>([]);
  private idCounter = 0;

  private constructor() {}

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  getNotifications() {
    return readonly(this.notifications);
  }

  addNotification(message: string, type: 'success' | 'error' | 'info', timeout = 5000) {
    const id = this.idCounter++;
    this.notifications.value.push({ id, message, type, timeout });

    setTimeout(() => {
      this.removeNotification(id);
    }, timeout);
  }

  private removeNotification(id: number) {
    this.notifications.value = this.notifications.value.filter(notification => notification.id !== id);
  }
}

export const notificationService = NotificationService.getInstance();
