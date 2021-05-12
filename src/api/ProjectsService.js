import Vue from 'vue';

const baseUrl = 'http://localhost.scoro.com:8080/';

export default {
    getProjects() {
        return Vue.axios.get(`${baseUrl}/api/projects.json`);
    },
};
