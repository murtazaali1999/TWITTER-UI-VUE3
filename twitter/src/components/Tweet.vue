<template>
  <div class="tweet-wrapper tweet border-b border-gray-600">
    <router-link to="#" class="flex p-4">
      <figure class="w-16 mr-3">
        <img :src="tweet.image" alt="Img" class="rounded-full w-full" />
      </figure>
      <section class="tweet-body flex-1">
        <div class="tweet-author">
          <span class="text-white font-bold">
            {{ tweet.name }}
          </span>
        </div>
        <div :class="tweet.image ? 'mb-3' : ''">
          <p class="text-white">{{ tweet.tweet }}</p>
        </div>
        <div class="mt-2 flex items-center justify-between">
          <div class="text-gray-500">
            <font-awesome-icon
              icon="fas fa-comment"
              class="p-2 mr-1 rounded-full hover:bg-green-900 hover:text-green-500"
            />

            <font-awesome-icon
              icon="fas fa-retweet"
              class="p-2 ml-5 mr-1 rounded-full hover:bg-green-900 hover:text-green-500"
            />

            <font-awesome-icon
              icon="fas fa-heart"
              class="p-2 ml-5 mr-1 rounded-full hover:bg-green-900 hover:text-green-500"
            />

            <font-awesome-icon
              icon="fas fa-share"
              class="p-2 ml-5 mr-1 rounded-full hover:bg-green-900 hover:text-green-500"
            />
          </div>
        </div>
      </section>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["tweet"],
  setup() {},
  components: {},
  created() {},
};
</script>

<style lang="scss"></style>
