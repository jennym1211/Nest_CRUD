<template>
  <div>
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-screen-md">
      <form>
        <div class="form-group mb-6">
          <h1>{{ post.title }}</h1>
        </div>
        <div class="form-group mb-6">
          {{ post.created_at }}
        </div>
        <div class="form-group mb-6 max-w-screen-md">
          <FormKit
            type="textarea"
            @node="body"
            label="Post Text"
            rows="10"
            cols="50"
            placeholder="Your post input goes here.."
          />
        </div>

        <button
          type="submit"
          class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          <a href="/posts" style="color: white">Save</a>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
//import users store
import { usePostsStore } from "../stores/posts";
// declare store variable

const store = usePostsStore();
var id = new URL(location.href).searchParams.get("id");
const body = (post) => {
  post.input(JSON.stringify(store.getPosts.find((x) => x.id == id).body));
};

const post = computed(() => {
  console.log(id);
  return store.getPosts.find((x) => x.id == id);
});

onMounted(() => {
  store.fetchPosts();
});
</script>
