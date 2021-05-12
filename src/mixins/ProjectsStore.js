import ProjectsService from '@/api/ProjectsService';

export const ProvidesProjectsStore = {
  provide() {
    return {
      projectsStore: this.projectsStore,
    };
  },
  async created() {
    const { data: projects } = await ProjectsService.getProjects();

    this.$set(this.projectsStore, 'projects', projects);
  },
  data() {
    return {
      projectsStore: {
        projects: [],
      },
    };
  },
};

export const UsesProjectsStore = {
  inject: ["projectsStore"],
};
