<template>
  <div class="project-row">
    <div class="cell project-id">{{data.id}}</div>
    <div class="cell project-label">{{data.label}}</div>
    <div class="cell project-status">
      <statuses-select :status-id="data.statusId"></statuses-select>
    </div>
  </div>
</template>

<script>
import StatusesSelect from '@/components/StatusesSelect/StatusesSelect.vue';

export default {
  name: 'project-row',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  components: {
    StatusesSelect,
  },
};
</script>

<style>
.project-row {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-auto-flow: column;
  gap: 5px;
  justify-content: center;
  color: #333;
  border-bottom: 1px solid #ccc;
  text-align: left;

  .cell {
    padding: 10px 15px;
  }
}
</style>
