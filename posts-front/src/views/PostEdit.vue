<template>
  <div>
    <div
      class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="w-full max-w-md space-y-8">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-screen-md">
          <form>
            <div class="form-group mb-6">
              <h1
                class="font-serif text-3xl font-bold underline decoration-gray-400"
              >
                {{ title }}
              </h1>
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              Creation Date
            </div>
            <div class="form-group mb-6">
              {{ created_at }}
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
              type="button"
              class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <a href="/posts" style="color: white">Save</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
//import users store
import { usePostsStore } from "../stores/posts";
// declare store variable

const store = usePostsStore();
const route = useRoute();
const id = route.query.id;
const body = (post) => {
  post.input(JSON.stringify(store.getPosts.find((x) => x.id == id).body));
};
const created_at = store.getPosts.find((x) => x.id == id).created_at;
const title = store.getPosts.find((x) => x.id == id).title;

const post = computed(() => {
  return store.getPosts.find((x) => x.id == id);
});
const submit = async () => {
  await new Promise((r) => setTimeout(r, 1000));
  submitted.value = true;
};

onMounted(() => {
  store.fetchPosts();
});
</script>
