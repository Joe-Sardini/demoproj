// src/GithubUserData/script.js
import bus from '../bus'
import Vue from 'vue'
import GithubUserData from '../GithubUserData/index.vue'


export default {
  name: 'GithubUserData',
  components: {
    'github-user-data': GithubUserData,
  },
  props: ['data'],
  data() {
    return {}
  }
}