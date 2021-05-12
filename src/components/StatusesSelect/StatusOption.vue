<template>
  <div class="status-container" :class="activeClass" @click="onClick">
      <i class="status-color" :style="colorStyle"></i>
      <span class="status-label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'status-option',
  computed: {
    label() {
      return this.status?.label;
    },
    colorStyle() {
      return `--status-color: #${this.status?.color}`;
    },
    activeClass() {
      return {
        active: this.status?.id === this.selectedStatusId,
      }
    },
  },
  methods: {
    onClick() {
      this.$emit('optionSelected', this.status);
    }
  },
  props: {
    status: {
      type: Object,
      required: true,
    },
    selectedStatusId: {
      type: Number,
      default: () => null,
    },
  },
};
</script>

<style>
.status-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 12px;

  .status-color {
    display: inline-block;
    border: 1px solid #000;
    border-radius: 10px;
    height: 10px;
    width: 10px;
    background-color: var(--status-color);
    margin-right: 5px;
  }

  .status-label {
    color: #333333;
  }

  .status-label {
    border-radius: 5px;
    background-color: var(--status-color);
    color: #333;
    padding: 3px 10px;
    cursor: pointer;
  }

  &:hover {
    background-color: #f8f9fd;
  }

  &.active {
    background-color: #ebf5fa;
    border-left: 3px solid #0385e1;

    .status-color {
      box-shadow: 0 0 3px #FFFFFF;
    }

    .status-label {
      font-weight: bold;
    }
  }
}
</style>
