<template>
  <div class="projects-grid">
    <div class="project-grid-header">
        <div class="header-item project-id">Project ID</div>
        <div class="header-item project-label">Label</div>
        <div class="header-item project-status">
          Status
        </div>
      </div>
    <project-row
      v-for="project in projectsStore.projects"
      :key="project.id"
      :data="project" />
  </div>
</template>

<script>
import { UsesProjectsStore } from '@/mixins/ProjectsStore';
import ProjectRow from '@/components/ProjectRow/ProjectRow.vue';

export default {
  name: 'projects',
  components: {
    ProjectRow,
  },
  mixins: [
    UsesProjectsStore,
  ],
}
</script>

<style scoped>
.projects-grid {
  margin: 0 auto;
  max-width: 1280px;

  .project-grid-header {
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-auto-flow: column;
    gap: 5px;
    justify-content: center;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      box-shadow: 0 1px 3px #ccc;
    }

    .header-item {
      padding: 10px 15px;
      color: #999;
      text-align: left;
      font-weight: lighter;
      font-size: 1.2em;
    }
  }
}
</style>
