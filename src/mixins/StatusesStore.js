import StatusesService from '@/api/StatusesService';

export const ProvidesStatusesStore = {
  provide() {
    return {
      statusesStore: this.statusesStore,
    };
  },
  async created() {
    const { data: statuses } = await StatusesService.getStatuses();

    // Creating a map of the status ID and the corresponding status information
    this.$set(this.statusesStore, 'statuses', statuses.reduce((statusesMap, { id, ...config }) => (
        { ...statusesMap, [id]: { id, ...config } }
    ), {}));
  },
  data() {
    return {
      statusesStore: {
        statuses: [],
      },
    };
  },
};

export const UsesStatusesStore = {
  inject: ["statusesStore"],
};
