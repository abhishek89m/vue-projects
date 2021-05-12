import Vue from 'vue';

const baseUrl = 'http://localhost.scoro.com:8080/';

export default {
    getStatuses() {
        return Vue.axios.get(`${baseUrl}/api/statuses.json`);
    },
};
