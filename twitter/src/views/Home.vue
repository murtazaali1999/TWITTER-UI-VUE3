<template>
  <div class="home-wrapper">
    <div class="text-white">Home Component</div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const tweets = ref([]);
  },
  components: {},
  created() {},
};
</script>

<style lang="scss"></style>
