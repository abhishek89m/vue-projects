<template>
  <ul class="status-options-container">
    <li v-for="status in statusesStore.statuses" :key="status.id">
      <slot name="option" :status="status"></slot>
    </li>
  </ul>
</template>

<script>
import { UsesStatusesStore } from '@/mixins/StatusesStore';

export default {
  name: 'status-options',
  mixins: [
    UsesStatusesStore,
  ],
};
</script>

<style scoped>
.status-options-container {
  min-width: 200px;
  max-width: 300px;
  border-radius: 3px;
  background-color: #FFFFFF;
  z-index: 99;
  position: absolute;
  top: calc(1em + 8px);
  box-shadow: 0 0 5px #ccc;
  cursor: pointer;
}
</style>
