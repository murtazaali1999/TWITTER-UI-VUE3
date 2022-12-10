<template>
  <div class="home-wrapper">
    <Tweet v-for="(tweet, index) in tweets" :key="index" :tweet="tweet" />
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import axios from "axios";

import Tweet from "../components/Tweet.vue";
export default {
  setup() {
    const tweets = reactive([
      {
        name: "",
        image: "",
        tweet: "",
        retweet: 0,
        likes: 0,
        comments: "",
      },
    ]);

    const loading = ref(false);
    const error = ref(false);

    const getTweets = async () => {
      loading.value = true;

      try {
        const products = await axios.get("https://dummyjson.com/products");
        const comments = await axios.get("https://dummyjson.com/comments");

        //        console.log(products);

        products.data.products.map((product) => {
          const obj = {
            name: product.brand,
            image: product.images[0],
            tweet: product.description,
            retweet: product.price,
            likes: product.stock,
          };
          tweets.push(obj);
        });

        let iterate = 0;
        comments.data.comments.map((comment) => {
          tweets[iterate].comments = comment.body;
          iterate++;
        });
      } catch (error) {
        error.value = true;
        console.log(error);
      }
      loading.value = false;

      console.log(tweets);
    };

    return { tweets, getTweets, error };
  },
  components: { Tweet },
  async created() {
    await this.getTweets();
  },
};
</script>

<style lang="scss"></style>
