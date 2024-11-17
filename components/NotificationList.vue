<!-- layers/shared/components/NotificationList.vue -->
<script setup lang="ts">
import { notificationService } from '../services/notification-service';
import { computed } from 'vue';

const notifications = computed(() => notificationService.getNotifications().value);
</script>

<template>
  <div class="notification-list">
    <div v-for="notification in notifications" :key="notification.id" :class="`notification ${notification.type}`">
      {{ notification.message }}
    </div>
  </div>
</template>

<style scoped>
.notification-list {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.notification {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 3px;
  color: #fff;
}

.notification.success {
  background-color: #4caf50;
}

.notification.error {
  background-color: #f44336;
}

.notification.info {
  background-color: #2196f3;
}
</style>
