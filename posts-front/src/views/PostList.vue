<template>
  <div class="container max-w-7xl mx-auto mt-8">
    <div class="mb-4">
      <h1 class="font-serif text-3xl font-bold underline decoration-gray-400">
        Post Index
      </h1>
    </div>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Title
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Date
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Body
                </th>

                <th
                  class="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50"
                  colspan="3"
                >
                  Action
                </th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="post in getPosts" :key="post.id">
                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  {{ post.title }}
                </td>

                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <div class="text-sm leading-5 text-gray-900">
                    {{ post.created_at }}
                  </div>
                </td>

                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  {{ post.body }}
                </td>

                <td
                  class="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200"
                >
                  <button
                    type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    <router-link
                      :to="{ path: '/edit', query: { id: post.id } }"
                    >
                      Edit
                    </router-link>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
//import users store
import { usePostsStore } from "../stores/posts";
// declare store variable

const store = usePostsStore();

const getPosts = computed(() => {
  return store.getPosts;
});
const posts = computed(() => {
  console.log(store.posts);
  return store.posts;
});

onMounted(() => {
  store.fetchPosts();
});
</script>
