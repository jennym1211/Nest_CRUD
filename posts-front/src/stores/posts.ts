//stores/users.js
import { server } from "../utils/helper";
import { defineStore } from "pinia";
// Import axios to make HTTP requests
import axios from "axios";
export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [],
  }),
  getters: {
    getPosts(state) {
      return state.posts;
    },
  },
  actions: {
    async fetchPosts() {
      try {
        const data = await axios.get(`${server.baseURL}/posts/index`);
        this.posts = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
