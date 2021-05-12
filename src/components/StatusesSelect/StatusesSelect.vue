<template>
  <div class="status-selection-container">
    <span
      class="status-select-label"
      :style="`--status-color: #${selectedStatusColor}`"
      @click="onStatusSelectLabelClick">
      {{ selectedStatusLabel }}
    </span>

    <status-options v-if="isStatusOptionsVisible">
      <template v-slot:option="{ status }">
        <status-option
          :status="status"
          :selected-status-id="selectedStatusId"
          @optionSelected="setSelectedStatus"></status-option>
      </template>
    </status-options>
  </div>
</template>

<script>
import { UsesStatusesStore } from '@/mixins/StatusesStore';
import StatusOptions from './StatusOptions.vue';
import StatusOption from './StatusOption.vue';

export default {
  name: 'status-selection',
  data() {
    return {
      selectedStatusId: null,
      selectedStatusLabel: null,
      selectedStatusColor: null,
      isStatusOptionsVisible: false,
    }
  },
  computed: {
    selectedStatus() {
      return this.statusesStore.statuses[this.statusId];
    },
  },
  methods: {
    setSelectedStatus(status) {
      const { id, label } = status || {};
      this.selectedStatusId = id;
      this.selectedStatusLabel = label;
      this.selectedStatusColor = this.statusesStore.statuses[id]?.color;
      this.isStatusOptionsVisible = false;
    },

    setDismissListenerOnBody() {
      document.body.addEventListener('click', () => {
        this.isStatusOptionsVisible = false;
      }, { once: true });
    },

    onStatusSelectLabelClick() {
      if (this.isStatusOptionsVisible) {
        this.setDismissListenerOnBody();
      }

      this.isStatusOptionsVisible = !this.isStatusOptionsVisible;
    }
  },
  props: {
    statusId: {
      type: Number,
      required: true,
    },
  },
  watch: {
    selectedStatus: {
      deep: true,
      immediate: true,
      handler: 'setSelectedStatus',
    }
  },
  components: {
    StatusOptions, StatusOption,
  },
  mixins: [
    UsesStatusesStore,
  ],
};
</script>

<style>
.status-selection-container {
  position: relative;

  .status-select-label {
    border-radius: 5px;
    background-color: var(--status-color);
    color: #FFFFFF;
    padding: 3px 10px;
    cursor: pointer;
  }
}
</style>
